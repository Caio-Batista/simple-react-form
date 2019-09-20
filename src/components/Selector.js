import React from 'react'

class Selector extends React.Component {

    render() {
      return (
        <div>
          <label>
            CATEGORY
            </label>
            <div className="App-selector-container">
              <div className="App-selector-content">
                <div className="App-selector-content-children-text">{this.props.category || 'Select your category'}</div>
                <div className="App-selector-content-children">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="grey"><path d="M7.41 7.84L12 9.25l-6 6-6-6z"></path></g></svg>
                </div>
              </div>
                <select id="app-selector-input" className="App-selector" onChange={this.props.onChange}>
                    <option value="" disabled selected>Select your category</option>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </div>
          </div>
      );
    }
  }

export default Selector