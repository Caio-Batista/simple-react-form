import React from 'react'

class PictureForm extends React.Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleSubmit = event => {
      this.props.onSubmit(event)
      event.preventDefault();
    }

    render() {
      return (
          <form className="App-card" onSubmit={this.handleSubmit}>
            <label className="flex justify-start" > App's card preview</label>
            <div className="App-profile-card">
              <div className="App-image-container" style={{ backgroundColor : this.props.color ? `#${this.props.color}` : "black" }}>
                <div className="">
                  <img src={this.props.file ? this.props.file : "http://tachyons.io/img/logo.jpg"} className="App-image" alt="avatar"/>
                </div>
              </div>
              <div className="App-picture-form-text">
                  <label>{this.props.name ? this.props.name : 'App name title'}</label>
                  <p>{this.props.category ? this.props.category : 'App category'}</p>
                  <p>New app</p>
              </div>
            </div>
            <input className="App-save-button" type="submit" value="SAVE APP" />
          </form>
      )
    }
  }
  // "http://www.iworld.bh/image/cache/placeholder-350x400.png"

export default PictureForm