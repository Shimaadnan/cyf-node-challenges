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


app.get("/list/:name",(req,res)=>{
  const person=people.find(el=>el.name===req.params.name)
   if (person) {
     res.send(person)
   } else{
      res.status(404).send("Error")
   }
 })
 app.delete('/list/:name',function(req,res){
  let name=(req.params.name)
  // let index=people.findIndex(item=>item.name===name)
  // let deleted=people.splice(index,1)
  let filtered=people.filter(item=>item.name!==name)
 if (filtered) {
     res.send(filtered)
   } else{
      res.status(404).send("Error")
   }
})
app.listen(2500,(req,res)=>{
  console.log('the server is running')
})
