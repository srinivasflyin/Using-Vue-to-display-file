let express = require('express');
let router = express.Router();
let path = require('path');
let fs=require('fs');
var request = require('request');
router.get('/', (req, res) => {
    res.render('../index.html')
});
router.get('/readFile', (req,res) => {
    var savPath = "message.txt"
    var srcPath = "https://www.gutenberg.org/files/58472/58472-0.txt"
    ReadFile(function(){
        res.set({"Content-Disposition":"attachment; filename=\"message.txt\""});
         res.send(path.join(__dirname,'../../public/message.txt'));
    })
})
module.exports = router;


function ReadFile(callback) {
request({
    method: 'GET',
    preambleCRLF: true,
    postambleCRLF: true,
    uri: "https://www.gutenberg.org/files/58472/58472-0.txt"
  },function(err,response,body){
    console.log(typeof body)
    var data = converTo(body)
     fs.writeFile (path.join(__dirname,'../../public/message.txt'), data, function(err) {
                if (err) throw err;
                console.log('complete');
                callback()
            });
  });
}


function converTo(s) { 
    // the index of the first vowel is stored. 
    var len = s.length; 
    var index = -1; 
    for (var i = 0; i < len; i++) { 
        if (isV(s[i])) { 
            index = i; 
            break; 
        } 
    }
    if (index == -1) 
        return "-1"; 
    return s.substr(index) + s.substr(0, index) + "ay"; 
}


function  isV(c) { 
           return (c == 'A' || c == 'E' || c == 'I' ||  
            c == 'O' || c == 'U' || c == 'a' ||  
            c == 'e' || c == 'i' || c == 'o' || 
            c == 'u'); 
       }