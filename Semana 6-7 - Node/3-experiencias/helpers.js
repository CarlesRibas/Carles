const { unlink } = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const uuid = require ('uuid');
const avatarsDir = path.join(__dirname,'static/avatars');
const experiencesDir = path.join(__dirname,'static/experiences');



function generateError(message, code) {
  const error = new Error (message);
  error.httpStatus = code; 
  return error;
}



async function deletePhoto(photoName, type) {

  try {
    let photoPath;

    if (type === 0) {
      photoPath = path.join(avatarsDir, photoName);
    } else if (type === 1) {
      photoPath = path.join(experiencesDir, photoName);
    }
  
    await unlink(photoPath);
    
  } catch (error) {
    throw new Error ('Error al eliminar la imagen del servidor');
  }
}



async function savePhoto(imagen, type){
  try {
    const sharpImage = sharp(imagen.data)

    let imageDirectory;

    const imageName = uuid.v4() + '.jpg';

    if (type === 0) {
      imageDirectory = path.join(avatarsDir, imageName);

      sharpImage.resize(150, 150);

    } else if (type === 1) {
      imageDirectory = path.join(experiencesDir, imageName);
    }

    await sharpImage.toFile(imageDirectory);

    return imageName;

  } catch (error) {
    throw new Error ('Error al procesar la imagen');
  }
};

module.exports = {
  generateError,
  deletePhoto,
  savePhoto,
};