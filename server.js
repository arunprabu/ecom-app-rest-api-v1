const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000; // needed when you deploy into heroku.

server.use(middlewares)
server.use(router);
router.render = (req, res) => {
  res.jsonp({
    body: res.locals.data
  })
}

server.listen(port, () => {
  console.log('JSON Server is running')
});
