var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
	
	new Product({
	imagePath: 'http://www.godisageek.com/wp-content/uploads/tekken-7-review.jpg',
	title: 'tekken7 video game',
	description: 'Awesome Game!!',
	price: 10
	}),
	new Product({
	imagePath: 'https://lh3.googleusercontent.com/DQEiAUu-GyautvDNFmMCAQ25jzqg9vpH0ZLC7UHzYML8s9zy2rBpvgqK5cRfbolycNo=w720-h310',
	title: 'clash of clans video game',
	description: 'Awesome Game!!',
	price: 15
	}),
	new Product({
	imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/209160/header.jpg?t=1447355542',
	title: 'call of duty video game',
	description: 'Awesome Game!!',
	price: 20
	}),
	new Product({
	imagePath: 'https://store-images.s-microsoft.com/image/apps.17382.13510798885735219.9735d495-578c-4a4c-b892-3eb3a780b3a0.d3792486-cf98-40c0-a2c1-d6443f0e2b70?w=180&h=270&q=60',
	title: 'minecraft video game',
	description: 'Awesome Game!!',
	price: 30
	}),
 	
	new Product({
	imagePath: 'https://i.ytimg.com/vi/of1QsgGtA9Q/maxresdefault.jpg',
	title: 'prototype video game',
	description: 'Awesome Game!!',
	price: 40
	})
	
];
var done = 0;
for (var i=0;i< products.length;i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}
