const dbConnect = require("./config");

const insert = async() => {
  const db = await dbConnect();
  const result = await db.insert(
    [{Adminname:'Gargi Jon',Brand:'Apple',Category:'Bluetooth',Price:15000},
    {Adminname:'Jon jYorj',Brand:'Mi',Category:'Bluetooth',Price:70000}]
  )
 if(result.acknowledged){
    console.log("Yo !, Data Insertion Successfully :)")
 }else{
    console.log("Failed to Insert a Data :( ")
 }
};

insert();
