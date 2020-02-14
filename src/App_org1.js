import React from 'react';
//# import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato";
import PropTypes from "prop-types";
// const friends = ["dal","mark","lyan"];
// friends -> (4) ["dal", "mark"]
// friends.map(function(friends) {
// return friends + " 하트"; })


const foodILike = [
    {
        id : 1,
        name: "Kimchi",
        image:
            "https://source.unsplash.com/random",
            rating: 4.9
    },
    {    
        id : 2,
        name: "ramen",
        image:
            "https://source.unsplash.com/random",
            rating: 5
    }
];

function Food({ id, name, picture, rating }) {
    //console.log(props.fav);

    return (
        <div>
        <h1>I like {name}</h1>
       <h4>{rating}/5.0</h4>
        <img src = {picture} height = "100" alt={ name } />
       
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
    
};

function App() {
    return (
        <div>
            {foodILike.map(dish => (
                <Food 
                key={dish.id} 
                name={dish.name} 
                picture={dish.image} 
                rating={dish.rating}/> 
            ))}
        </div>
    );

}

export default App;