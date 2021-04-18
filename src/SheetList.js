import React from 'react';
import {Table, Button} from 'react-bootstrap';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class SheetList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            list: [],
        };
    }

    async componentDidMount() {
        const apiURL = "https://v1.nocodeapi.com/ananthu/google_sheets/tWRPdcHNVLkobjyX?tabId=Sheet1";

        await fetch(apiURL)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    list : result.data
                })
            },
             (error) => {this.setState({error})}
            )
    }

    render() {
        

        const {error, list} = this.state;
        // console.log(list);

        if(error){
            return(
                <div>error : {error.message}</div>
            ) 
        }else{
            return(
                <div>
                    <h2>testing the app</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>age</th>
                                <th>phone</th>
                                <th>email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {list.map(item => (
                            <tbody>
                            <tr key = {item.row_id  }>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td><Button variant='info' onClick={()=> this.props.editList(item.row_id)}>Edit</Button></td>
                            </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            )
        }

        
    }
}

export default SheetList;