var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: "Article one | Sabitha",
    heading: "Article one",
    date: 28/09/2016,
    content: `<p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>
                <p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>
                <p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>`
};
function createTemplate(data){
    var title= data.title;
    var heading = data.heading;
    var date = data.date;
    varr content = data.content
    
    var htmlTemplate=
        `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
            <style>
                .container{
                        margin: 0 auto;
                        font-family: sans-serif;
                        color: #2a4c2a;
                        padding-top: 70px;
                        padding-left: 20;
                        padding-right: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h3> ${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>`
;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one', function(req, res){
    res.send(createTemplate(articleOne));
    });
app.get('/article_two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
    });
app.get('/article_three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
    });    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
