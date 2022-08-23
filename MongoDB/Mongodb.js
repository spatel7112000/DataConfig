const dbConnect = require("./config")

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data)
    })
})

// or  //

// const main = async()=>{
//   let data = await dbConnect();
//   data = await data.find().toArray(); 
//   console.log(data)
// }

// main();
// promise IMP 