import React from 'react';
import Movie from './Movie';
import '../../scss/Films.scss';
class Films extends React.Component{
    constructor(props){
        super(props)
        this.loadData();

        this.state = {
            movies: [],
            isloaded: false
        }
        this.ApiKey = "5bcdb6f7a10678d29bc711b5f82ef477";
    }
    loadData = () =>{
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5bcdb6f7a10678d29bc711b5f82ef477`)
            .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies: [...data.results]});
            console.log(this.state.movies);
            //make isloaded true and check if isloaded is false
        });
    }
    render(){
        return(
        <>
            <div className="nf-group-header-wrapper">
                <h1 className="nf-group-header">The 20 most popular movies</h1>
            </div>
            <div className="nf-films-container" >
                
                     {this.state.movies.map((movie, index)=>{
                        console.log(movie);
                        return <Movie key = {index} image = {movie.poster_path} title = {movie.original_title}  desc = {movie.overview}/>
                    })}
            </div>
            
        </>
        )
    }
}
export default Films;