-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2020 a las 23:33:43
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

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id_client`, `name_client`, `age_client`, `weight_client`, `height_client`, `gender_client`, `birth_client`, `civil_client`, `ocupation_client`, `phone_client`, `mail_client`) VALUES
(111, 'JUAN DANIEL MARTINEZ NAVARRO', 22, 80, 165, 'hombre', '1997-02-27', 'soltero', 'Estudiante', 6271225229, 'jdmartinez@itparral.edu.mx'),
(112, 'LUIS CARLOS QUIÃ‘ONES BACA', 24, 67, 167, 'hombre', '1995-07-20', 'soltero', 'Estudiante', 6142352202, 'marineluis95@hotmail.com'),
(113, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'a313439@uach.mx'),
(114, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'eldieralan94@gmail.com'),
(115, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'tugefa@culo.com'),
(116, 'JUAN CARLOS PORRAS BACA', 24, 60, 187, 'hombre', '1995-06-02', 'soltero', 'Narcotraficante', 6271149283, 'jcporrasbaca@gmail.com'),
(117, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'axelgallardoibarra@gmail.com'),
(118, '', 1, 1, 1, 'hombre', '0213-02-02', 'soltero', 'l', 6247412365, 'ys_shavira@hotmail.com'),
(119, 'ALEJANDRO CHAVIRA', 26, 85, 170, 'hombre', '1993-09-15', 'soltero', 'RESIDENTE OBRA', 6141865650, 'alexchavira2121@gmail.com'),
(120, 'ASDFASDF', 12, 12, 123, 'hombre', '1234-02-02', 'soltero', 'dgdsg', 6271234567, 'hola@gmail.com'),
(121, 'FATIMA ALEJANDRA VENTURA SANCHEZ', 21, 50, 157, 'mujer', '1998-07-31', 'soltero', 'Estudiante', 6271143968, 'fatimaventura-s@hotmail.com'),
(122, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'fannyrgzzlya@gmail.com'),
(123, 'RUBEN DELGADO MINJARES', 22, 111, 184, 'hombre', '1997-06-23', 'soltero', 'Estudiante', 6271233061, 'delgadominjares@gmail.com'),
(124, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'taisha59@live.com.mx'),
(125, '', 0, 0, 0, 'otro', NULL, 'otro', NULL, NULL, 'a336060@uach.mx'),
(126, 'AIRAM SAMMAI VENCES HERNANDEZ', 20, 58, 154, 'mujer', '1999-07-21', 'soltero', 'Estudiante', 6271435309, 'sammai21.sv@gmail.com'),
(127, 'EL JUAN', 19, 60, 160, 'hombre', '2001-02-01', '', 'Nada', 6278964321, 'juanda@gmail.com'),
(128, 'TUSO', 12, 12, 123, 'otro', '0101-01-01', 'viudo', 'asdfafg', 6274563887, 'elmijito@hotmail.com'),
(129, 'ROSALIA', 1, 1, 1, 'otro', '0001-01-01', 'otro', '1', 1, 'larosalia@gmail.com'),
(130, 'JORDI ENP GARCÃA', 22, 80, 200, 'hombre', '7896-12-02', 'soltero', 'asdfasdf', 651315, 'pamatarlatusa@gmail.com'),
(131, 'BANANONSOTE MONTES', 18, 60, 160, 'hombre', '2002-02-01', 'soltero', 'Estudiante', 6274553279, 'norompasmas@tucola.com');

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

--
-- Volcado de datos para la tabla `quiz`
--

INSERT INTO `quiz` (`id_quiz`, `date_quiz`, `fk_id_client`, `q_01`, `q_02`, `q_02_01`, `q_03`, `q_03_01`, `q_04`, `q_04_01`, `q_04_02`, `q_05`, `q_05_01`, `q_06`, `q_06_01`, `q_07`, `q_08`, `q_09`, `q_010`, `q_011`, `q_011_01`, `q_012`, `q_012_01`, `q_012_02`, `q_012_03`, `q_013`, `q_013_01`, `q_013_02`, `q_014`, `q_014_01`) VALUES
(83, '2019-11-27 16:47:31', 111, 'Quiero bajar de peso', '0', '', '0', '', '0', '', '', '0', '', 'ninguna', '', 'Torta de bistec y una coca', 'Milanesa de res con caca', 'Aguacate', 'Ninguno', '0', '', '0', '', '', '', '0', '', '', '0', ''),
(84, '2019-11-27 16:51:58', 112, 'Hola', '0', '', '0', '', '0', '', '', '0', '', 'diabetes,hta', '', '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(85, '2019-11-27 17:20:59', 113, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(86, '2019-11-27 17:33:10', 114, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(87, '2019-11-27 18:18:42', 115, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(88, '2019-11-27 18:18:52', 116, 'Toy bien jodido jaja', '1', 'SÃ­ndrome de Gilbert', '0', '', '0', '', '', '0', '', 'ninguna', '', 'Panochita, chichitas y gorditas de la canasta', 'HUEBITO', 'chingaderas con cilantro fa', 'Abuacates, plÃ¡tanos', '1', 'Lactosa xd', '0', '', '', '', '0', '', '', '0', ''),
(89, '2019-11-28 20:54:28', 117, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(90, '2019-11-29 00:11:27', 118, 'l', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(91, '2019-12-03 19:23:59', 119, 'PERDIDA DE PESO', '0', '', '0', '', '0', '', '', '0', '', 'obesidad,hta', '', 'Desayuno 6:30am:  Â½ tz de chile, tomate y cebolla \n2 pz de tortilla de maÃ­z   \n1 pz de huevo entero\n1 Â½ tz de leche \n1-2 cucharadita (cafÃ©) \n1 Â½ cucharadita de mantequillA\nCOLACION MAÃ‘ANA: 1 pz de plÃ¡tano \n1 pz de pan tostado  \n1 Â½ cucharadita de mantequilla \nCOMIDA: tz de verduras al vapor \n1 tz de mango picado \n2/3 tz de arroz cocido  \n80 gr de filete de pescado\n1 cucharadita (agua fresca)\n\nCOLACION TARDE:\n1/3 pz de melÃ³n \n3 pz de nuez \n1 cucharadita de miel \n1 scoop de proteÃ­na \n\nCENA:\n1TZ yogurt natural\n1 Reb queso panela\n2Tortillas de Maiz\n2 Rebanadas de jamon\n1/2 Taza de Lentejas.', 'Pollo', 'Pescado', 'ninguno', '0', '', '1', 'PRO TF', '1 Scoop (17 GRS)', 'Perdida de PESO', '1', 'Tae Kwon do y running', 'Agosto 2019', '0', ''),
(92, '2019-12-10 16:39:02', 120, 'adfgasdfa', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(93, '2019-12-15 19:42:49', 121, 'Subir masa magra', '0', '', '0', '', '0', '', '', '0', '', 'hta,cancer', '', '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(94, '2019-12-16 01:47:08', 122, '', '0', '', '0', '', '0', '', '', '0', '', '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(95, '2019-12-16 21:09:02', 123, 'Bajar de peso', '0', '', '0', '', '0', '', '', '0', '', 'diabetes', '', '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(96, '2019-12-16 22:41:37', 124, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(97, '2019-12-16 22:42:03', 125, '', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(98, '2019-12-17 01:04:31', 126, '.', '0', '', '0', '', '0', '', '', '0', '', 'obesidad,diabetes,hta', '', '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(99, '2019-12-17 20:14:12', 127, 'Nel morro', '1', 'hola', '0', '', '0', '', '', '0', '', '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(100, '2019-12-17 20:58:45', 128, 'agadfga', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(101, '2019-12-17 23:32:05', 129, '1', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(102, '2020-01-31 09:40:26', 130, 'sdafsadf', '0', NULL, '0', NULL, '0', NULL, NULL, '0', NULL, '', NULL, '', '', '', '', '0', NULL, '0', NULL, NULL, NULL, '0', NULL, NULL, '0', NULL),
(103, '2020-02-02 12:41:36', 131, 'dgdfgsdfgsdfg', '1', 'sdf', '1', 'asdf', '1', 'asdf', 'asdf', '1', 'asdf', 'ninguna', '', 'holasdfasdf', 'hola', 'hola', 'hola', '1', 'soy tremendo ajjjasj', '0', '', '', '', '0', '', '', '0', '');

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
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `name_user`, `password_user`) VALUES
(1, 'juan daniel', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3e'),
(2, 'admin', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3e'),
(3, 'luis carlos', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3e'),
(4, 'juan carlos', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3e'),
(5, 'yered', '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3e');

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
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT de la tabla `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id_quiz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
