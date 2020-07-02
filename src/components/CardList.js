import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{
    return(
        <div> {
                robots.map((value, i, user) =>{
                return <Card id = {value.id} key ={value.id} name = {user[i].name} email = {robots[i].email.toLowerCase()}/>;
            })}
        </div>
    )
}


export default CardList;