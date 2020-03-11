const express = require('express');
const app = express()
const port = 8000;

const redirect_uri = "http://localhost:8000/callback";
const my_client_id = "c65b05fe64a64e6e9dc3cfca520c0ebb";

app.get('/',(req, res)=>{
    res.send("hello world")
})

app.get('/callback',(req, res)=>{

    res.send("login deu certo!  "+ req.query.code)


    /* 
        now you can make 
        Make a POST request to https://accounts.spotify.com/api/token 
        
        REQUEST BODY PARAMETERS

        grant_type: authorization_code
        code: req.query.code
        redirect_uri: localhost:8000

        HEADER PARAMETER
        Authorization: Authorization: Basic *<base64 encoded client_id:client_secret>
    */
})

app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

//app.post('/autorization',()=>{

//});

app.listen(port, "localhost", ()=>{
    console.log('example app on ${port} ')
})