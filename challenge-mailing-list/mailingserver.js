const express=require('express')

const app=express()

const people=[
    {
      "name": "staff",
      "members": ["talea@techtonica.org", "michelle@techtonica.org"]
    },
    {
      "name": "students",
      "members": ["chris@techtonica.org", "hamid@techtonica.org"]
    }
  ]
app.use(express.json())
app.get('/list',(req,res)=>{
  res.send(people)
})
app.listen(9090,(req,res)=>{
  console.log('server is listening on port 9090')
})
app.get("/list/:name",(req,res)=>{
  const person=people.find(el=>el.name===req.params.name)
   if (person) {
     res.send(person)
   } else{
      res.status(404).send("Error")
   }
 })
 app.delete('/list/:name',function(req,res){
  let name=req.params.name
  let deleted=people.findIndex(item=>item.name===name)
 if (deleted) {
     res.send(people.splice(deleted,1))
   } else{
      res.status(404).send("Error")
   }
})