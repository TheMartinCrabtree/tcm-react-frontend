import React from 'react';
import NotFound from './NotFound';
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";

export default class Shoppingcart extends React.Component{

    render(){
        console.log("props in render shoppingcart", this.props.iteminfo)
        return(
            <tr>
                <td>
                    <span >{ this.props.iteminfo.item.itemname }</span>
                </td>
                <td>
                    <span >{ this.props.iteminfo.quantity }</span>
                </td>
                <td>
                    <span > { this.props.iteminfo.item.price }  </span>   
                </td>
                <td>
                    <button 
                        onClick={ this.props.removeitem(this.props.iteminfo.item.itemid) } >DELETE</button>
                </td>
            </tr>
                
            
        )
    }


}