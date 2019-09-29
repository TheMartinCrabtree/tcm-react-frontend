import React from 'react';
import NotFound from './NotFound';
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";

import StoreHome from "./StoreHome.js";
import Login from "./Login.js"


export default class App extends React.Component{
	state ={
		loggedin: null
	}

	isLoggedIn(){
		return true;
	}

	render(){
		return (
			<main className="App-main">

			  <header className="App-header">
				<h1>Store Header</h1>
			  </header>

				<section className="App-section">
					
					{ !!this.isLoggedIn() ?  
						<StoreHome ></StoreHome> 
						: 
						<Login></Login>
					}
				</section>

				<footer className="App-footer" >
					<span > Footer information goes here.</span>
				</footer>

			</main>
		  );
	}
}


