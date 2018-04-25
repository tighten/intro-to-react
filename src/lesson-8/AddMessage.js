import React, { Component } from 'react';

class AddMessage extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  addMessage() {
    this.props.onAddMessage(this.state.text);

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input type="text"
                   className="form-control"
                   value={ this.state.text }
                   onChange={ (e) => { this.setState({ text: e.target.value }) }} />

            <div className="input-group-append">
              <button className="btn btn-primary"
                      onClick={() => { this.addMessage() }}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMessage;
