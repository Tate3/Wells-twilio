const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'https://www.dropbox.com/s/hf6nac0t4dh2i0g/TWTN%20Sept%2026.mp3?dl=0',
         to: '+9196083679',
         from: '+17372657850'
       })
      .then(call => console.log(call.sid));