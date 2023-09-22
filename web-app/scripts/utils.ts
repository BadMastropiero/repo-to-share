import * as fs from 'fs';

export default function deleteFolderRecursive(folderpath: string) {
  if (fs.existsSync(folderpath) && fs.lstatSync(folderpath).isDirectory()) {
    fs.readdirSync(folderpath).forEach(file => {
      const curPath = `${folderpath}/${file}`;

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });

    console.log(`Deleting directory "${folderpath}"...`);
    fs.rmdirSync(folderpath);
  }
}
