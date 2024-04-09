const express = require('express');
const db = require('../model/db');
const router = express.Router();

const cheerio = require("cheerio"); //html 코드를 jquery처럼 사용하게 하는 도구
const axios = require("axios"); //api
const iconv = require("iconv-lite");    //한글 깨짐 방지
const url = "https://finance.naver.com/sise/lastsearch2.nhn";


router.get("/excel/down", function(req,res){
    let excel_data = [{"A":1,"B":2,"C":3,"D":4}]
    res.xls('data.xlsx', excel_data);
})

router.get("/excel", function(req,res){
    res.render("excel");
})


router.get("/crawling", function(req,res){

    //arraybuffer 한글 깨짐 방지
    axios({url:url, method:"GET", responseType:"arraybuffer"}).then(function(html){
        const content = iconv.decode(html.data,"EUC-KR").toString();    //한글
        const $ = cheerio.load(content);    //jsquery data

       //const h3 = $('.sub_tlt');
       //console.log(h3.text());

        /*
        const table = $(".type_5 tr td");
        table.each(function(i,tag){
            console.log($(tag).text().trim());
        });
        */

        const table = $(".type_5 tr");
        let result = new Array();

        table.each(function(i,tag){
            if ($(this).find("td.no").text().trim() != "") {
                let obj = new Object();
                obj.index = $(this).find("td.no").text().trim();
                obj.titile = $(this).find("td > a.tltle").text().trim();
                let datas = $(this).find("td > span.tah.p11").text().trim();
                let data = datas.split('\n\t\t\t\t\n\t\t\t\t');
                obj.prePrice = data[0];
                obj.percent = data[1];
                result.push(obj);
            }
        });

        res.send({success:200, data:result});
    });
});

router.get("/", function(req, res){
/*
    let query = req.query;  //Dictionary
    console.log(query);
    
    let page = query.page;
    console.log(page);
    
    res.send({"Key": "Value"});
*/
    res.render('main', {title:"영화 리뷰 사이트"});

});

router.post("/review/create", function(req, res){
    let movie_id = req.body.movie_id;
    let review = req.body.review;

    if(movie_id == '' || movie_id == 0) {
        res.send({success:400})
    } else {

        db.reviews.create({
            movie_id:movie_id,
            review:review
        }).then(function(result){
            res.send({success:200})
        });
    }

});

router.post("/review/view", function(req, res){
    let movie_id = req.body.movie_id;

    db.reviews.findAll({where: {movie_id:movie_id}}).then(function(result){
        
        res.send({success:200, data:result});
    })
});

router.get("/review/read", function(req, res){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where: {movie_id:movie_id}}).then(function(result){
        //console.log(result);
        res.send({success:200, data:result});
    })
});

router.get("/about", function(req, res){
    res.send('About page');
});

router.post("/postapi", function(req, res){
    let body = req.body;
    console.log(body);

    res.send('Post API');
});

router.get("/data/create", function(req, res){
    let user_id = parseInt(Math.random() * 10000);

    //함수형 프로그래밍
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200})
    });
});

router.get("/data/read", function(req, res){
    
    db.users.findAll().then(function(result){
        res.send({success:200, data:result})
    });
});


router.post("/data/update", function(req, res){
    let target_id = req.body.target_id;
    db.users.update({user_id:1111}, {where: {user_id:target_id}}).then(function(result){
        res.send({success:200});
    });
});

router.post("/data/delete", function(req, res){
    let target_id = req.body.target_id;
    console.log(target_id);
    db.users.destroy({where: {user_id:target_id}}).then(function(result){
        res.send({success:200});
    });
});


module.exports = router
