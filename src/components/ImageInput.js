import React from 'react'

class ImageInput extends React.Component {

    render() {

      const { image } = this.props
      return (
        <div>
          <label>
            APP ICON
            </label>
            <div className="App-selector-container">
              <div className="App-selector-content">
                <div className="App-selector-content-children-text">{ image ? image.substr(image.length - 10) : 'Drag an image here to upload'}</div>
                <div className="App-selector-content-children">
                  <input className="App-select-file-button" type="submit" placeholder="SELECT A FILE" value="SELECT A FILE" onChange={this.props.onChange} />
                </div>
              </div>
                <input id="app-icon-input" className="App-selector" placeholder="Enter App Display Name" type="file" name="file" onChange={this.props.onChange}/>
          </div>
        </div>
      );
    }
  }

export default ImageInput