const express = require("express");
const User = require("../modal/user");
const router = express.Router();

router.get("/getProfile/:id", async (req, res) => {
    const id = req.params.id;
    try {
        let profile = await User.findById(id);
        res.send({status:true,profile:profile})
    } catch (error) {
        res.send("error.message")
    }
})

module.exports = router;