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
app.get('/api/cart', (req, res) => {
	fs.readFile('dist/cart.json', 'utf8', (err, data) => {
	  if (err) {
			  console.log("read cart.json error", err);
			  res.send("read cart.json error");
			  return;
		  }
		  const cart = JSON.parse(data)
		  return res.send(data);
	});
  });
  app.post('/api/cart', (request, response) => {
    console.log('/cart POST route handler', request.ip);
    fs.readFile('dist/cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Read cart.json error!', err);
            response.send('cart.json error!');
            return;
        }

        const cart = JSON.parse(data);
        const item = request.body;
        console.log(request.body)

        const itemIndex = cart.findIndex((goodsItem) => goodsItem.id === item.id);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }


        fs.writeFile('dist/cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                console.log('Write cart.json error!', err);
                response.json({
                    status: 0,
                    message: 'Write cart.json error!',
                    error: err,
                });
                return;
            }
            response.json({ status: 1 });
        })
    });
});

