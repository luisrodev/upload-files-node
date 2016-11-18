Upload & Download Files using NodeJS
==================================================

Is just a practice example of a "system" for upload files and download these files using NodeJS, Express, Jade and Bootstrap.

Used Tools
--------------------------------------
- [NodeJS](https://nodejs.org)
- [Express](http://expressjs.com/)
- [Jade (recently called Pug)](https://www.npmjs.com/package/jade)
- [Bootstrap](https://www.getbootstrap.com)
- [CDN Font Awesome](http://fontawesome.io/)
- [bodyParser](https://www.npmjs.com/package/body-parser)
- [Multer](https://www.npmjs.com/package/multer)

Is not a secure "system" or 100% functional, is just a practice example for beginners on NodeJS like me.


What is included
--------------------------------------
```
upload-files-node/
├──assets/
│   ├──css/
│   │   └── main.css
│   ├──imgs/
│   ├──js/
│   │   └── main.js
│   ├──libs/
│   │   ├── bootstrap/
│   │   │   ├── css/
│   │   │   │   ├── bootstrap-theme.css
│   │   │   │   ├── bootstrap-theme.css.map
│   │   │   │   ├── bootstrap-theme.min.css
│   │   │   │   ├── bootstrap-theme.min.css.map
│   │   │   │   ├── bootstrap.css
│   │   │   │   ├── bootstrap.css.map
│   │   │   │   ├── bootstrap.min.css
│   │   │   │   └── bootstrap.min.css.map
│   │   │   ├── fonts/
│   │   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   │   ├── glyphicons-halflings-regular.woff
│   │   │   │   └── glyphicons-halflings-regular.woff2
│   │   │   ├── js/
│   │   │   │   ├── bootstrap.js
│   │   │   │   ├── bootstrap.min.js
│   │   │   │   └── npm.js
│   │   ├── jquery/
│   │   │   └── jquery-3.1.0.min.js
├── data/
│   └── data.json
├── uploads/
├── views/
│   ├── index.jade
│   ├── listFiles.jade
│   └── newFile.jade
├── app.js
├── data-manager.js
├── package.json
└── README.md
```

How to use?
--------------------------------------
First open your console and install the dependencies:
```bash
npm install
```

Now, find the file 'app.js' on console and execute this command:
```bash
node app.js
```  

The Node server run on port 8080, you can change the port if you want, just change this line of code in 'app.js' file:
```bash
app.listen(8080);
```
The most probably this line of code stay on the end of the file.  

Now you can open your favorite browser and type this url:
```bash
localhost:8080
```

Files will save on uploads folder
```
upload-files-node/
└──  uploads/ HERE
```
