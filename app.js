const express = require('express'); //criou o express e importou
const app = express(); //quais rotas e em que porta ele vai ouvir
// const OrderItem = models.orderItem;

//parse body atualmente
app.use(express.json());
app.use('/users', require('./routes/user'))

//definir a rota
app.get("/", (req, resp) => {
  resp.send("legal");
  db.Sequelize = Sequelize;
});

//definir a porta
app.listen(3229, () => { console.log('começou o app') });

//aula do daniel 02/07 incluir na routers
// router.post('/orderItems', (req, res) =>
//   User.create(req.body, {include: [OrderItem]})
//     .then(user => {
//       res.status(201).send(user);
//     })
// )

// router.get('/orderItems', (req, res) =>
//   User.create(req.body, {include: [OrderItem]})
//     .then(user => {
//       res.status(201).send(user);
//     })
// )

// router.get('/orders/:id', (req, res) =>
//   User.create(User, {include: [OrderItem]})
//     .then(user => {
//       res.status(201).send(user);
//     })
// )