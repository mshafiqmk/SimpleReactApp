import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds:0 , minutes:0 ,hrs:0}
        console.log("ctor "+this.state.seconds);
    }
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
          }));

        if(this.state.seconds>=60)
            {
                this.setState(state=> ({
                    minutes:state.minutes+1,
                    seconds:0
                }));
            }
        if(this.state.minutes>=60){
            this.setState(state =>({
                hrs:state.hrs+1,
                minutes:0
            }));
            
        }

       
      }
      componentDidMount() {
          console.log("didmount");
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        console.log("willunmount");
        clearInterval(this.interval);
      }

    render() {
    return (
      <div>
        Seconds: {this.state.seconds}  <br></br>
        Minutes : {this.state.minutes} <br></br>
        Hours : {this.state.hrs} <br></br>
      </div>
    );
  }
}
 
export default Timer;