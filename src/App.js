import React from 'react';
import './App.css';
import Form from './components/Form';
import PictureForm from './components/PictureForm';
import { validateFormFields } from './utils';

class App extends React.Component {
  constructor(props) {
      super(props);
       this.state = {
         bgcolor: '',
         file: undefined,
         category: undefined,
         name: undefined
        };
  }

  handleModifyColor = color => {
    this.setState({ bgcolor: color})
  }

  handleModifyFile = file => {
    this.setState({ file: file})
  }

  handleModifyCategory = category => {
    this.setState({ category: category})
  }

  handleModifyName = name => {
    this.setState({ name: name})
  }

  handleSubmit = (event) => {
    const isFormValid = validateFormFields(this.state)
    if (isFormValid) {
      alert('App criada com sucesso: ' + this.state.name);
    }
    else{
      alert('Todos os campos precisam ser preenchidos');
    }
    event.preventDefault();
  }

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-column-n App-bkg">
          <div className="flex-column-n App-logo">
            <Form
              color={this.state.bgcolor}
              file={this.state.file}
              category={this.state.category}
              name={this.state.name}
              onChangeColor={this.handleModifyColor}
              onChangeFile={this.handleModifyFile}
              onChangeCategory={this.handleModifyCategory}
              onChangeName={this.handleModifyName}
              onSubmit={this.handleSubmit} />
          </div>
          <div className="App-vertical-line" >
            <div className="verticalLine" />
          </div>
          <div className="App-card-form">
            <PictureForm
              color={this.state.bgcolor}
              file={this.state.file}
              name={this.state.name}
              category={this.state.category}
              onSubmit={this.handleSubmit} />
          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;
