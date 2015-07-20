import React, {Component} from 'react';
import { map } from 'underscore';
import { Link } from 'react-router';

export default class Skills extends Component {

	render() {
		let skills = this.props.skillList;
		let that = this;
		return (
			<div clasName="skillsCont">
				<div className="heading"> SKILLS </div>
				<p className="sectionDesc">
					Since few years I am using Nodejs as backend.
					Earlier I have used PHP, perl as backend.
					Click to see the skills in each section.
				</p>
				<ul className="skills"> 
					{
						map(skills, function(skill) {
							return (
								<Link to={`/profile/skill/${skill.id}`} key={skill.id}>
									<li key={skill.id}>{skill.section}</li>
								</Link>
							);
						})
					}
				</ul>
			</div>
		);
	}

}