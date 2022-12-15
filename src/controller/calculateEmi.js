const express = require("express");

const router = express.Router();

router.post("/calculateEMI", async (req, res)=> {
    const { loan, rate, time } = req.body;
    let Rate=rate/(12*100)
    const EMI = Math.ceil(loan*Rate*(1 + Rate)**(time)/((1 + Rate)**time - 1));
    const total = EMI * time;
    const interest = total - loan;
console.log(EMI,total,interest)
   return res.send({EMI:EMI,total:total,interest:interest})
})
module.exports = router;