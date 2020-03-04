<?php
require 'database.php';
require '../private/config.php';
require __DIR__ . '/../vendor/autoload.php';

use Minishlink\WebPush\WebPush;
use Minishlink\WebPush\Subscription;

// here I'll get the subscription endpoint in the POST parameters
// but in reality, you'll get this information in your database
// because you already stored it (cf. push_subscription.php)
$con = connection($db_config);
$statement = $con->query("SELECT endpoint_user FROM users WHERE endpoint_user != ''");
$statement->execute();
$result = $statement->fetchAll();
$endp = [];

for ($i = 0; $i < count($result); $i++) {
    $endp = [
        'endpoint' => $result[$i][0],
        'contentEncoding' => 'aesgcm'
    ];

    $subscription = Subscription::create($endp);

    $auth = array(
        'VAPID' => array(
            'subject' => 'http://localhost/cuervo-nut/',
            'publicKey' => file_get_contents(__DIR__ . '/../keys/public_key.txt'), // don't forget that your public key also lives in app.js
            'privateKey' => file_get_contents(__DIR__ . '/../keys/private_key.txt'), // in the real world, this would be in a secret file
        ),
    );

    $webPush = new WebPush($auth);

    $res = $webPush->sendNotification(
        //TODO: Fix the problem with data.text in the service worker file
        $subscription,
        "Hola Juanito"
    );

    // handle eventual errors here, and remove the subscription from your server if it is expired
    foreach ($webPush->flush() as $report) {
        $endpoint = $report->getRequest()->getUri()->__toString();

        if ($report->isSuccess()) {
            echo "[v] Message sent successfully for subscription {$endpoint}.";
        } else {
            echo "[x] Message failed to sent for subscription {$endpoint}: {$report->getReason()}";
        }
    }
}
