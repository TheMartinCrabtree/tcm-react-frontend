import React from 'react';
import './App.css';
import NotFound from './NotFound';
import { Route, NavLink, Link, Switch } from "react-router-dom";

import Item from "./Item.js";


export default  class StoreHome extends React.Component{
    state={
        allItems: [],
        userInfo: [],
        shoppingCart: []
        
    }

    // Load store content, carts, orders, user information
    componentDidMount(){
        this.loadAllItems();
        // add load user data
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

    displayItem =(item) =>{
        return <li><Item 
            key={item.name}  
            itemcomponentdata = {item}
            functionHandleAddToCart ={this.handleAddToCart} ></Item></li>
    }

    handleAddToCart =(itemOrdered, quantity) =>{
        // get id and quantity
        //event.preventDefault();
        return console.log("hit handle add to cart", quantity);
    }

    render(){
        return(
            <>
                <nav className="App-nav">
                    <span className="App-nav-span" >	 <NavLink exact to="/" > Shop </NavLink>	</span>
                    <span className="App-nav-span" >	<NavLink exact to="/" > Search  </NavLink>	</span>
                    <span className="App-nav-span" >	<NavLink exact to="/" > Profile </NavLink>	</span>
                    <span className="App-nav-span" >	<NavLink exact to="/" > Cart  </NavLink>	</span>
                </nav>
                <ul >
                    {/* { add filter logic here } */}
                    { this.state.allItems.map((item)=>this.displayItem(item)) }
                </ul>
            </> 
        )
    }

}