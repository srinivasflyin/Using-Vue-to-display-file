# function to convert file into vowel format using Vue
Steps to read the file

This function reads the file using node readStream from the third party api using the Request NPM module.

Request Module:
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default. the complete reference guide will get here.
https://www.npmjs.com/package/request

The readFile Api end-point is used read the file and format file into vowel format.

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

	var app = new Vue({
	 el: '#app',
	 data() {
	  return {
	   message: 'Welcome To File Read and write Operations with Node',
	   dispData: false
	  }
	 },
    created() {
      this.generateFile();
    },
	 methods: {
	  async generateFile() {
	   try {
	    var data = await axios.get('http://localhost:5000/readFile')
	    if (data) {
	     this.dispData = true;
	    }
	   } catch (e) {
	    console.log(e)
	   }
	  }
	 }
	})
The created hook of the Vue will be called on the page load then generatedFile function  will be triggered to get call the server call using the Axios module.

Axios: A Promise based HTTP client for the browser and node.js. For more Info https://www.npmjs.com/package/axios

To run the Application

## Project setup
```
npm install
```
### Run the Project
```
npm start
```
