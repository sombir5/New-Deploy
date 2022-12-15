const express = require("express");
const cors = require("cors");
const connectDb = require("./src/config/db")
const register=require("./src/controller/user.router")
const login = require("./src/controller/user.router")
const profile = require("./src/controller/getProfile")
const calculateEMI=require("./src/controller/calculateEmi")
let PORT = 8080;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/",register)
app.use("/",login)
app.use("/",profile)
app.use("/",calculateEMI)

app.listen(PORT, async () => {
    await connectDb();
    console.log(`Listening on http://localhost:${PORT}`);
});