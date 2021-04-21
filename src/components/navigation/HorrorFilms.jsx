import React from 'react';
import Movie from './Movie';
import '../../scss/Films.scss';
import { useAuth } from '../../context/AuthContext'

var category = "none";
class HorrorFilms extends React.Component {

    constructor(props) {
        super(props)
        this.loadData();
        
        
        this.state = {
            movies: [],
            
            isloaded: false
        }
        this.ApiKey = "5bcdb6f7a10678d29bc711b5f82ef477";
    }
   
    loadData = () => {
        
        console.log(this.props.searchterm)
        // if(this.props.movies){
        //     this.setState({movies: [...this.props.movies]})
        // }
        // else{
        if (!this.props.searchterm) {
            if (this.props.category) {
                console.log("category found:");
                console.log(this.props.category);
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5bcdb6f7a10678d29bc711b5f82ef477&with_genres=27`)
                    .then(data => data.json())
                    .then(data => {
                        this.setState({ movies: [...data.results] });
                        //make isloaded true and check if isloaded is false
                    });
            } else {
                if(this.props.adult == "false"){
                    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5bcdb6f7a10678d29bc711b5f82ef477&with_genres=10751`)
                    .then(data => data.json())
                    .then(data => {
                        this.setState({ movies: [...data.results] });
                        //make isloaded true and check if isloaded is false
                        // 10751
                    });
                }
                else{
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5bcdb6f7a10678d29bc711b5f82ef477&include_adult=false`)
                    .then(data => data.json())
                    .then(data => {
                        this.setState({ movies: [...data.results] });
                        //make isloaded true and check if isloaded is false
                    });
                }
                
            }
        } else {
            if (this.props.category) {
                console.log("category found:");
                var test  = "horror";
                console.log(this.props.category);
            } else {

                this.setState({text: "The 20 most popular movies"});
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=5bcdb6f7a10678d29bc711b5f82ef477&query=${this.props.searchterm}`)
                    .then(data => data.json())
                    .then(data => {
                        console.log(data);
                        this.setState({ movies: [...data.results] });
                        console.log(this.state.movies);
                    });
                    
            }
        }

        // else{

        //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=5bcdb6f7a10678d29bc711b5f82ef477&query=${this.props.searchterm}`)
        //     .then(data => data.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({ movies: [...data.results]});
        //         console.log(this.state.movies);
        //     });
        // }
    }
    render() {
        if(this.state.movies.length < 1){
            return (
                <>
                    <div className="nf-group-header-wrapper">
                        <h1 className="nf-group-header">HorrorFilms</h1>
                    </div>
                    <div className="nf-films-container" >
                        <h3>Er zijn geen films in deze categorie met de gebruikte zoekterm</h3>
                        {this.state.movies.map((movie, index) => {
        
                            return <Movie key={index} image={movie.poster_path} title={movie.original_title} desc={movie.overview} />
                        })}
                    </div>
        
                </>
            )
        }else{
                return (
                    <>
                        <div className="nf-group-header-wrapper">
                            <h1 className="nf-group-header">HorrorFilms</h1>
                        </div>
                        <div className="nf-films-container" >
                            
                            {this.state.movies.map((movie, index) => {
        
                                return <Movie key={index} image={movie.poster_path} title={movie.original_title} desc={movie.overview} />
                            })}
                        </div>
        
                    </>
                )
            }
        }
        }

export default HorrorFilms;