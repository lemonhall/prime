/*
---
name: Date
description: ES5 Date methods
...
*/

define(['../Core/Host'], function(Host){

return Host(Date).extend('now', function(){
	return +(new Date);
});

});
