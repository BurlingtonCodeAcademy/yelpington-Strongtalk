//imports for server
const express = require('express')
const app = express()

// global variables 
const port = process.env.PORT || 8000
const path = require('path');

//middleware 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

  
//api endpoint for serving JSONs
app.get('/api', (req, res) => {
  res.sendFile(path.resolve('./JSONs/available.json'));
});

 
// getting a single restaurant JSON file
 app.get('/api/:id', (req, res) => {
   res.sendFile(path.resolve(`./JSONs/${req.params.id}.json`))
 }) 

 app.get('/restaurant', (req, res) => {
   res.sendFile(path.resolve(`./public/singleRestPage.html`))
 })

 //Listening for server 
 app.listen(port, () => console.log(`Listening on port ${port}!`))


 // comments for next time, need to fix html still on story 4 and
 // just add in a fetch that generates anchor tag'd rest names and hopefully their markers 