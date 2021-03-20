import React from 'react';
import '../../scss/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faChevronDown, faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <div className="container container-home">
            <div className="netflix-featured-details">
                <div className="netflix-featured-image">
                    <img src='images/1b4576f3d6235ba1a76bab39f3916b74.png'></img>
                    Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, adipisci corrupti. Voluptate, tenetur enim. Architecto, atque impedit. Eos cumque neque nulla ea libero voluptates sunt non ut. Aliquid, ducimus expedita?


                </div>
                <div className="netflix-featured-buttons ">
                    <button className="nf-btn"><FontAwesomeIcon className="fontawesome-netflix-nav" icon={faPlay} />Afspelen</button>
                    <button className="nf-btn"><FontAwesomeIcon className="fontawesome-netflix-nav" icon={faInfoCircle} />Meer Informatie</button>
                    </div>
            </div>

        </div>
    )
}
export default Home;