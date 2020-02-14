import React from 'react';
//# import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato";
//import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
// const friends = ["dal","mark","lyan"];
// friends -> (4) ["dal", "mark"]
// friends.map(function(friends) {
// return friends + " 하트"; })

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const {
            data: {
                data :{ movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log(movies);
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    }
    render () {
        const { isLoading, movies } = this.state;
        return (
            <section class="container">
                {isLoading ? (
                    <div class="loader">
                        <span class="loader__text">"Loading..."</span>
                    </div> 
                    ) : ( 
                        movies.map(movie => (
                            <Movie 
                                key={movie.id}
                                id={movie.id} 
                                year={movie.year} 
                                title={movie.title} 
                                summary={movie.summary} 
                                poster={movie.small_cover_image}
                            />
                        )))}
            </section>
        );
    }
}

export default App;