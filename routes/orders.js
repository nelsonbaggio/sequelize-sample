const router = require('express').Router();
const models = require('../app/models');
const Order = models.Order;

router.get('/', (req, res) => {
  Order.findAll({
    include: [{
      model: models.Product,
      as: 'products',
      through: { attibutes: [] }
    }]
  })
    .then(orders => res.send(orders))
    .catch(error => console.log('Erro ao buscar pedidos: ', error));
})

router.post('/', (req, res) => {
  const { products, user, ...data } = req.body;
  const order = Order.build(data);
  order.setUser(user, { save: false });
  if (products && products.length > 0) {
    order.setProducts(products, { save: false });
  }
  order.save()
    .then(order => {
      res.status(201).send(order);
    })
    .catch(error => console.log('mensagem de erro', error))
})

router.put('/:id', (req, res) => {
  const { products, user, status } = req.body;
  Order
    .findOne({ where: { id: req.params.id } })
    .then(order => {
      if (products && products.length > 0) {
        order.setProducts(products, { save: false });
      }
      order.setUser(user, { save: false });
      order.status = status;
      order.save()
        .then(order => res.send(order.dataValues));
    });
})

router.get("/:id", (req, res) => {
  Order.findOne({ where: { id: req.params.id } })
    .then(order => res.send(order));
})

router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

module.exports = router;