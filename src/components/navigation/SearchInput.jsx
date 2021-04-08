import React from 'react';
import '../../App.scss';


class SearchInput extends React.Component {
   
   render(){
       return(
        <div className="nf-searchinput-parent">
               <form className="nf-searchinput-form" onSubmit={this.props.handleSubmit}>
                   <input className="nf-searchinput" placeholder="search movie" type="text" onChange={this.props.handleChange} />
            </form>
        </div>
       )
   }   
}

export default SearchInput;