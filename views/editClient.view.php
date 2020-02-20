<body>
    <script src="private/config.js"></script>
    <script type="text/javascript" language="javascript">
        var versionUpdate = (new Date()).getTime();
        var admin = document.createElement("script");

        setScript(admin, 'client');
    </script>
    <script type="text/javascript">
        var adminSession = '<?php echo $_SESSION['admin']; ?>';
    </script>
</body>

</html>