var pomelo = require('pomelo');

module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  this.app = app;
};

/**
 * New client entry chat server.
 *
 * @param  {Object}   msg     request message
 * @param  {Object}   session current session object
 * @param  {Function} next    next stemp callback
 * @return {Void}
 */
Handler.prototype.entry = function(msg, session, next) {
  next(null, {code: 200, msg: 'firstPomeloTest game server is ok.'});
};


Handler.prototype.mysql = function(msg,session,next){
	var mysqlConfig = pomelo.app.get('mysql');
	var mysql = require('mysql').createConnection(mysqlConfig);

	console.log('mysql=='+mysql);
	
	for(var i in mysqlConfig){
		console.log(i+'=='+mysqlConfig[i]);
	}

	mysql.query('select * from t1',function(err,row,fields){
		if (err) {
			console.log(err);
			return;
		};

		console.log(row);
		console.log(fields);
	});


	var msg = 'connect Mysql success!';
	console.log(msg);
  	next(null, {code: 200, msg: msg});
};