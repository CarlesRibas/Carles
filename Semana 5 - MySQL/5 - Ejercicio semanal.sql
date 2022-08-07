-- Crea una tabla que permita guardar usuarios en la que guardes una id, su DNI, su tlf., su email, su nombre y apellidos.  Crea también campos para su dirección: país, CP, varias líneas de dirección...

create database if not exists infouser;
show databases;
use infouser;

create table if not exists usuario (
	id int unsigned primary key auto_increment,
    first_name varchar (30) not null,
    last_name varchar (30) not null,
	email varchar (50) not null,
    tlf varchar (20) not null,
    DNI varchar(20) not null,
    country varchar (30) not null,
    CP int unsigned not null,
    addr_line1 varchar(100) not null,
    addr_line2 varchar(100)
);

select * from usuario;



-- Modifica (mediante el comando ALTER TABLE) la tabla del ejercicio 1 moviendo los datos referidos a la dirección a una tabla nueva, relacionando las dos mediante foreign keys. 
-- Crea un diagrama ER que muestre la base de datos resultante.

alter table usuario drop column country;
alter table usuario drop column CP;
alter table usuario drop column addr_line1;
alter table usuario drop column addr_line2;

select * from usuario;

create table if not exists direccion (
	id int unsigned primary key auto_increment,
    idUser int unsigned not null,
	country varchar (30) not null,
    CP int unsigned not null,
    addr_line1 varchar(100) not null,
    addr_line2 varchar(100)
);

select * from direccion;



-- Inserta los siguientes datos en la DB del ejercicio 2, es posible que tengas que acomodar los datos a tu estructura de base de datos:

-- id,first_name,last_name,email,tlf,DNI,country,cp,addr_line1,addr_line2
-- 1,Irvin,Lethem,ilethem0@google.com.au,993870144,279948941-9,Indonesia,83297,98339 Loftsgordon Road,Babakanbandung
-- 2,Kylie,Mungan,kmungan1@howstuffworks.com,497494899,748551874-7,Philippines,44455,74641 Dwight Avenue,Bilar
-- 3,Yul,Dibbert,ydibbert2@businesswire.com,776631050,215649413-4,Indonesia,62965,9510 Milwaukee Street,Sumberejo
-- 4,Tamra,Mc Gorley,tmcgorley3@studiopress.com,921948685,617064473-7,Norway,54756,8902 Doe Crossing Alley,Steinkjer
-- 5,Elmira,Imbrey,eimbrey4@cpanel.net,304168000,178988896-4,United States,51471,8616 Stephen Hill,Charleston

insert into usuario (first_name, last_name, email, tlf, DNI) values
	('Irvin', 'Lethem', 'ilethem0@google.com.au' , '993870144', '279948941-9'),
    ('Kylie', 'Mungan', 'kmungan1@howstuffworks.com', '497494899', '748551874-7'),
    ('Yul', 'Dibbert', 'ydibbert2@businesswire.com', '776631050', '215649413-4'),
    ('Tamra', 'Mc Gorley', 'tmcgorley3@studiopress.com', '921948685', '617064473-7'),
    ('Elmira', 'Imbrey', 'eimbrey4@cpanel.net', '304168000', '178988896-4')
	;

select * from usuario;

insert into direccion (idUser, country, cp, addr_line1, addr_line2) values
	(1, 'Indonesia', 83297, '98339 Loftsgordon Road', 'Babakanbandung'),
    (2, 'Philippines', 44455, '74641 Dwight Avenue', 'Bilar'),
    (3, 'Indonesia', 62965, '9510 Milwaukee Street', 'Sumberejo'),
    (4, 'Norway', 54756, '8902 Doe Crossing Alley', 'Steinkjer'),
    (5, 'United States', 51471, '8616 Stephen Hill', 'Charleston')
    ;

select * from direccion;



-- Selecciona el nombre, apellido y número de teléfono de todos los usuarios, ordenados alfabéticamente según su apellido.
-- Después haz otra consulta que indique cuántos usuarios hay de cada país, basándote en la tabla de direcciones.

 select first_name, last_name, tlf from usuario order by last_name asc;
 
 select count(*), country from direccion group by country; 
 

-- Selecciona todos los datos de los usuarios, incluida toda la información de su dirección.

select *
from usuario u inner join direccion d
on (u.id = d.idUser);


-- Actualiza la tabla de usuarios para añadir una columna para la edad. A continuacion, rellena esa columna para los 5 usuarios que existen.

alter table usuario add(birth date not null);

select * from usuario;

update usuario set birth = '1986-07-25' where id like 1;
update usuario set birth = '1980-05-13' where id like 2;
update usuario set birth = '1990-04-05' where id like 3;
update usuario set birth = '1993-02-20' where id like 4;
update usuario set birth = '1995-12-03' where id like 5;


-- Selecciona el nombre y la edad del/los usuario/s más mayores.

select first_name, birth from usuario order by birth asc;


drop database if exists infouser;

show databases;



