const fs     = require('fs');
const path   = require('path');

const sPhotoPath = path.join('.', 'src', 'assets', 'photos');
const sTargetPath = path.join('.', 'src', 'landing', 'models', 'photos.json');

const getPhotoNames = async () => {
  if (!fs.existsSync(sPhotoPath)) {
    await fs.mkdir(sPhotoPath, (err) => {
      if (err) throw err;
    });
  }
  fs.readdir(sPhotoPath, 'utf8', (err, aFiles) => {
    if (err) throw err;
    fs.writeFile(sTargetPath, JSON.stringify(aFiles), (err) => {
      if (err) throw err;
    });
  });
}

getPhotoNames();