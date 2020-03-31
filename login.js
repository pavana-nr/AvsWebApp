import React, {Component} from 'react';
import './login.css';
import { MDBInput,MDBBtn  } from "mdbreact";
import firebase from 'firebase';



class Login extends Component{

    login(params) {
        const { email, password } = params
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => ({ success: true, data: user }))
        .catch(({ message }) => ({ success: false, error: message }))
      }

    render(){
        return(
            <div className="container-fluid">           
             <div className="row align-items-center loginPage">
                <div className="col-md-7 col-sm-none backImg">
                    <div className="">
                        
                    </div>
                </div>
                <div className="col-md-5 col-12">
                    <div className="col-md-10 offset-md-1">
                        <MDBInput label="Email" />
                        <MDBInput type='password' label="Password" />
                        <MDBBtn color="primary" onClick="login()" className="m-0 w-100">Submit</MDBBtn>
                        <div className="text-right">
                        <a className="font12 text-dark  pt-2" href="javascript:void(0);">Forgot Password?</a>
                        </div>
                        <div className="text-center"> Don't have an account? <a className="font12 text-dark pt-2" href="javascript:void(0);">SignUp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;