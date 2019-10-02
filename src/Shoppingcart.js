import React from 'react';
import NotFound from './NotFound';
import './App.css';
import { Route, NavLink, Link, Switch } from "react-router-dom";

export default class Shoppingcart extends React.Component{
    state={
        itemID: 0
    }

    componentDidMount(){
        this.setState({
            itemID: this.props.iteminfo.item.id
        })
    }

    removethisitem =()=>{
        this.props.removeitem(this.props.iteminfo.id)
    }

    render(){
        const id = this.props.iteminfo.item.id;
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
                    <button  onClick={ (event)=> this.props.removeitem(id) } > DELETE  </button>
                </td>
            </tr>
                
            
        )
    }


}