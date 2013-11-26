var express = require('express'),
    cons = require('consolidate'),
    rest = require('./service/rest.js');
    
var app = express();

app.configure(function(){
    app.use(express.logger());
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
    app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.engine('html', cons.ejs);
    app.use(function(req, res, next){
      console.log('%s %s', req.method, req.url);
      next();
    });
});

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/q', function(req, res) {
    var options = {
        host: req.body['host'],
        port: req.body['port'] || 80,
        path: (req.body['context'] || '') + '/api/json?tree=jobs[name,buildable,healthReport[score],lastBuild[result,building,url]]',
        method: 'get'
    };
    if (req.body['username'] && req.body['password']) {
        options.headers = {'Authorization': 'Basic '+new Buffer(req.body['username']+':'+req.body['password']).toString('base64')};
    }
    rest.get(options, function(status, result){
        var activeJobs = result.jobs.filter(function(job) {
            return job.buildable;
        });
        res.json(activeJobs);
    });
});

app.listen(3000);
console.log('Listening on port 3000');