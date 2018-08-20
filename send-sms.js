// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC5a4bbb2789e5fd2de2e96a8e8753c7e9';
const authToken = '0753d7bc85f18c6c15c3b7a3c98c908e';
const client = require('twilio')(accountSid, authToken);

var userPhoneNumber = '6477789127';//assign the number the user inputs to this
var inboundNumber = '+1' + userPhoneNumber;
var outboundNumber = '+16474930403';

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: outboundNumber,
     to: inboundNumber
   })
  .then(message => console.log(message.sid))
  .done();
