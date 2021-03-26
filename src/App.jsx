

import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/navigation/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import Series from './components/navigation/Series.jsx';
import Films from './components/navigation/Films.jsx';
import NewAndPopular from './components/navigation/NewAndPopular.jsx';
import MyList from './components/navigation/MyList.jsx';


class App extends React.Component {
     handleScroll(){
         if(document.getElementById("appname").scrollTop > 10){
         document.getElementById("netflix-nav").classList.add("black");
         }else{
            document.getElementById("netflix-nav").classList.remove("black");
         }

    }
    render(){
        
        return(
            <BrowserRouter>
            <div id="appname" className = "App-content" onScroll={this.handleScroll}>
                <NavBar />
                <Route path='/' component={Home} exact />
                <Route path='/series' component={Series} />
                <Route path='/films' component={Films} />
                <Route path='/newandpopular' component={NewAndPopular} />
                <Route path='/mylist' component={MyList} />
            </div>
            </BrowserRouter>
        )
    }   
}

export default App;