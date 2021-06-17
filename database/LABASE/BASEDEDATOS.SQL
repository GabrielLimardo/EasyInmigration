CREATE DATABASE easyinmigration;

USE easyinmigration;

CREATE TABLE countries (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(30) DEFAULT NULL,
  Banderas varchar(30) DEFAULT NULL,
  Idioma varchar(30) DEFAULT NULL,
  GastoAlimento varchar(30) DEFAULT NULL,
  GastoTrasporte varchar(30) DEFAULT NULL,
  GastoVivienda varchar(30) DEFAULT NULL,
  Industrias varchar(30) DEFAULT NULL,
  Desempleo int(11) DEFAULT NULL,
  SalarioMinimo int(11) DEFAULT NULL,
  SalarioMedio int(11) DEFAULT NULL,
  TipoDeVisado varchar(30) DEFAULT NULL,
  ServiciosPublicos varchar(30) DEFAULT NULL,
  BajoClima int(11) DEFAULT NULL,
  PromClima int(11) DEFAULT NULL,
  AltoClima int(11) DEFAULT NULL,
  PBI int(11) DEFAULT NULL,
  PBIperCapital int(11) DEFAULT NULL,
  Inflacion int(11) DEFAULT NULL,
  createdAt datetime DEFAULT current_timestamp(),
  updatedAt datetime DEFAULT NULL ON UPDATE current_timestamp(),
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

INSERT INTO countries VALUES 
(1,'Argentina','arg.png','Español','GastoAlimento','GastoTrasporte','GastoVivienda','Industrias','20','20','20','TipoDeVisado','ServiciosPublicos','20','20','20','20','20','20','2020-07-15 11:34:38',NULL,NULL),
(2,'Canada','can.png','Ingles','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL),
(3,'Australia','aus.png','Ingles','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL),
(4,'Nueva Zelanda','nue.png','Ingles','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL),
(5,'Panama','pan.png','Español','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL),
(6,'España','esp.png','Español','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL),
(7,'Irlanda','irl.png','Ingles','GastoAlimento','','','','','','','','','','','','','','','2020-07-15 11:34:38',NULL,NULL);


CREATE TABLE roles (
  rol_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) DEFAULT NULL,
  PRIMARY KEY (rol_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE users (
  username varchar(30) DEFAULT NULL,
  email varchar(30) DEFAULT NULL,
  password varchar(64) DEFAULT NULL,
  rol int(11) NOT NULL DEFAULT 0,
  id int(11) NOT NULL AUTO_INCREMENT,
  image varchar(30) DEFAULT NULL,
  createdAt datetime DEFAULT current_timestamp(),
  updatedAt datetime DEFAULT NULL ON UPDATE current_timestamp(),
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

INSERT INTO users VALUES ('Admin','admin@gmail.com','$2a$10$nTBTy7NOfdvV3NXz9DnW/uhqQ1lH1VZKKUGPZ3FtX.TAU9zNVm75G',1,1,'arg.png','2020-07-15 11:34:38',NULL,NULL);
INSERT INTO users VALUES ('Client','client@gmail.com','$2a$10$nTBTy7NOfdvV3NXz9DnW/uhqQ1lH1VZKKUGPZ3FtX.TAU9zNVm75G',0,2,'arg.png','2020-07-15 11:34:38',NULL,NULL);

CREATE TABLE comments (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(500) DEFAULT NULL,
  userId int(10) unsigned DEFAULT NULL,
  createdAt datetime DEFAULT current_timestamp(),
  updatedAt datetime DEFAULT NULL ON UPDATE current_timestamp(),
  deletedAt datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE comments
  ADD KEY userId (userId);
INSERT INTO comments VALUES (1,'Me sirvio un monto muchas gracias',2,'2020-07-15 11:34:38',NULL,NULL);

CREATE TABLE items (
  id int(10) UNSIGNED NOT NULL,
  quantity int(11) NOT NULL DEFAULT 1,
  CountriesId int(10) UNSIGNED NOT NULL,
  state tinyint(4) NOT NULL DEFAULT 1,
  userId int(10) UNSIGNED NOT NULL,
  createdAt datetime DEFAULT current_timestamp(),
  updatedAt datetime DEFAULT NULL ON UPDATE current_timestamp(),
  deletedAt datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE items
  ADD PRIMARY KEY (id),
  ADD KEY carts_ibfk_1 (userId),
  ADD KEY CountriesId (CountriesId);
ALTER TABLE items
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;