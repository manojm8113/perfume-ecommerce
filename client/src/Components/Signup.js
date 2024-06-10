import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { signData } from './Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import signupImage from './Assets/images/navimg.jpg';
const Signup = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Pincode, setPincode] = useState('');
  const [Password, setPassword] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validatePincode = (pincode) => {
    return /^\d{6}$/.test(pincode);
  };

  const submit = async () => {
    if (!Username || !Email || !Phone || !Address || !Pincode || !Password) {
      toast.error('Please fill all fields!');
      return;
    }

    if (!validateEmail(Email)) {
      toast.error('Please enter a valid email!');
      return;
    }

    if (!validatePhone(Phone)) {
      toast.error('Please enter a valid phone number!');
      return;
    }

    if (!validatePincode(Pincode)) {
      toast.error('Please enter a valid pincode!');
      return;
    }

    try {
      await signData({ Username, Email, Phone, Address, Pincode, Password });
      toast.success('Successfully signed up!');
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (err) {
      console.error("Sign up error:", err.message);
      if (err.message === 'Email already registered') {
        toast.error('Email already registered. Please use a different email.');
      } else {
        toast.error('Failed to sign up. Please try again!');
      }
    }
  };

  return (
    <div className="signup-container">
      <MDBContainer className='subbackgrund'>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol md='6' lg='7' className='d-none d-md-block' id='backgroundimg'>
            <MDBCardImage src={signupImage} alt='Sign up image' className='rounded-end' fluid />
          </MDBCol>
          <MDBCol md='6' lg='5'>
            <MDBCard className='my-4 signup-card'>
              <MDBCardBody className='text-black d-flex flex-column justify-content-center signup-card-body'>
                <h3 className='mb-5 text-uppercase fw-bold'>Fragrances</h3>
                <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form1' type='text' onChange={(e) => setUsername(e.target.value)} required />
                <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form2' type='email' onChange={(e) => setEmail(e.target.value)} required />
                <MDBInput wrapperClass='mb-4' label='Phone' size='lg' id='form3' type='text' onChange={(e) => setPhone(e.target.value)} required />
                <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form4' type='text' onChange={(e) => setAddress(e.target.value)} required />
                <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form5' type='text' onChange={(e) => setPincode(e.target.value)} required />
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form6' type='password' onChange={(e) => setPassword(e.target.value)} required />
                <div className='d-flex pt-3'>
                  <MDBBtn className='ms-5' color='dark' size='lg' onClick={submit}>
                    SignUp
                  </MDBBtn>
                </div>
                <p className="login-link">
                  Already have an account? <Link to={'/'} className="login-link-text">Login here</Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer />
    </div>
  );
};
export default Signup;
