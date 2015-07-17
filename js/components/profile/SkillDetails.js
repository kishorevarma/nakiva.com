import React, { Component } from 'react';
import { map } from 'underscore';

export default class SkillDetails extends Component {

	render() {
		let {skillDetails, ...rest} = {...this.props};
		let {skills, section, id} = {...skillDetails};
		return (
			<div className="skillDetailsCont">
				<div className="section"> {section} </div>
				<div className="skillDetails">
					<ul>
					{
						map(skills, function(skill, index) {
							return (
								<li key={index}>
									<div className="skillName"> {skill.name} </div>
									<div className="meter">
										<div className={`proficiency ${skill.level}`}> </div>
									</div>
								</li>
							)
						})
					} 
					</ul>
				</div>
			</div>
		)		
	}
}