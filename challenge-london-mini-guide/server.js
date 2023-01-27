const express=require('express')
const app=express()
 
const Harrow=require('./data/Harrow.json')
const Heathrow=require('./data/Heathrow.json')
const Stratford=require('./data/Stratford.json')

app.get('/allpharmacies',(req,res)=>{
    res.json(Harrow.pharmacies.concat(Heathrow.pharmacies,Stratford.pharmacies)  )
})

app.listen(4500,(req,res)=>{
    console.log('app is listening');
})