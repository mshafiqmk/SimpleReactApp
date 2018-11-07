import React, { Component } from 'react';


class HelloMessage extends Component {
    state = {  }
    render() { 
        return ( <div className="container" style={{"padding":"20px","margin-bottom":"20px","margin-top":"10px","border":"2px solid blue"}} >
            Hello {this.props.name}
        </div> );
    }
}
 
export default HelloMessage;