import React from 'react';

let About = React.createClass({ 

  render() {
    return(
    	<div className="aboutCont">
    		<p>
    			<span>H</span>i in this page I would like to talk about this App. I have started this project as an example for React Router and Flux. I have used several libraries to complete the project. I have created a simple rest service using NodeJs and Rethink DB for the data store. Following are the tech and libraries that I have used  
                <a href="https://github.com/kishorevarma/nakiva.com" className="githubUrl">https://github.com/kishorevarma/nakiva.com</a>
                <ul>
    				<li> React Js </li>
    				<li> Flux Pattern </li>
    				<li> Node JS </li>
    				<li> Rethink DB </li>
                    <li> React Router 1.X</li>
                    <li> Webpack </li>
                    <li> React Hot loader</li>
                    <li> Jade </li>
                    <li> Express </li>
    			</ul>
    		</p>

            <p>
                The new things that have I learned from this project are how to use ES7 decorators and higher-order components. Decorators are introduced in ES7, and they are worth to learn.
            </p>

            <p> I took boilerplate code from Dan Abromoves React Flux Example </p>
            <p> The work that I have to complete is server side rendering and remove CSS and use LESS </p>
    	</div>
    );
  }
});

export default About;
