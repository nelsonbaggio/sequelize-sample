const router = require('express').Router();
const models = require('../app/models');
const User = models.User;

//findAll, findOne
router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.send(users)
    })
})

// router.post('/id:', (req, res) =>
router.post('/', (req, res) =>
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
)

router.put('/id', (req, res) => User.update({ ...req.body }, { where: { id: req.params.id } })
  .then(() => {
    User
      .findByPK(req.params.id)
      .then(user => res.send(user.dataValues))
      .then(userId.send(userId,dataValues));
  })
)

router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } }
  )
    .then((user) => res.send(user));
})

//aula de hoje
router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
})

module.exports = router;