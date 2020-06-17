import React from 'react';
import axios from 'axios';
 
export default class MLoperations extends React.Component{
    state = {
        operations:[],
    };

    componentDidMount(){
    axios.get('/Compas/Ml')
    .then(res => {
        console.log(res);
        this.setState({operations: res.data});
    });
    }

    render(){
        return(
            <ul>
                {this.state.operations.map(model => <li>{model.model}</li>)}
            </ul>
        )
    }
}

