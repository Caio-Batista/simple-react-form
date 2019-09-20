import React from 'react'
import { validateFormFields } from '../utils';
import Selector from './Selector';
import BackgroundInput from './BackgroundInput';
import ImageInput from './ImageInput';
import NameInput from './NameInput';

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
      const url = event.target.files && URL.createObjectURL(event.target.files[0])
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
          <NameInput
            name={this.props.name}
            onChange={this.handleChangeName}
          />
          <ImageInput
            image={image}
            onChange={this.handleFileChange}
          />
          <BackgroundInput
            color={this.props.color}
            onChange={this.handleChangeColor}
          />
          <Selector
            category={this.props.category}
            onChange={this.handleCategoryChange}
          />
        </form>
      );
    }
  }

export default Form