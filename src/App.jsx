
import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/navigation/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import Series from './components/navigation/Series.jsx';
import Films from './components/navigation/Films.jsx';
import NewAndPopular from './components/navigation/NewAndPopular.jsx';
import MyList from './components/navigation/MyList.jsx';
import Data from './components/firebase/Data.jsx';
import Signup from './components/auth/Signup.jsx';
import Login from './components/auth/Login.jsx';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/auth/privateRoute.jsx';
import LogOut from './components/auth/LogOut';
import Horrorfilms from './components/navigation/HorrorFilms.jsx';
import KidsFilms from './components/navigation/KidsFilms.jsx'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchterm: ''
        }
        this.ApiKey = "5bcdb6f7a10678d29bc711b5f82ef477";
    }

    handleSubmit = (e) => {
        console.log(this.state.searchterm);

        // e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.ApiKey}&query=${this.state.searchterm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies: [...data.results]});
            console.log(this.state.movies);
        }).catch((error)=>{
            console.log(error);
        });
       
        
        
    }
    handleChange = (e) => {
        this.setState({ searchterm: e.target.value })
        localStorage.setItem("searchterm", e.target.value);
    }

    handleScroll(){
        if(document.getElementById("appname").scrollTop > 10){
            document.getElementById("netflix-nav").classList.add("black");
        }else{
            document.getElementById("netflix-nav").classList.remove("black");
        }

    }
    render(){
        
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path='/Logout' component={LogOut} />
                        <PrivateRoute path='/Signup' component={Signup} />
                        <PrivateRoute path='/Login' component={Login} />
                        <div id="appname" className="App-content" onScroll={this.handleScroll}>
                        
                            <NavBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                            <PrivateRoute  path='/' component={Home} exact />
                            <Route  path='/series' component={Series} />
                            {/* <Route path='/films'  >    
                                <Films movies={this.state.movies} searchterm={"spider"} />
                            </Route> */}
                            <Route path="/" exact>
                                <Films  searchterm={localStorage.getItem("searchterm")} />
                            </Route>
                            <Route path="/" exact>
                                <Horrorfilms searchterm={localStorage.getItem("searchterm")} category={"horror"}/>
                            </Route>
                            <Route path="/" exact>
                                <KidsFilms searchterm={localStorage.getItem("searchterm")} adult={"false"}/>
                            </Route>
                            <Route path="/kids" exact>
                                <Films adult={"false"}/>
                            </Route>
                            {/* <Films  searchterm={localStorage.getItem("searchterm")} /> */}
                            <Route  path='/newandpopular' component={NewAndPopular} />
                            <Route  path='/mylist' component={MyList} />
                            
                            <Route path='/' component={Data} exact />    
                        </div>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        )
    }   
}

export default App;