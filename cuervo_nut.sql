-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2019 a las 22:46:23
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cuervo_nut`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id_client` int(11) NOT NULL,
  `name_client` varchar(50) COLLATE utf8_bin NOT NULL,
  `age_client` int(2) NOT NULL,
  `weight_client` int(3) NOT NULL,
  `height_client` float NOT NULL,
  `gender_client` enum('hombre','mujer','otro') COLLATE utf8_bin NOT NULL DEFAULT 'otro',
  `birth_client` date DEFAULT NULL,
  `civil_client` enum('soltero','casado','viudo','otro') COLLATE utf8_bin DEFAULT 'otro',
  `ocupation_client` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `phone_client` bigint(10) DEFAULT NULL,
  `mail_client` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quiz`
--

CREATE TABLE `quiz` (
  `id_quiz` int(11) NOT NULL,
  `date_quiz` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_id_client` int(11) NOT NULL,
  `q_01` text COLLATE utf8_bin NOT NULL,
  `q_02` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_02_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_03` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_03_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_04` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_04_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_04_02` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_05` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_05_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_06` set('obesidad','diabetes','hta','cancer','hipercolesterolemia','hipertrigliceridemia','hipotiroidismo','ninguna','otra') COLLATE utf8_bin NOT NULL,
  `q_06_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_07` text COLLATE utf8_bin NOT NULL,
  `q_08` varchar(50) COLLATE utf8_bin NOT NULL,
  `q_09` varchar(50) COLLATE utf8_bin NOT NULL,
  `q_010` varchar(50) COLLATE utf8_bin NOT NULL,
  `q_011` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_011_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_012` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_012_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_012_02` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_012_03` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_013` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_013_01` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_013_02` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `q_014` enum('0','1') COLLATE utf8_bin NOT NULL DEFAULT '0',
  `q_014_01` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(50) COLLATE utf8_bin NOT NULL,
  `password_user` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `mail_client` (`mail_client`),
  ADD UNIQUE KEY `phone_client` (`phone_client`) USING BTREE;

--
-- Indices de la tabla `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id_quiz`),
  ADD KEY `fk_id_client` (`fk_id_client`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `name_user` (`name_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id_quiz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`fk_id_client`) REFERENCES `clients` (`id_client`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
