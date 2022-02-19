const jsonServer = require('json-server');
const bodyParser = require('body-parser')
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const port = process.env.PORT || 4000; // needed when you deploy into heroku.

server.use(bodyParser.json());
server.use(jsonServer.bodyParser);
server.use(bodyParser.urlencoded({ extended: true }));

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
// router.render = (req, res) => {
//   debugger;
//   res.json({
//     body: res.locals.data
//   });
// }

server.listen(port, () => {
  console.log('JSON Server is running')
});
