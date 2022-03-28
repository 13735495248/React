const express = require('express');
const app = express();
app.all('*',function(req,res,next) {
    res.header('access-control-allow-origin','*');
    next();
})
app.use('/public/', express.static('./public/'));
app.engine('html', require('express-art-template'));

app.get('/', function (req, res) {
    res.render('doc.html');
});

/* 随机文本接口 */
app.get('/text',function(req,res) {
    let random =Math.floor(Math.random()*10);
    console.log(random);

    res.send(data.poetrys[random]);
});

/* 列表接口 */
const data = require("./data.js");
app.get('/list',function(req,res) {
    res.send(data.list);
});

/* 搜索接口 */
app.get('/search',function(req,res) {
    let list = data.searchlist.filter((item)=>{
        return item.name.includes(req.query.keywords);
    })
    res.send(list);
});

/* 柱形图接口 */
app.get('/bar',function(req,res) {
    let obj = {
      title:'手机销量',
      xdata:['华为','魅族','oppo','小米','锤子'],
      ydata:[34,23,22,12,8]
    }
    res.send(obj);
});
/* 饼图接口 */
app.get('/pie',function(req,res){
    let ary = [
        {
          value: 335,
          name: '华为'
        },
        {
          value: 234,
          name: '苹果'
        },
        {
          value: 128,
          name: '魅族'
        },
        {
            value: 120,
            name: '中兴'
          }
      ];
      res.send(ary);

})

/* 折线图接口 */
app.get('/line',function(req,res){
      let obj = {
          xdata:['华为','苹果','魅族','oppo','小米'],
          ydata:[34,24,17,13,5]
      }
      res.send(obj);

})

app.listen(3000, function (req, res) {
    console.log('服务器运行中...');
});