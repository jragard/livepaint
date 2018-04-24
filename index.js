const express = require("express");
const port = 3000;
const app = express();

const updates = [];
const newUpdates = updates.length;


app.use(express.static('public'));
app.use(express.json());


app.post('/updates', (req, res) => {
    
    const array = updates.concat(req.body.clientUpdates);
    
    // res.send(updates);
    // console.log(updates);
    
    res.send({
        updates: array,
        newUpdates: newUpdates
    });
    
    console.log({
        updates: array
    });
    
    
});


// Fill in your request handlers here

app.listen(port);