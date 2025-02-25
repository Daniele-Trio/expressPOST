
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname)); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{

    res.sendFile(__dirname + "/success.html");

})


app.post("/comment", (req,res)=>{
    console.log(req.body);
    res.status(200).sendFile(__dirname + "/" + "success.html");
    
} )

app.listen(port, ()=>{
    console.log(`Server in ascolto sulla porta ${port}`);
    
})