const express = require ("express")

const app = express()

app.get("/", (req, res) =>{
    res.send("I am a endpoint");
})

app.listen(7777, () => {
    console.log("Listein on port 7777");
});

app.get('/cropsmore', (req, res) => {
    res.json({ crops: ['Melon', 'Apple', 'Banana'] });
});
