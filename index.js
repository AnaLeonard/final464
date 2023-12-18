
// 7d0e011f-0858-4e2b-a6ed-0c49880aadcc
// ef7ca2fb-33f5-4aa3-9c26-87b970e2c18d

//import express
const express = require("express");
const cors = require("cors");

//allows to call anywhere 
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username:username, secret: username, first_name: username},
        {headers: {"private-key": "ef7ca2fb-33f5-4aa3-9c26-87b970e2c18d"}}
    )
    return res.status(r.status).json(r.data)
  }

  catch(e){
    return res.status(e.response.status).json(e.response.data)

  }
  return res.json({ username: username, secret: "sha256..." });
});


//calls it using port 3001
app.listen(3001);