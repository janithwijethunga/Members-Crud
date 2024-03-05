const express = require('express');
const router = express.Router();
const Member = require("../models/membersModel");

router.post("/dashboard", async (req, res) => {
    const newdriver = new Member({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
    });
  
    try {
      const member = await newdriver.save();
      res.send("Member registered Successfully");
    } catch (error) {
      return res.status(400).json({ error });
    }
});

router.get("/getallmembers", async(req, res) => {
    try {
      const allMembers = await Member.find();
      return res.send(allMembers);
    } catch (error) {
      return res.status(400).json({ error });
    }
});

module.exports = router;
