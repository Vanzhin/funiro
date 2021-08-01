"use strict"
const fs = require('fs');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');


app.use(cors());

app.listen(3000, () => {
  console.log('server is running on port 3000!');
});
// Укажем директорию в которой будут лежать наши файлы
app.use(express.static('./dist'))
app.use(express.json());
// app.use('./sideJs',express.static(path.join(__dirname, 'www/sideJs')));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/dist/index.html')
// });
app.get('/api/productdata', (req, res) => {
  fs.readFile('dist/product-data.json', 'utf8', (err, data) => {
    if (err) {
			console.log("read product-data.json error", err);
			res.send("read product-data.json error");
			return;
		}
		const goods = JSON.parse(data)
		return res.send(data);
  });
});

