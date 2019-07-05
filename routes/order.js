const router = require('express').Router();
const models = require('..app/models');
const Order = models.Order;

router.get('/orders/:id', (req,res) => {
  Order.findAll().then(orders => {res.send(orders)})
  .catch
})

