var pomelo = require('pomelo');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'firstPomeloTest');
app.defaultConfiguration();

app.configure("development|production",function(){
	app.loadConfig('mysql',app.getBase()+'/../share/config/mysql.json');

});


app.configure("development|production",function(){
	
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
