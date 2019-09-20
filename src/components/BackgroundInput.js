import React from 'react'

class BackgroundInput extends React.Component {

    render() {
      return (
        <div>
          <label>
            ICON'S BACKGROUND COLOR
            </label>
            <div className="App-input">
            <input
              id="app-color-input"
              type="text"
              placeholder="Pick a color"
              value={this.props.color}
              onChange={this.props.onChange} />
            <span 
              className="App-color-span"
              style={{ 
                backgroundColor: 
                  this.props.color ? '#' + this.props.color : '#191919',
                color: this.props.color.includes('FF') ? '#191919' : '#FFFFFF'}}>
                {this.props.color ? '#' + this.props.color : '#191919' }
            </span>
          </div>
          </div>
      );
    }
  }

export default BackgroundInput