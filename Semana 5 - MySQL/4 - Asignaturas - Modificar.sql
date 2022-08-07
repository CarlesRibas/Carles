-- Usamos la base de datos de Ej2.
use asignaturas;


-- Inserta 2 nuevos profesores

insert into profesor (nombre, primerApellido, segundoApellido) values 
('Rodolfo', 'Expósito', null), ('María', 'Pérez', 'García');

select * from profesor;


-- Modifica todos los profesores que no tengan un segundo apellido y añadele como apellido2 'No tiene segundo apellido'

update profesor set segundoApellido = 'No tiene segundo apellido' where segundoApellido is null;


-- Añade 2 nuevas asignaturas

select * from asignatura;

insert into asignatura (nombre, horas, idProfesor) values 
('Naturales', 90, 3),  ('Sociales', 90, 4); 


-- Elimina la última asignatura y el último profesor insertados

delete from asignatura order by id desc limit 1; 
delete from profesor order by id desc limit 1;


-- Selecciona todos los datos de las asignaturas junto a los profesores que las imparten

select * from asignatura a inner join profesor p on (a.idProfesor = p.id); 


-- Selecciona el nombre, nHoras, nombre y apellido de las asignaturas y profesores que las imparten 
-- de las asignaturas cuyo nombre empiece por 'M'.

select a.nombre, a.horas, p.nombre, p.primerApellido, p.segundoApellido
from asignatura a inner join profesor p
on (a.idProfesor = p.id)
where a.nombre like 'm%';


-- Muestra el nombre, apellido, fechaIniCurso, fechaFinCurso y nombre de asignatura de todos los alumnos
-- que estén cursando una asignatura.

select a.nombre, a.primerApellido, a.segundoApellido, asi.nombre, aca.fechaInicio, aca.fechaFin
from alumno_cursa_asignatura aca inner join alumno a
on (aca.idAlumno = a.id) inner join asignatura asi
on (aca.idAsignatura = asi.id);


-- Muestra el nombre, apellido, fechaIniCurso, fechaFinCurso y nombre de asignatura de todos los alumnos
-- que estén cursando una asignatura donde el alumno tenga segundo apellido y la asignatura dure más de 100 horas.

select a.nombre, a.primerApellido, a.segundoApellido, asi.nombre, aca.fechaInicio, aca.fechaFin
from alumno_cursa_asignatura aca inner join alumno a
on (aca.idAlumno = a.id) inner join asignatura asi
on (aca.idAsignatura = asi.id)
where a.segundoApellido is not null and asi.horas >=100;

