const express = require('express');

const app = express();

const model = require('../models');

app.get('/create', async (req, res) => {
    let {firstName, lastName} = req.query;
    console.log(firstName);
     user = await model.User.create({
        firstName: firstName,
        lastName: lastName
    });
    // console.log(user);
    res.json({
        user
    });
});

app.get('/findAll', async (req, res) => {
    let list = await model.User.findAll();
    res.json({list});
})
app.get('/findById/:id', async (req, res) => {
    let {id} = req.params
    let one = await model.User.findOne({
        where: {
            id
        }
    });
    res.json({one});
})
app.listen(3000, () => {
    console.log('服务器在3000端口启动！！！')
})