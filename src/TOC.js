

function aa() {
    var request = require('request')
    var url = 'http://fow.kr/';
    
    
    var a = new Promise(function (resolve, reject) {
        request(url, function (err, res, html) {
           a = html;

            return Promise;
        }
        
    })
}
export default aa;



    var p = new Promise(function(resolve, reject){
        request(`http://media.daum.net/breakingnews/politics?page=${pageNum}®Date=20170716`, function(err, res, body){      
            var $ = cheerio.load(body);
            resolve($('.cont_thumb .tit_thumb .link_txt').text());
        });
    }); /* end create Promise obj */

    promises.push(p);   


return promises;
}

Promise.all(crawler()).then(function(data){
mecab.nouns(data.toString(), function(err, result){
    console.log(result);
});