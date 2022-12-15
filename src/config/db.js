const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = () => {
    return mongoose.connect("mongodb+srv://sombir:sombir@cluster0.yddglcp.mongodb.net/emi"
    ).then(() => console.log("Successfully Connected"))
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connect;