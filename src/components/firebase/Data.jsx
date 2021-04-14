import React, { useState, setState } from 'react';
import firebase from '../../firebase';
//making data class
class Data extends React.Component {
    constructor(props){
        super(props)
    this.state = ({
        data: [],
    })
}
///fetching data from firebase and setting the state with it
    componentDidMount() {
        let dataCopy = [...this.state.data];
        const database = firebase.database().ref("/");
        database.on("value", (snapshot) => {
            snapshot.forEach( (childSnapshot) => {
                var childData = childSnapshot.val();
                dataCopy.push(childData);
                this.setState({ data: dataCopy });
            });
            
        });
    }
///display all the movies
    displayMovies = (movies) => {
        return(

            ///make a seperate moviedetails div for every movie in the database
            movies.map((movie, index) =>(
                ///logging the name of the movie
                console.log(movie.name),
                //making the container for each movie
                <div key={index} id="moviedetails">
                    {/* printing movie name */}
                    <h1> Movie name:  {movie.name}</h1>
                    {/* printing movie rating */}
                    <h1> Movie rating: {movie.rating}</h1>
                    {/* making an ul for all the categories */}
                    <ul id="catlist">
                        {/* making a seperate li for each category */}
                        {movie.categories.map((category, index) => (
                            <li id="cat" key={index}> Category {movie.categories.length > 1 ? index + 1 : "" }:{category}</li>
                        ))}
                    </ul>
                    <hr></hr>
                </div>
                
            ))
        );
    }
    render() {
        /// logging all the movies 
        console.log(this.state.data);
        return (
            ////returning a div in which all the data is displayed
            <>
                <div id="test"> 
                    {this.displayMovies(this.state.data)}
                </div>
            </>
        );
    }
}

export default Data;