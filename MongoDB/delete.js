const dbConnect = require("./config");

const deleteData = async() => {
  const db = await dbConnect();
  const result = await db.deleteMany(
    {Adminname:'Anant Sinde'}
  )
 if(result.acknowledged){
    console.log("Yo !, Data delete Successfully :)")
 }else{
    console.log("Failed to delete a Data :( ")
 }
};

deleteData();
