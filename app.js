const express = require('express'); //criou o express e importou
const app = express(); //quais rotas e em que porta ele vai ouvir
// const OrderItem = models.orderItem;

//parse body atualmente
app.use(express.json());

//definir rotas
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

//definir a porta
app.listen(3229, () => { console.log('começou o app') });