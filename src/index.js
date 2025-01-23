const http = require('http')
const fs = require('fs')
const port = 8080;

// Creating server 
const server = http.createServer((req, res) => {
    // Sending the response
    if (req.url === '/style.css') {
        fs.readFile('../style.css', (err, content) => {
            if (err) throw err
            res.writeHead(200, {'content-type' : 'text/css'})
            res.end(content);
        })
    }
    if (req.url === '/') {
        fs.readFile('./index.html', (err, content) => {
            if (err) throw err
            res.writeHead(200, {'content-type' : 'text/html'})
            res.end(content);
        })
    }

    if (req.url === '/about') {
        fs.readFile('./about.html', (err, content) => {
            if (err)  throw err
            res.writeHead(200, {'content-type' : 'text/html'})
            res.end(content);
        })
    }

    if (req.url === '/contact-me') {
        fs.readFile('./contact-me.html', (err, content) => {
            if (err) throw err
            res.writeHead(200, {'content-type' : 'text/html'})
            res.end(content);
        })
    } if (req.url !== '/' && req.url !== '/about' && req.url !== '/contact-me' && req.url !== '/style.css') {
        fs.readFile('./404.html', (err, content) => {
            if (err) throw err
            res.writeHead(200, {'content-type' : 'text/html'})
            res.end(content);
        })
    }
})

server.listen((port), () => {
    console.log(`Server is Running, on port ${port}...`);
})