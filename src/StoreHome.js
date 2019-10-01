import React from 'react';
import './App.css';
import NotFound from './NotFound';
import { Route, NavLink, Link, Switch } from "react-router-dom";

import Item from "./Item.js";


export default  class StoreHome extends React.Component{
    state={
        allItems: [],
        userInfo: {},
        shoppingCart: []
        
    }

    // Load store content, carts, orders, user information
    componentDidMount(){
        this.loadAllItems();
        // need to add user ID from login
        this.loadUserData(2);
        // load shoppingcart
        // load orders
    }

    loadAllItems = ()=>{
        fetch("http://localhost:3000/items")
            .then(response => response.json())
            .then( (allitemdata)=>this.addItemsToState(allitemdata))
    }

    loadUserData=(userID)=>{
        fetch("http://localhost:3000/users/"+`${userID}`)
            .then(response => response.json())
            .then( (userData)=>this.addUserDataToState(userData))
    }

    addItemsToState =(allitemdata)=>{
        this.setState({
            allItems: allitemdata
        })
    }

    addUserDataToState=(userData)=>{
        this.setState({
            userInfo: userData
        })
    }

    displayItem =(item) =>{
        return  <li>
                        <Item 
                            key={item.name}  
                            itemcomponentdata = {item}
                            functionHandleAddToCart ={this.handleAddToCart} >
                        </Item>
                    </li>
    }

    handleAddToCart =(itemOrdered, addQuantity) =>{
        addQuantity=parseInt(addQuantity);
        let findresult = null;                                    
        const orderRequest = {   
                                                item: itemOrdered,
                                                 quantity: addQuantity
                                            }

        findresult = this.state.shoppingCart.find((order)=>{
            return order.item === itemOrdered
        }) 
        
        if(!!findresult){
            console.log("adding quantity to order")
            this.setState({
                // UPDATE ITEM IN STATE WITH QUANTITY
                shoppingCart: this.state.shoppingCart.map((order)=>{
                    if(order.item === itemOrdered){
                        return { 
                            item: order.item,
                            quantity: order.quantity +=addQuantity
                        }
                    }
                    else{
                        return order
                    }
                })
            })
        }
        else{
            // ADD NEW ITEM TO SHOPPING CART IN STATE
            this.setState({
                shoppingCart: [...this.state.shoppingCart, orderRequest]
            },
                this.updateBackendNewShoppingCart(this.state.userInfo.id)
            )
            
        }
        return console.log("end shoppingcart")
        
        //     fetch("http://localhost:3000/shoppingcarts",{
        //         method: "POST",
        //         body: JSON.stringify({
        //             user_id: this.state.userInfo.id
        //         }),
        //         headers:{
        //             "Content-type": "application/json; charset=UTF-8"
        //         }
        //     })
        //     .then(response =>response.json())
        //     .then(cartData=(cartData, orderRequest)=>this.updateCartState)
        // }
    }

    updateCartState(cartData){
        console.log("updated cart success", cartData);
        
    }

    updateBackendNewShoppingCart(userID){
        fetch("http://localhost:3000/shoppingcarts",{
                method: "POST",
                body: JSON.stringify({
                    user_id: userID
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response=>response.json())
            .then(console.log)
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