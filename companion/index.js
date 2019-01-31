import { inbox } from "file-transfer";

async function processAllFiles() {
  var file;
  if (file = await inbox.pop()){
    var text = await file.text();
    console.log(`Received ${file.name}, length:${file.length}`);
  }
}
inbox.addEventListener("newfile", processAllFiles);
processAllFiles();
