import React from 'react'
import { validateFormFields } from '../utils';
import Selector from './Selector';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {image: undefined};
  
      this.handleFileChange = this.handleFileChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeColor = this.handleChangeColor.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event) {
      if (event.target.value.length < 24) {
        this.props.onChangeName(event.target.value)
      }
    }

    handleCategoryChange(event) {
      this.props.onChangeCategory(event.target.value)
    }

    handleFileChange(event) {
      const url = URL.createObjectURL(event.target.files[0])
      this.props.onChangeFile(url)
      this.setState({ image: event.target.value });
    }

    handleChangeColor(event) {
      if (event.target.value.length <= 6) {
        this.props.onChangeColor(event.target.value)
      }
    }
  
    handleSubmit(event) {
      const isFormValid = validateFormFields(this.props)
      if (isFormValid) {
        alert('App criada com sucesso: ' + this.state.value);
        event.preventDefault();
      }
      else{
        alert('Todos os campos precisam ser preenchidos');
        event.preventDefault();
      }
    }

  
    render() {

      const { image } = this.state
      return (
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label className="App-main-title">
            Create Your App
          </label>
          <label>
            APP NAME
          </label>
          <div className="App-input">
            <input id="app-name-input" type="text" placeholder="Enter App Display Name" value={this.props.name} onChange={this.handleChangeName} />
            </div>
          <label>
            APP ICON
            </label>
            <div className="App-selector-container">
              <div className="App-selector-content">
                <div className="App-selector-content-children-text">{ image ? image.substr(image.length - 10) : 'Drag an image here to upload'}</div>
                <div className="App-selector-content-children">
                  <input className="App-select-file-button" type="submit" placeholder="SELECT A FILE" value="SELECT A FILE" onChange={this.handleFileChange} />
                </div>
              </div>
                <input id="app-icon-input" className="App-selector" placeholder="Enter App Display Name" type="file" name="file" onChange={this.handleFileChange}/>
          </div>
          <label>
            ICON'S BACKGROUND COLOR
            </label>
            <div className="App-input">
            <input id="app-color-input" type="text" placeholder="Pick a color" value={this.props.color} onChange={this.handleChangeColor} />
            <span style={{backgroundColor: this.props.color ? '#' + this.props.color : '#191919', color: this.props.color.includes('FF') ? '#191919' : '#FFFFFF'}}>{this.props.color ? '#' + this.props.color : '#191919' }</span>
          </div>
          <Selector
            category={this.props.category}
            onChange={this.handleCategoryChange}
          />
        </form>
      );
    }
  }

export default Form