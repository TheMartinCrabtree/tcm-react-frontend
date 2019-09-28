import React from 'react';
import NotFound from './NotFound'
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";

import StoreHome from "./StoreHome.js";
import Login from "./Login.js"


export default class App extends React.Component{
	state ={

	}

	isLoggedIn(){
		return true;
	}

	render(){
		return (
			<main className="App-main">

			  <header className="App-header">
				<h1>Header test</h1>
			  </header>

			  <nav className="App-nav">
			  		<span className="App-nav-span" >	 <NavLink exact to="/" > Shop </NavLink>	</span>
				  	<span className="App-nav-span" >	<NavLink exact to="/" > Search  </NavLink>	</span>
				 	<span className="App-nav-span" >	<NavLink exact to="/" > Profile </NavLink>	</span>
				  	<span className="App-nav-span" >	<NavLink exact to="/" > Cart  </NavLink>	</span>
				</nav>

				<section className="App-section">
					<p >This is the main section</p>
					{ this.isLoggedIn() ?  
						<StoreHome ></StoreHome> 
						: 
						<Login></Login>
					}
				</section>

				<footer className="App-footer" >
					
				</footer>

			</main>
		  );
	}
}


