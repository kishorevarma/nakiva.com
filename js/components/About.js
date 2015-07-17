import React from 'react';

let About = React.createClass({ 

  render() {
    return(
    	<div className="aboutCont">
    		<p>
    			<span>H</span>i in this page I would like to talk about this App. 
                I have started this project as example for React Router and Flux.
                I have used several libraries to complete the project. I have created
                a simple rest service using NodeJs and Rethink db for the data store.

                Following are the tech and libararies which I have used 
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
                The new things which I learned from this project is how to use ES7 deceorators and  higher-order components.
                Decorartors are going to be introduced in ES7 and they are worth to learn.
            </p>

            <p> I took boilerplate code from Dan Abromoves React Flux Example </p>
            <p> The work which I have to complete is server side rendering and remove css and use less </p>
    	</div>
    );
  }
});

export default About;
