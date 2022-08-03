-- Usamos la base de datos de Ej02.
use asignaturas;


-- Seleccionar de la tabla alumno solamente los campos nombre y apellido1

select nombre, primerApellido from alumno;


-- Seleccionar de la tabla profesor todos los campos.

select * from profesor;

select id, nombre, primerApellido, segundoApellido from profesor;


-- Selecciona todos los datos solamente del alumno con primer o segundo apellido Ribas

select * from alumno where primerApellido like '%Ribas%' or segundoApellido like '%Ribas%';


-- Indica la media de horas de las asignaturas

select avg (horas) from asignatura;


-- Selecciona las asignaturas cuyo numero de horas dure entre 90 y 110 además que la imparta el profesor con id 1

select * from asignatura where horas between 90 and 110 and idProfesor = 1;


-- Cuál es la asignatura con mayor número de horas?

select nombre from asignatura where horas = (select max(horas) from asignatura);

-- Selecciona todos los datos de los alumno_cursa_asignatura donde la asignatura sea la id 1 y la fecha de fin de curso sea el 2023-01-10

select * from alumno_cursa_asignatura where id like 1 and fechaFin like '2023-01-10';

-- Selecciona todos los datos de la asignatura con menor número de horas.

select * from asignatura where horas = (select min(horas) from asignatura);