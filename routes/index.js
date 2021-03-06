var express = require('express');
var router = express.Router();
var client = require('../store/client');


router.get('/', function(req,res) {
	res.render('index');
});

router.get('/profile', function(req,res) {
        res.render('index');
});

router.get('/profile/skill/:id', function(req,res) {
        res.render('index');
});

router.get('/profile/org/:id', function(req,res) {
        res.render('index');
});

router.get('/about', function(req,res) {
        res.render('index');
});

router.get('/contact', function(req,res) {
        res.render('index');
});

router.get('/skill/list', function(req, res) {
	client.getSkillList(function(data) {
		res.json(data);
	});
});


router.get('/skill/:id', function(req, res) {
	client.getSkillDetails(req.params.id, function(data) {
		res.json(data);
	});
});

router.get('/org/list', function(req, res) {
	client.getOrgsList(function(data) {
		res.json(data);
	});	
});

router.get('/org/:id', function(req, res) {
	client.getOrgDetails(req.params.id,function(data) {
		res.json(data)
	})
});

module.exports = router;

