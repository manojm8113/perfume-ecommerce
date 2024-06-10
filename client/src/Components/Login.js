import React, { useState } from 'react';
import { LoginDatas } from './Api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const display = async () => {
    if (Password !== ConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await LoginDatas({ Email, Password }, dispatch);

      if (response.status === 200) {
        toast.success('Login successful');
      } else {
        const result = await response.json();
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <MDBContainer className='bg-dark'>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <ToastContainer />
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign In</p>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope me-3' size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='lock me-3' size='lg' />
                  <MDBInput label='Password' id='form3' type='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='key me-3' size='lg' />
                  <MDBInput label='Repeat your password' id='form4' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <MDBBtn className='mb-4 ' size='lg' color='dark' onClick={display}>
                  Login
                </MDBBtn>
                <p className='text-center'>
                  You have not signup? <Link to={'/Signup'} className='fw-bold'>Signup</Link>
                </p>
                <h5 className='text-center'>or</h5>
                <p className='text-center'>
                  You are <Link to={'/Adminlogin'} className='fw-bold'><span>Admin</span></Link> or <Link to={'/Companylogin'} className='fw-bold'><span>Company</span></Link>
                </p>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};
export default Login;
