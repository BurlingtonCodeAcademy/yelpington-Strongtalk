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


  //Listening for server 
  app.listen(port, () => console.log(`Listening on port ${port}!`))