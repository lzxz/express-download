const express = require('express')
const partials = require('express-partials')
const app = express()

app.engine('.html', require('ejs').__express)
app.set('views', __dirname + '/views')
app.set('view engine', 'html')

app.use(partials())
app.use('/public', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('index', {
        title: '首页'
    })
})

app.listen(3000, function (err) {
    if (err) return console.log(err)
    console.log('服务器创建成功')
})