import React from 'react';
import '../../scss/Films.scss';
class Movie extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
        <div className="nf-movie-wrapper">
            <div className = "nf-movie-title-wrapper">
                <h1 className="nf-movie-title">{this.props.title}</h1>
            </div>
            
            <div className = "nf-movie-description-wrapper">
                <p className = "nf-movie-description">{this.props.desc}</p>
            </div>
            
            <div className = "nf-movie-image-wrapper">
                <img className = "nf-movie-image" src={`http://image.tmdb.org/t/p/w185${this.props.image}`}></img>
            </div>
            
        </div>
        )
    }
}

export default Movie;