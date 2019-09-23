var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //메인 main.ejs 뷰파일을 호출하고 데이터를 전달한다.
  res.render('main', { title: 'EJS 메인 페이지입니다.' });  // 'main'은 views폴더 아래 main.ejs를 지칭. 
});

module.exports = router;
