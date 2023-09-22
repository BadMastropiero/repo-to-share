"use strict";
exports.__esModule = true;
var fs = require("fs");
function deleteFolderRecursive(folderpath) {
    if (fs.existsSync(folderpath) && fs.lstatSync(folderpath).isDirectory()) {
        fs.readdirSync(folderpath).forEach(function (file) {
            var curPath = "".concat(folderpath, "/").concat(file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            }
            else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        console.log("Deleting directory \"".concat(folderpath, "\"..."));
        fs.rmdirSync(folderpath);
    }
}
exports["default"] = deleteFolderRecursive;
