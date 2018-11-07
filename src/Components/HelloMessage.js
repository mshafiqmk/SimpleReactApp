import React, { Component } from 'react';


class HelloMessage extends Component {
    state = {  }
    render() { 
        return ( <div>
            Hello {this.props.name}
        </div> );
    }
}
 
export default HelloMessage;