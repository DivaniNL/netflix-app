import React from 'react';
import '../../scss/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faChevronDown, faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Films from './Films.jsx';

const Home = (props) => {
    console.log(props);
    return(
        <div>
            {props.testprop123}
            <div className="container container-home">
                <div className="netflix-featured-details">
                    <div className="netflix-featured-image">
                        <img src='images/1b4576f3d6235ba1a76bab39f3916b74.png'></img>
                    </div>
                    <span className="netflix-featured-text">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, adipisci corrupti. Voluptate, tenetur enim. Architecto, atque impedit. Eos cumque neque nulla ea libero voluptates sunt non ut. Aliquid, ducimus expedita?</span>
                    <div className="netflix-featured-buttons ">
                        <button className="nf-btn">
                            <div className="nf-btn-fa"> <FontAwesomeIcon className="fontawesome-netflix-nav" icon={faPlay} /></div>
                            <div className="space"></div>
                            <span className="nf-btn-text">Afspelen</span>

                        </button>
                        <button className="nf-btn">
                            <div className="nf-btn-fa"> <FontAwesomeIcon className="fontawesome-netflix-nav" icon={faInfoCircle} /></div>
                            <div className="space"></div>
                            <span className="nf-btn-text">Meer Informatie</span>

                        </button>
                        </div>
                </div>

            </div>
            <Films/  >
        </div>
    )
}
export default Home;