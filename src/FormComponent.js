import React from 'react';
import {Row, Form, Col, Button} from 'react-bootstrap';

class FormComponent extends React.Component { 
    constructor(props) {
        super(props);
        // console.log("sdas",props.item);

        this.initialState = {
            id : '',
            name : '',
            age : '',
            phone : '',
            email : '',
        }
        
        if(props.item){
            this.state = props.item;
        }else{
            this.state = this.initialState
        }
        
        //console.log("sdas",props.item);
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //console.log('change');
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value,
        })
    }

    handleSubmit(event) {
        console.log('sub');
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }




    render() {
        return(
            <div>
                <h2>Edit product</h2>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='id'>
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='id'
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    placeholder='Id'/>
                            </Form.Group>
                            <Form.Group controlId='name'>
                                <Form.Label>name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder='Name'/>
                            </Form.Group>
                            <Form.Group controlId='age'>
                                <Form.Label>age</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='age'
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    placeholder='Age'/>
                            </Form.Group>
                            <Form.Group controlId='phone'>
                                <Form.Label>phone</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='phone'
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    placeholder='Phone No'/>
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Label>email</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder='Email'/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type='hidden' name='id' value={this.state.row_id}/>
                                <Button variant='success' type='submit'>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
        
    }
}



export default FormComponent;