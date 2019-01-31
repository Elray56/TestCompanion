import document from "document";
import { outbox } from "file-transfer";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


outbox
   .enqueueFile("/mnt/assets/resources/styles.css")
   .then((ft) => {
     console.log(`Transfer of ${ft.name} successfully queued.`);
     checkqueue();
   })
   .catch((error) => {
     console.log(`Failed to schedule transfer: ${error}`);
   });

document.onkeypress = function (evt) {
    console.log("Key pressed: " + evt.key);
    checkqueue();
};

async function checkqueue(){
  //var queued=true;
  console.log("Checking queued"); 

  //while (queued){
    outbox
      .enumerate()
      .then((ft)=>{
         console.log("ft:"+ft.length);
         if (ft.length==0){
            console.log("No Files queued"); 
            queued=false;
         }
         console.log(ft.length+" Files queued"); 
         for (var x=0;x<ft.length;x++){
              console.log("Still enqueued:"+ft[x].name);
         }
         })
      .catch((ex)=>{
         throw Error(ex.message);
      })
  //}
}

