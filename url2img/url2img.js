/////////////////////////////////////////////////
//
//  URL2IMG  
//
//  Reference: 
//    https://www.npmjs.com/package/url2img
//
/////////////////////////////////////////////////



var urlToImage = require('url2img');

// https://www.npmjs.com/package/url2img


urlToImage('http://www.google.com/', 'google.png').then(function() {
	// now google.png exists and contains screenshot of google.com 
}).catch(function(err) {
    console.error(err);
});