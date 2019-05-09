import React from 'react';
import {Store} from '../Store';

class Signup extends React.Component{

    constructor(props){
        super();
        this.state = {
            loggedIn : props.global.loggedIn,
        }
    }

    render(){
        return(
            <div>
                <h1>Welcome to Advanced Steam Stats!</h1>
                <h2>Please Sign up with steam</h2>
                <button>Link Steam Account</button>
            </div>
        );
    }
}

export default Signup;