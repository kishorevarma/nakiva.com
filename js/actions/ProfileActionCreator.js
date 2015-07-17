import { dispatchAsync } from '../AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import * as APIUtils from '../utils/APIUtils';
import SkillListStore from '../stores/SkillListStore';
import OrgListStore from '../stores/OrgListStore';
import SkillDetailsStore from '../stores/SkillDetailsStore';
import OrgDetailsStore from '../stores/OrgDetailsStore';

/**
 * @param  {number} skillId to get the skill details
 * @return {undefined} it just dispatches the request to store
 */
export const getSkillDetails = (skillId) => {	

	/*
		if we know already about the skill
		we exit instead dispatching event
	 */
	if(SkillDetailsStore.contain(skillId)) {
		return;
	}

	dispatchAsync(APIUtils.getSkillDetails(skillId), {
		request: ActionTypes.REQUEST_SKILLS_DETAILS,
    	success: ActionTypes.REQUEST_SKILLS_DETAILS_SUCCESS,
    	failure: ActionTypes.REQUEST_SKILLS_DETAILS_ERROR
	}, { skillId });
}

/**
 * @param  {number} orgId to get project deatils of org
 * @return {undefined} just dipatches the event to store
 */
export const getOrgDetails = (orgId) => {

	/*
		Same like getSkillDetails we are exiting
		before if we already have the data
	 */
	if(OrgDetailsStore.contain(orgId)) {
		return
	}
	 
	dispatchAsync(APIUtils.getOrgDetails(orgId), {
		request: ActionTypes.REQUEST_ORG_DETAILS,
    	success: ActionTypes.REQUEST_ORG_DETAILS_SUCCESS,
    	failure: ActionTypes.REQUEST_ORG_DETAILS_ERROR
	}, { orgId });
}

export const getSkillsList = () => {

	/*
		if its already fetched we are not dispatching
		event again.
	 */
	if(SkillListStore.isAlreadyFecthed()) {
		return;
	}

	dispatchAsync(APIUtils.getSkillsList(), {
		request: ActionTypes.REQUEST_SKILLS_LIST,
    	success: ActionTypes.REQUEST_SKILLS_LIST_SUCCESS,
    	failure: ActionTypes.REQUEST_SKILLS_LIST_ERROR
	}, {});
}

export const getOrgsList = () => {

	/*
		if its already fetched we are not dispatching
		event again.
	 */
	if(OrgListStore.isAlreadyFecthed()) {
		return true;
	}

	dispatchAsync(APIUtils.getOrgsList(), {
		request: ActionTypes.REQUEST_ORGS_LIST,
    	success: ActionTypes.REQUEST_ORGS_LIST_SUCCESS,
    	failure: ActionTypes.RREQUEST_ORGS_LIST_ERROR
	}, {});
}