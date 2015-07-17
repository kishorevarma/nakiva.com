import React, { PropTypes } from 'react';

import * as ProfileActionCreator from '../../actions/ProfileActionCreator';

import SkillListStore from '../../stores/SkillListStore';
import OrgListStore from '../../stores/OrgListStore';
import SkillDetailsStore from '../../stores/SkillDetailsStore';
import OrgDeatilsStore from '../../stores/OrgDetailsStore';

import SkillList from './SkillList';
import OrganisationList from './OrganisationList';
import Bio from './Bio';
import SkillDetails from './SkillDetails';
import OrganisationDetails from './OrganisationDetails';

import connectToStores from '../../utils/connectToStores';

const DEFAULT_TYPE = "skill";
const DEFAULT_ID = 1;

const getState = (props) => {
	let id  = props.params.id || DEFAULT_ID;
	const skillList = SkillListStore.get();
	const orgList = OrgListStore.get();
	const skillDetails = SkillDetailsStore.get(id);
	const orgDetails = OrgDeatilsStore.get(id);

	return {
		skillList,
		orgList,
		skillDetails,
		orgDetails
	};
};

const requestData = (props) => {
	let type  = props.location.pathname.split('/')[2] || DEFAULT_TYPE;
	let id = props.params.id || DEFAULT_ID;
	ProfileActionCreator.getSkillsList();
	ProfileActionCreator.getOrgsList();

	console.log("path", type);
	if(type == "skill") {
		ProfileActionCreator.getSkillDetails(id);
	} else {
		ProfileActionCreator.getOrgDetails(id);
	}

};

@connectToStores([SkillListStore, OrgListStore, SkillDetailsStore, OrgDeatilsStore], getState)
export default class Profile {

	static propTypes = {
		skillList: PropTypes.object.isRequired,
		orgList: PropTypes.object.isRequired,
		skillDetails: PropTypes.object,
		orgDetails: PropTypes.object
	}

	componentWillMount() {
		requestData(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.id !== this.props.params.id) {
      		requestData(nextProps);
    	}
	}

	render() {
		let pathname = this.props.location.pathname.split('/')[2];
		let ChildComponent;
		if(pathname == "skill" || typeof pathname == 'undefined') {
			ChildComponent = <SkillDetails {...this.props}/>;
		} else {
			ChildComponent = <OrganisationDetails {...this.props}/>
		}
		return(
			<div className="profileCont">
				<div className ="left">
					<Bio/>
					<SkillList {...this.props}/>
					<OrganisationList {...this.props}/>
				</div>
				<div className="middle"></div>
				<div className="right">
					{ChildComponent}
				</div>
			</div>
		);
	}
}

