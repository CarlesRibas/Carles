const getDB = require('./getDB');

async function main() {
  
  let connection;

  try {
    connection = await getDB();

    console.log('Eliminando tablas...');

    await connection.query('drop table if exists experiencia');
    await connection.query('drop table if exists empresa');
    await connection.query('drop table if exists usuario');
    
    console.log('Tablas eliminadas');

    console.log('Creando tablas...');

    await connection.query(`
      create table if not exists usuario (
        id int unsigned primary key auto_increment,
        nombre varchar(30) not null,
        apellido1 varchar(30) not null,
        apellido2 varchar(30),
        fecha_nac date not null,
        email varchar(100) not null,
        password varchar(200) not null,
        tipo enum('admin', 'normal') default 'normal',
        createdAt datetime
      )
    `);

    await connection.query(`
        create table if not exists empresa (
          id int unsigned primary key auto_increment,
          nombre varchar(100) not null
        )
    `);

    await connection.query(`
        create table if not exists experiencia (
          id int unsigned primary key auto_increment,
          titulo varchar(100) not null,
          precio decimal(8,2) not null,
          descripcion text,
          localizacion varchar(100) not null,
          idEmpresaOrganiza int unsigned not null
        )
    `);
    
    console.log('Tablas creadas');

    console.log('Insertando datos de prueba...');

    await connection.query(`
        insert into usuario (nombre, apellido1, apellido2, fecha_nac, email, password, tipo, createdAt)
        values('Carles', 'Ribas', 'Costa', '1986/07/25', 'admin@gmail.com', '12345', 'admin', ?)`, 
        [new Date()]
    );

    await connection.query(`
        insert into empresa (nombre)
        values('Your Experience'),
        ('Vive el Momento')
    `);

    await connection.query(`
        insert into experiencia (titulo, precio, descripcion, localizacion, idEmpresaOrganiza)
        values('Salto en paracaídas', 100.00, 'Vive la experiencia de saltar en paracaídas', 'Valencia', 1),
        ('Surf', 25.00, 'Cabalga las olas.', 'Valencia', 1),
        ('Escalada', 19.99, 'Practica escalada con nuestro equipo', 'Pirineos', 2),
        ('Senderismo', 14.99, 'Descubre nuevos parajes en los Pirineos', 'Pirineos', 2)
        `);

    console.log('Datos de prueba insertados con éxito');

  } catch (error) {
    console.error(error.message);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
}

main();