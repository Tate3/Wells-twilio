const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const express = require('express')
const app = express()

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.play('https://www.dropbox.com/s/hf6nac0t4dh2i0g/TWTN%20Sept%2026.mp3?raw=1');

    if (req.url === '/test') {
        res.write('<h1>testing 123...</h1>')
        res.end()
    }
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');



// app.get('/', (req, res) => {
//     console.log('here')
//     // Create TwiML response
//     const twiml = new VoiceResponse();

//     twiml.play('https://www.dropbox.com/s/hf6nac0t4dh2i0g/TWTN%20Sept%2026.mp3?raw=1');

//     //res.json({message: 'works...', status: 200})
// })

// app.get('/test', (req, res) => {
//     console.log('test')
//     res.json({message: 'testing 123...', status: 200})
// })

// const PORT = 1337
// app.listen(PORT, () => console.log(`App running on ${PORT}...`))

console.log('TwiML server running at http://127.0.0.1:1337/');