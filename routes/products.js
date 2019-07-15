const router = require('express').Router();
const models = require('../app/models');
const Product = models.Product;

router.get('/', (req, res) => {
  Product.findAll()
    .then(item => {
      res.send(item)
    })
})

router.post('/', (req, res) => {
  Product.create(req.body)
    .then(product => res.status(201).send(product))
    .catch(error => console.log('mensagem de erro', error))
})

router.put('/:id', (req, res) => Product.update({ ...req.body }, { where: { id: req.params.id } })
  .then(() => {
    Product
      .findOne({ where: { id: req.params.id } })
      .then(product => res.send(product.dataValues))
  })
)

router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((product) => res.send(product));
})

module.exports = router;