
create database if not exists CampeonatoDeFutbol;

show databases;

use CampeonatoDeFutbol;

create table if not exists equipo (
	id int unsigned primary key auto_increment,
    nombre varchar(30) not null,
    categoria varchar(30) not null,
    patrocinador1 varchar(30) not null,
    patrocinador2 varchar(30) not null,
    colorCamiseta1 varchar(30) not null,
    colorCamiseta2 varchar(30)not null
);

create table if not exists jugador (
	id int unsigned primary key auto_increment,
    idEquipo int unsigned not null,
		foreign	key(idEquipo) references equipo(id),
	dni varchar(15) unique not null,
    nombre varchar(30) not null,
    apellido1 varchar (30) not null,
    apellido2 varchar (30),
    fechaDeNacimiento Date not null,
    direccion varchar (50) not null,
    telefono varchar(20) not null
);

create table if not exists partido(
	id int unsigned primary key auto_increment,
    campo varchar(30) not null,
    arbitro varchar (50) not null,
    resultado varchar (30) not null,
    incidencias varchar (150)
);

create table if not exists equipo_juega_partido(
	id int unsigned primary key auto_increment,
    idEquipoLocal int unsigned not null,
		foreign key(idEquipoLocal) references equipo(id),
	idEquipoVisitante int unsigned not null,
		foreign key(idEquipoVisitante) references equipo(id),
	idPartido int unsigned not null,
		foreign key(idPartido) references partido(id)
);

show tables;

alter table jugador drop column direccion;
alter table jugador add column calle varchar(100) not null;
alter table jugador add column cp int unsigned not null;

describe jugador;

drop table if exists equipo_juega_partido;
drop table if exists partido;
drop table if exists jugador;
drop table if exists equipo;

drop database if exists CampeonatoDeFutbol;

show databases;