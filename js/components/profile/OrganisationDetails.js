import React, { Component } from 'react';
import { map } from 'underscore';

export default class OrganisationDetails extends Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {openProject: 0};
	}

	render() {
		let {orgDetails, ...rest} = {...this.props};
		let {id, logo, projects, name} = {...orgDetails};
		let that = this;
		return (
			<div className="orgDetailsCont">
				<div className="logo">
					<img src={`/images/${logo}`} />
					<div className="companyName">{name}</div>
				</div>

				<div className="heading">PROJECTS</div>
					<ul>
					{
						map(projects, function(project, id){
							var showDescription = project.description ? 'show' : 'hide';
							var showProjectDeatails = that.state.openProject == id ? 'show' : 'hide';
							return(
								<li key={id}>
									<div className="projectName" onClick={that.handleClick.bind(null, {id})}>
										{project.name}
									</div>

									<div className={`projectDetails ${showProjectDeatails}`}>
										<div className="subHeading"> Technology: </div>
										<div className="projectTech">
											{project.technology}	
										</div>
										<div className={`subHeading ${showDescription}`}> Description: </div>
										<div className="projectDesc">
											{project.description}
										</div>
										<div className="subHeading"> Role: </div>
										<div className="myRole">
											{project.role}
										</div>
									</div>
								</li>
							);
						})
					}
					</ul>
			</div>
		);
	}

	handleClick(obj) {
		this.setState({openProject: obj.id})
	}
}