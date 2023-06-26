const five = require("johnny-five");
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const board = new five.Board({
    port: "COM6",
}
);

let blink, stopblink;

app.get('/blink', (req, res) => {
    
      res.send("Hellow world!")
      blink()
})
app.get('/stopblink', (req, res) => {
    res.send("Bye!!")
    stopblink()

})

app.listen(3000, () => {
    console.log("Server has started and is listening on port 3000")
})


board.on("ready", () => {
    const led = new five.Led(12);
    console.log('Board ready')
    blink = () => {
        led.blink(200);
    }

    stopblink = () => {
        led.stop()
        led.off()
    }

  });
