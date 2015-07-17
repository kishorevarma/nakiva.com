import React from 'react';

let Contact = React.createClass({
	render: function() {
		return (
			<div className="contactCont">
				<div className="contactDetails">
					<ul>
					 	<li> 
					 		LinkedIn:  
					 		<a href="https://nz.linkedin.com/in/kishorevarman"> 
					 			https://nz.linkedin.com/in/kishorevarmam </a>
					 	</li>
					 	<li>
					 		Twitter:
					 		<a href="https://twitter.com/kishorevarma">https://twitter.com/kishorevarma</a> 
					 	</li>
					 	<li>
					 		StackOverflow: 
					 		<a href="http://stackoverflow.com/users/1355629/kishorevarma">stackoverflow.com/users/1355629/kishorevarma</a>
						</li>
						<li>
							Github:
							<a href="https://github.com/kishorevarma">https://github.com/kishorevarma</a>
						</li>

					</ul>
					<p>
						<div> Address: 2/629, Mount Albert Road, Royal Oak, Auckland, New Zealand </div>
						<div> Mobile: (+64) 0223534213 </div>
					</p>
				</div>
			</div>
		);
	}
});

export default Contact;