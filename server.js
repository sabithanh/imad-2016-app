var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    article_one : {
        title: "Article one | Sabitha",
    heading: "Article one",
    date: '28/09/2016',
    content: `<p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>
                <p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>
                <p>
                    This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. This is the content of the article one. 
                </p>`
                 },
    article_two : {
    title: "Article Two | Sabitha",
    heading: "Article Two",
    date: '10/09/2016',
    content: `<p>
                    This is the content of the article two. This is the content of the article two.This is the content of the article two.This is the content of the article two.This is the content of the article two. 
                </p>
                <p>
                    This is the content of the article two. This is the content of the article two.This is the content of the article two.This is the content of the article two.This is the content of the article two. </p>
                <p>
                    This is the content of the article two. This is the content of the article two.This is the content of the article two.This is the content of the article two.This is the content of the article two. article one. This is the content of the article one. 
                </p>`
            },
    article_three : {
    title: "Article Three | Sabitha",
    heading: "Article Three",
    date: '15/09/2016',
    content:    `<p>
                    This is the content of the article three. This is the content of the article three.This is the content of the article three.This is the content of the article three.This is the content of the article three. 
                </p>
                <p>
                    TThis is the content of the article three. This is the content of the article three.This is the content of the article three.This is the content of the article three.This is the content of the article three. 
                </p>`
    
}
};
function createTemplate(data){
    var title= data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate=
        `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
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
    </html>`;

    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
  counter= counter+1;
  res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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


