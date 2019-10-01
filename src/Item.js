import React from 'react';
import NotFound from './NotFound';
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";

export default class Item extends React.Component {
    state ={
        item: {},
        quantity: 1,
    }

    componentDidMount(){
        return this.setState({
            item: this.props.itemcomponentdata
        })
    }

    updateStateQuantity = (event) =>{
        console.log("updating State quantity", event.target)
         return this.setState({
            [event.target.name]: event.target.value
         })
    }

    updateCart = (event) =>{
        event.preventDefault();
        return this.props.functionHandleAddToCart(this.state.item, this.state.quantity);
    }


    render(){
        return(
            <section >
                <h3 > { this.state.item.itemname } </h3>
                <img src="" alt="item picture" />
                <details >
                    <div >
                        Descrption: {this.state.item.description }
                    </div>
                </details> 
                <div >
                    Price: {`$` +  this.state.item.price } 
                </div>
                <form 
                    id={this.state.item.id} 
                    value={this.state.quantity } 
                    onSubmit={ this.updateCart } >
                Quantity: 
                    <select 
                        name="quantity"
                        onChange={this.updateStateQuantity }
                        value={ this.state.quantity } >    
                            <option value="1" > 1 </option>
                            <option value="2" > 2 </option>
                            <option value="3" > 3 </option>
                            <option value="4" > 4 </option>
                            <option value="5" > 5 </option>
                    </select>
                    <input type="Submit" value="Add to Cart"  />

                </form>
            </section>
        )

    }

}