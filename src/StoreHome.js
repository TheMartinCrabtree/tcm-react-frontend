import React from 'react';
import './App.css';
import NotFound from './NotFound';
import { Route, NavLink, Link, Switch } from "react-router-dom";


export default  class StoreHome extends React.Component{
    state={
        allItems: [],
        userInfo: [],
        
    }

    // Load store content, carts, orders, user information
    componentDidMount(){
        this.loadAllItems();

    }

    loadAllItems = ()=>{
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then( (allitemdata)=>this.addItemsToState(allitemdata))
    }

    addItemsToState =(allitemdata)=>{
        this.setState({
            allItems: allitemdata
        })
    }


    render(){
        return(
            <nav className="App-nav">
                <span className="App-nav-span" >	 <NavLink exact to="/" > Shop </NavLink>	</span>
                <span className="App-nav-span" >	<NavLink exact to="/" > Search  </NavLink>	</span>
                <span className="App-nav-span" >	<NavLink exact to="/" > Profile </NavLink>	</span>
                <span className="App-nav-span" >	<NavLink exact to="/" > Cart  </NavLink>	</span>
            </nav>
        )
    }

}