import React from 'react'

class NameInput extends React.Component {

    render() {
      return (
        <div>
          <label>
            APP NAME
          </label>
          <div className="App-input">
            <input id="app-name-input" type="text" placeholder="Enter App Display Name" value={this.props.name} onChange={this.props.onChange} />
          </div>
        </div>
      );
    }
  }

export default NameInput