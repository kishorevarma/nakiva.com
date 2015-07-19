import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component { 
	render() {
		return (
			<div className="nav">
				<Link to="/profile"> PROFILE </Link>
				<Link to="/about" > ABOUT </Link>
				<Link to="/contact"> CONTACT </Link>
    		</div>
		);
	}
}