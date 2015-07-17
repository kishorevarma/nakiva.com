import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import { isEmpty } from 'underscore';
import selectn from 'selectn';

/*
	We are maintaingin a local copy of server response so that we don't need to
	fetch always.
 */
let _skillList = {};

const SkillListStore = createStore({
	/**
	 * @return {object}	returns the skilllist
	 */
	get() {
		return _skillList;
	},

	isAlreadyFecthed() {
		if(!isEmpty(_skillList)) {
			return true
		}

		return false
	}
});


SkillListStore.dispatchToken = register(action => {

	/*
		We are not using the switch case of actions
		look at dispacther and action creator code for understanding
	 */
	const skillList = selectn('response.skillList', action);
	if(skillList) {
		_skillList = skillList;
		SkillListStore.emitChange();
	}
});

export default SkillListStore;
