const mongoose = require("mongoose");
const service=require('../model/service')


const PORT =process.env.PORT|| 8080;



 mongoose_connection = async(app)=>{
  mongoose
  .connect(process.env.DB_URL +"/hmanagement")
  .then(() => {
    
    console.log("db connected success");

    app.get("/", (req, res) => res.send("API is running"));
     
    app.listen(PORT,() => {
      console.log(`listening at port ${PORT}`);

    
    });
  })
  .catch((error) => {
    console.log(error);
  });
 
 }
  module.exports = mongoose_connection;

