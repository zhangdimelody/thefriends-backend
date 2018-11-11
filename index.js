const Koa = require('koa')
const fs = require('fs.promised')
const route = require('koa-route') //提供路由
const path = require('path')
const serve = require('koa-static') //提供静态资源

const app = new Koa()
// 路由
// const main = ctx=>{
// 	ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./template/main.html');
// }
// const login = ctx=>{
// 	ctx.response.type = 'html';
//   ctx.response.body = fs.createReadStream('./template/login.html');
// }
// app.use(route.get('/', main));
// app.use(route.get('/login', login));
// 路由 over

// const main =serve(path.join(__dirname))
// app.use(main)

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./template/main.html', 'utf8');
};

app.use(main);
app.listen(3100)

