import document from "document";
import { outbox } from "file-transfer";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendfile(){
outbox
   .enqueueFile("/mnt/assets/resources/styles.css")
   .then((ft) => {
     console.log(`Transfer of ${ft.name} successfully queued.`);
     checkqueue();
   })
   .catch((error) => {
     console.log(`Failed to schedule transfer: ${error}`);
   });
  }

  document.onkeypress = function (evt) {
    console.log("Key pressed: " + evt.key);
    if (evt.key == "up"){
       sendfile();
    }
    if (evt.key == "down"){
      checkqueue();
      }
  };

async function checkqueue(){
  //var queued=true;
  console.log("Checking queue"); 

  //while (queued){
    outbox
      .enumerate()
      .then((ft)=>{
         console.log("Number of enqueued files:"+ft.length);
         if (ft.length==0){
            console.log("No Files queued"); 
            queued=false;
         }
         for (var x=0;x<ft.length;x++){
              console.log("File enqueued:"+ft[x].name);
         }
         })
      .catch((ex)=>{
         throw Error(ex.message);
      })
  //}
}

