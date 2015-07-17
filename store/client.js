var r = require('rethinkdbdash')();
var _ = require('underscore');

/*  Here I can memoise the db data but I am not doing because 
 *  I want show how to use differnet api calls in flux
 */
var client = {

    getSkillList: function(callback) {
        r.db('nakiva').table('skills').run().then(function(data) {
            var skillSections;
            skillSections = _.map(data[0].skills, function(skillData) {
                return {id: skillData.id, section: skillData.section};
            });
            callback(skillSections);
        });
    },

    getSkillDetails: function(skillId, callback) {
        r.db('nakiva').table('skills').run().then(function(data) {
            var skills;
            skills = _.find(data[0].skills, function(skillData) {
                return skillData.id == skillId;
            });
            callback(skills);
        });
    },

    getOrgsList: function(callback) {
        r.db('nakiva').table('companies').run().then(function(data) {
            var orgsList;
            orgsList = _.map(data[0].orgs, function(orgData) {
                return {
                    logo: orgData.logo,
                    name: orgData.name,
                    id: orgData.id
                };
            });
            callback(orgsList);
        });
    },

    getOrgDetails: function(orgId, callback) {
    	r.db('nakiva').table('companies').run().then(function(data) {
            var orgnisation;
            orgnisation = _.find(data[0].orgs, function(orgData) {
            	return orgData.id == orgId;
            });
            callback(orgnisation);
        });
    }
};
module.exports = client;
