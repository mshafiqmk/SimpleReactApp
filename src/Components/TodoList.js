import React, { Component } from "react";
class TodoList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ul class="list-group">
              {this.props.items.map(item => (
                <li class="list-group-item" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
