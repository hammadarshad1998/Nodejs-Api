var express    = require('express');        // import express
var app        = express();                 // define our app using express or created instance of app
var bodyParser = require('body-parser'); // handle request and response data 
var jsondata= require('./movies.json'); //represent json data of movies
var _und = require('underscore');
app.use(bodyParser.urlencoded({ extended: true })); //use for push data
app.use(bodyParser.json()); //bodyparser handle data in json format
var port = process.env.PORT || 8080; //enable port8080 
var router = express.Router(); 
router.get('/', function(req,res){
res.json(jsondata);                          //returns json data
})
router.post('/postdata',function(req,res){             //send data
if(req.body.Id&&req.body.Title) //it shows wether user inserted data or not
{                                                           //it simply push json data 
jsondata.push(req.body);
res.jsondata(jsondata);     // return data
}
else    //it will give error if user has not sent data
{
console.log("please put some value to insert");
}
})
router.put('/updatedata/:id', function(req,res){          //update data  by unique id
    if(req.params.id)    //check whether given id is present or not
    {
    _und.each(jsondata , function(elem, index){      //traverse through json data
    if(req.params.id === elem.Id){
        elem.Title = "movie";
     
        elem.Director = "Hammad";
    }
     
    })
    res.json(jsondata);
    }
    else
    {
        console.log('Invalid Request');
    }
     
    })
app.use('/api', router);//all the url use by app will include /api
app.listen(port); // activate port