import 'whatwg-fetch';
import 'core-js/es6/promise';

const API_ROOT = '/api';

let fetchData = (url, resKey) => {
	return fetch(url).then(response => 
		response.json().then(json => {
			return {[resKey] : json};
    	})
  	);
}
export const getOrgsList = () => {
	let url = `${API_ROOT}/org/list`;
	return fetchData(url, "orgsList");
}

export const getSkillsList = () => {
	let url = `${API_ROOT}/skill/list`;
	return fetchData(url, "skillList");
}
/**
 * @param  {number} skillid to get skill details
 * @return {json}
 */
export const getSkillDetails = (skillId) => {
	let url = `${API_ROOT}/skill/${skillId}`;
	return fetchData(url, "skillDetails");
}

/**
 * @return {json} organisation details
 * its making a api call( node server ) to get the data
 */
export const getOrgDetails = (orgId) => {
	let url = `${API_ROOT}/org/${orgId}`;
	return fetchData(url, "orgDetails");
}