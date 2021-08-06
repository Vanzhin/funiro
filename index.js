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
app.get('/api/productdata', (req, res) => {// обрабатывает запрос на получение данных о товарах из product-data.json
  fs.readFile('dist/product-data.json', 'utf8', (err, data) => {
    if (err) {
			console.log("read product-data.json error", err);
			res.send("read product-data.json error");
			return;
        }
		return res.send(data); //возвращает ответ в виде json
  });
});
app.get('/api/cart', (req, res) => {
	fs.readFile('dist/cart.json', 'utf8', (err, data) => {// читает файл cart.json
	  if (err) {
			  console.log("read cart.json error", err);
			  res.send("read cart.json error");
			  return;
		  }
		  return res.send(data);
	});
  });
  app.post('/api/cart', (request, response) => {//обрабатывает запрос на изменение
    console.log('/cart POST route handler', request.ip);
    fs.readFile('dist/cart.json', 'utf-8', (err, data) => {//читает файл cart.json
        if (err) {
            console.log('Read cart.json error!', err);
            response.send('cart.json error!');
            return;
        }

        const cart = JSON.parse(data);// преобразовывает cart.json в формат массива с объектами
        const item = request.body;// приравнивает item к объекту который послали из addItem,body: JSON.stringify(item)

        const itemIndex = cart.findIndex((goodsItem) => goodsItem.id === item.id);// возвращает -1 если такого объекта нет и индекс объекта в массиве, если такой объект там есть
        if (itemIndex > -1) { 
            cart[itemIndex].quantity += 1;// увеличиваем количество на 1
        } else {
            cart.push({ ...item, quantity: 1 });// добавляем объект в корзину с количеством 1, если его еще нет
        }


        fs.writeFile('dist/cart.json', JSON.stringify(cart), (err) => {//записываем измененную корзину cart в файл cart.json
            if (err) {
                console.log('Write cart.json error!', err);
                response.json({
                    status: 0,
                    message: 'Write cart.json error!',
                    error: err,
                });
                return;
            }
            response.json({ status: 1 });// посылаем ответ, что все ок
        })
    });
});
app.delete('/api/cart/:id', (req, res) => {//обрабатывает запрос id
  fs.readFile('dist/cart.json', 'utf-8', (err, data) => {//читает файл cart.json
      if (err) {
          console.log('Read cart.json error!', err);
          res.send('Read cart.json error!');
          return;
      }

      let basket = JSON.parse(data);//присваивает basket данные (cart.json), которые переводит в формат массива с объектами

      const id = parseInt(req.params.id);//присваивает константе id id-шник объекта на удаление

      basket = basket.filter((item) => parseInt(item.id) !== id);//фильрует корзину по id


      fs.writeFile('dist/cart.json', JSON.stringify(basket), (err) => {// записывает cart.json с изменениями
          if (err) {
              console.log('Write cart.json error!', err);
              res.json({
                  status: 0,
                  message: 'Write cart.json error!',
                  error: err,
              });
              return;
          }
          res.json({ status: 1 });//отвечает что все ок статусом 1
      })
  });
});

