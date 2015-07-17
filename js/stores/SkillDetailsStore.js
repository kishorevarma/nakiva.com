import { register } from '../AppDispatcher';
import { createStore, mergeIntoBag, isInBag } from '../utils/StoreUtils';
import selectn from 'selectn';

var _skillDetails = {};

const SkillDetailsStore = createStore({
	/**
	 * @return {object}	returns the skilllist
	 */
	get(skillId) {
		return _skillDetails[skillId];
	},

	contain(skillId) {
		return isInBag(_skillDetails, skillId);
	}
});

SkillDetailsStore.dispatchToken = register(action => {
	const skillDetails = selectn('response.skillDetails', action);

	if(skillDetails) {
		mergeIntoBag(_skillDetails, skillDetails);
		SkillDetailsStore.emitChange();
	}
});

export default SkillDetailsStore;