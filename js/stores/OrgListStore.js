import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import { isEmpty } from 'underscore'; 
import selectn from 'selectn';

/*
	We are maintaingin a local copy of server response so that we don't need to
	fetch always.
 */
let _orgList = {};

const OrgListStore = createStore({
	/**
	 * @return {object}	returns the skilllist
	 */
	get() {
		return _orgList;
	},

	isAlreadyFecthed() {
		if(!isEmpty(_orgList)) {
			return true
		}

		return false
	}
});


OrgListStore.dispatchToken = register(action => {

	/*
		We are not using the switch case of actions
		look at dispacther and action creator code for understanding
	 */
	const orgList = selectn('response.orgsList', action);
	if(orgList) {
		_orgList = orgList;
		OrgListStore.emitChange();
	}
});

export default OrgListStore;