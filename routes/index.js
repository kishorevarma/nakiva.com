var express = require('express');
var router = express.Router();
var client = require('../store/client');



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

