const express = require('express');
const app = express();
const models = require('./app/models');

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

models.Product.sync()
.then(() => console.log('Product Sync!'));

models.Order.sync()
.then(() => console.log('Order Sync!'));

models.User.sync()
.then(() => console.log('User Sync!'));

app.listen(3229, () => { console.log('começou o app') });