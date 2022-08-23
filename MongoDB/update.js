const dbConnect = require("./config");

const update = async() => {
  const db = await dbConnect();
  const result = await db.updateOne(
   {Brand:'Apple'},{$set:{Adminname:'Anant Sinde',Category:'Speaker',Price:5000}}
  )
 if(result.acknowledged){
    console.log("Yo !, Data update Successfully :)")
 }else{
    console.log("Failed to update a Data :( ")
 }
};

update();
