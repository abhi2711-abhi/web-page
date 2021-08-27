const express = require('express')
const path = require("path")

const app = express()

require("./db/conn")

const Property = require("./models/property")

const { error } = require('console')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/addproperty', (req, res) => {
    res.render("addproperty")
})

app.get('/deleteproperty', (req, res) => {
    res.render("deleteproperty")
})

app.get('/allproperty', async(req, res) => {
    try{
        const al = await Property.find({},{__v:0})
        res.send(al)
    }catch(err){
        res.send('error ' + err)
    }
})

app.post("/addproperty", async(req,res) =>{
    try {
        const add = new Property ({
            name: req.body.name,
            description:req.body.description,
            size: req.body.size
        }) 

        console.log(add)
        const roled = await add.save()
        res.status(201).send("property added")

    } catch (error) {
        res.send('error ' + err)
    }
})

app.post("/deleteproperty", async(req,res) =>{
    try {
        const al = await Property.findById(req.body.id)
        const a1 = await al.delete()
        console.log("deleteproperty")
        res.send("delete")
    } catch (error) {
        res.send('error ' + err)
    }
})
   
app.listen(3000, () => {
    console.log('servier working')
})