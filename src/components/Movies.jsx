import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies : getMovies()
    }
    handelDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies 
            //key : value , {movies : movies}
            //if key and value is the same then we can simplyfy this code by removing repetation
            // { movies }
        })
    }
    render() { 
        const {length: count} = this.state.movies;
        console.log("movies length ", count);
        if(count === 0) 
            return <p className="p-3">There are <span className="badge-warning">NO</span> movies in Database...!!!</p>
        return ( 
            <React.Fragment>
                <p className="p-3">The result showing {count} movie in the Database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genra</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => 
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={()=> this.handelDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default Movies;