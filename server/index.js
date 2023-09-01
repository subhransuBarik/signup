require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/connection");
const userRouter = require("./routes/userRoute");

connection();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/user",userRouter);


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)})