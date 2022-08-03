create database if not exists asignaturas;

show databases;

use asignaturas;

create table if not exists alumno (
	id int unsigned primary key auto_increment,
    nombre varchar(30) not null,
	primerApellido varchar(30) not null,
    segundoApellido varchar(30)
);

create table if not exists profesor (
	id int unsigned primary key auto_increment,
    nombre varchar(30) not null,
	primerApellido varchar(30) not null,
    segundoApellido varchar(30)
);

create table if not exists asignatura (
	id int unsigned primary key auto_increment,
    nombre varchar (30) not null,
    horas int unsigned not null,
    idProfesor int unsigned not null,
		foreign key(idProfesor) references profesor(id)
);

create table if not exists alumno_cursa_asignatura (
	id int unsigned primary key auto_increment,
    fechaInicio date not null,
    fechaFin date not null,
    idAlumno int unsigned not null,
		foreign key(idAlumno) references alumno(id),
	idAsignatura int unsigned not null,
		foreign key(idAsignatura) references asignatura(id)
);

show tables;

insert into alumno (nombre, primerApellido, segundoApellido) values
('Carles', 'Ribas', 'Costa'),
('Javier', 'Dabbah', 'Velazquez'),
('Carlos', 'del Campo', 'Coch'),
('Dunia', 'Pons', 'Viña')
;

insert into profesor (nombre, primerApellido, segundoApellido) values
('Nuria', 'Alonso', 'Garcia'),
('Jose', 'Ruiz', 'Diaz')
;

select * from alumno;

insert into asignatura (nombre, horas, idProfesor) values
('castellano', 100, 1),
('inglés', 80, 1),
('matemáticas', 100, 2)
;
 
 select * from asignatura;
 
 insert into alumno_cursa_asignatura (idAlumno, idAsignatura, fechaInicio, fechaFin) values
 (1, 1, '2022-10-10',  '2023-01-10'),
 (1, 3, '2022-10-20',  '2023-01-20'),
 (2, 1, '2022-10-10',  '2023-01-10'),
 (2, 3, '2022-10-20',  '2023-01-20'),
 (3, 1, '2022-10-10',  '2023-01-10'),
 (3, 2, '2022-10-15',  '2023-01-15'),
 (3, 3, '2022-10-20',  '2023-01-20'),
 (4, 1, '2022-10-10',  '2023-01-10'),
 (4, 3, '2022-10-20',  '2023-01-20')
 ; 
 
select * from alumno_cursa_asignatura;

drop database if exists asignaturas;