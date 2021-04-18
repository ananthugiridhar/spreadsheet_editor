import React, { Component } from 'react';
import {Container, Button, Alert} from 'react-bootstrap';
import SheetList from './SheetList';
import './App.css';
import FormComponent from './FormComponent'





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddproduct : false,
      error : null,
      response : {},
      item : {},
      isEdit : false,
    }

  }
  sample(){
    this.state.isEdit = false;
  }

  onFormSubmit(data){
      console.log("submit", data);
      let apiURL = "https://v1.nocodeapi.com/ananthu/google_sheets/tWRPdcHNVLkobjyX?tabId=Sheet1";

      const myHeaders = new Headers;
      myHeaders.append('Content-Type', 'application/json'); 

      const options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers : { 'Content-Type' : "application/json"},
      }
      
     
      fetch(apiURL, options).then(res => res.json())
      .then((result) => {
        this.setState({
          response : result,
          isEdit : false,
        })
        
      },
      (error) => {
        console.log('error in submiting');
        this.setState({ error })
      }
      )
  }

  editList =id => {

    const apiURL = "https://v1.nocodeapi.com/ananthu/google_sheets/tWRPdcHNVLkobjyX?tabId=Sheet1";
    const formData = new FormData();
    formData.append('row_id', id);

    const options = {
      method : 'GET',
     // body : formData, 
      params: {"row_id" : id}  ,
      headers : { 'Content-Type' : "application/json"},
       
    }

    fetch(apiURL, options).then(res => res.json())
      .then((result) => {
        var temp = 0;
          for(let i=0;i<result.data.length;i++){
            if(result.data[i].row_id == id){temp =i}
          }
          this.setState({
            item : result.data[temp],
            isAddproduct : true,
            isEdit : true,
          })
      },
      (error) => {
        console.log("error");
        this.setState({ error })
      }
      )
  }


  render() {

    let ListForm;
    if(this.state.isEdit){
        ListForm = <FormComponent onFormSubmit={this.onFormSubmit} product={this.state.item}/>;
    }
    return(
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>sample test</h1>
        </Container>
        {!this.state.isEdit && <Button variant="primary">Add</Button>}
        {this.state.response.status === 'success' && <div> <br /> <Alert variant='info'>{this.state.response}</Alert></div>}
        {!this.state.isEdit && <SheetList editList = {this.editList}/>}
        {this.state.isEdit && <FormComponent onFormSubmit={this.onFormSubmit} item={this.state.item}/>}
      </div>
    )
  }
}

export default App;
