const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const sTargetPath = path.join('.', 'dist');

const aSourceFolders = [
  {
    name: 'assets',
    path: path.join('.', 'src', 'assets'),
    // folder: 'assets'
  },
];

const copyFiles = async function (sSourcePath, sTargetPath) {
  if (!fs.existsSync(sTargetPath)) {
    await fs.mkdir(sTargetPath, (err) => {
      if (err) throw err;
    });
  }
  fs.readdir(sSourcePath, 'utf8', (err, aFiles) => {
    if (err) throw err;
    aFiles.forEach((sFilePath) => {
      let sSourceFilePath = path.join(sSourcePath, sFilePath);
      let sTargetFilePath = path.join(sTargetPath, sFilePath);
      if (fs.lstatSync(sSourceFilePath).isDirectory()) {
        copyFiles(sSourceFilePath, sTargetFilePath);
      } else {
        fs.createReadStream(sSourceFilePath).pipe(
          fs.createWriteStream(sTargetFilePath),
        );
      }
    });
  });
};

rimraf(sTargetPath, async function () {
  if (!fs.existsSync(sTargetPath)) {
    await fs.mkdir(sTargetPath, (err) => {
      if (err) throw err;
    });
  }
  aSourceFolders.forEach(async function (oItem) {
    let sPath = sTargetPath;
    if (oItem.folder) {
      sPath = path.join(sPath, oItem.folder);
      if (!fs.existsSync(sPath)) {
        await fs.mkdir(sPath, (err) => {
          if (err) throw err;
        });
      }
    }
    sPath = path.join(sPath, oItem.name);
    copyFiles(oItem.path, sPath);
  });
  console.log("Copied all dir's");
});
