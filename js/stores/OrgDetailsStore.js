import { register } from '../AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import selectn from 'selectn';


let _orgDetails = {};

const OrgDetailsStore = createStore({
	/**
	 * @return {object}	returns the skilllist
	 */
	get(orgId) {
		return _orgDetails[orgId];
	},

	contain(orgId) {
		return isInBag(_orgDetails, orgId);
	}
});

OrgDetailsStore.dispatchToken = register(action => {
	const orgDeatils =  selectn('response.orgDetails', action)

	if(orgDeatils) {
		mergeIntoBag(_orgDetails, orgDeatils);
		OrgDetailsStore.emitChange();
	}
});

export default OrgDetailsStore;