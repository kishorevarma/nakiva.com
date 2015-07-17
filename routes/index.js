var express = require('express');
var router = express.Router();
var client = require('../store/client');



router.get('/api/skill/list', function(req, res) {
	client.getSkillList(function(data) {
		res.json(data);
	});
});


router.get('/api/skill/:id', function(req, res) {
	client.getSkillDetails(req.params.id, function(data) {
		res.json(data);
	});
});

router.get('/api/org/list', function(req, res) {
	client.getOrgsList(function(data) {
		res.json(data);
	});	
});

router.get('/api/org/:id', function(req, res) {
	client.getOrgDetails(req.params.id,function(data) {
		res.json(data)
	})
});

module.exports = router;

