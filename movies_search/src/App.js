import React, {Component} from 'react';
import './App.css';
import Movie from './movieRow.js';
import $ from 'jquery';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.performSearch("Star Wars")
    }

    performSearch(searchTerm) {
        console.log("Perform search using MovieDB");
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=09282c4928cd7a2574133aecb76326b4&query=" + searchTerm;
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                const results = searchResults.results;

                var movieRows = [];

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                    const movieRow = <Movie key={movie.id} movie={movie}/>;
                    movieRows.push(movieRow)
                });
                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data");
            }
        });
    }

    searchChangeHandler(event) {
        const boundObject = this;
        const searchTerm = event.target.value;
        boundObject.performSearch(searchTerm);
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                    <tr>
                        <td className="imageBar">
                            <img src="images/movieDB.svg" width="50" alt="app icon"/>
                        </td>
                        <td className="titleBar">
                            <h1>MoviesDB Search</h1>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <input onChange={this.searchChangeHandler.bind(this)} className="searchMovie" type="text"
                       placeholder="Search Movie"/>

                {this.state.rows}
            </div>
        );
    }
}

export default App;
