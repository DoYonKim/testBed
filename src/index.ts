import * as express from 'express'
const app = express();

//핸들바 엔진 설정
var handlebars = require('express-handlebars').create({
  defaultLayout:'main',
  helpers:{
      section: function(name, options){
          if(!this._sections) this._sections = {};
          this._sections[name] = options.fn(this);
          return null;
      }
  }});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
  
app.set('port',process.env.PORT || 3000);

//Static 미들웨어-정적 자원을 전송하는 역할
app.use(express.static('../' +__dirname + '/public'));

app.get('/',function(req,res){
  res.render('home');
});

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:' +
              app.get('port')+'; press Ctrl-C to terminate.');
});