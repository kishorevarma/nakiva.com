import React, {Component} from 'react'
import { map } from 'underscore';
import { Link } from 'react-router';

export default class Organisations extends Component {
	
	render() {
		let orgs = this.props.orgList;
		return (
			<div className="orgsCont">
				<div className="heading"> ORGANISATIONS & PROJECTS</div> 
				<ul className="org"> 
					{
						map(orgs, function(org) {
							let logo = `/images/${org.logo}`;
							return (
								<li key={org.id}>
									<Link to={`/profile/org/${org.id}`}>
										<img src={logo} alt={org.name} className="logo"/>
									</Link>
								</li>
							);
						})
					}
				</ul>
			</div>
		);	
	}
}
