# function to convert file into vowel format
Steps to read the file

This function reads the file using node readStream from the third party api using the Request NPM module.

Request Module:
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default. the complete reference guide will get here.
https://www.npmjs.com/package/request

Routes:

router.get('/readFile', (req, res) => {
   var savPath = "message.txt"
   var srcPath = "https://www.gutenberg.org/files/58472/58472-0.txt"
   ReadFile(function() {
      res.set({
        "Content-Disposition": "attachment; filename=\"message.txt\""
      });
      res.send(path.join(__dirname, '../../public/message.txt'));
   })
 })
The readFile Api end point is designed for converting the passed ("https://www.gutenberg.org/files/58472/58472-0.txt") 
file into the vowel formatted file.
It continuesly send the file chunks of data to the client by setting the Response header of "content-disposition" and res.send method.


index.html:
whenver Node server called with router "/" it loads the index.html page.
The Vue renders the page, now Vue is enabled to do the reactivity system.
The Vue 
