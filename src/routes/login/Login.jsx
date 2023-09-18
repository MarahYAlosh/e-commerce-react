import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import { login } from '../../store/registerSlice'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import {loginSchema} from '../../utill/validationSchema'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'



export const Login = () => {
  const navigate = useNavigate()
  const userName = useSelector((state)=>state.register.users)
  const location =useLocation()
  const redirectPath = location.state?.path || '../profile'
  const validationSubmit=(emailInput,passwordInput,formikHelper)=>{
    userName.map((el)=>{
      // console.log(el.password)
      if(el.password===passwordInput &&  el.email===emailInput ){
        console.log('register')
        navigate(redirectPath, {replace : true})
      }
      else{
        formikHelper.setFieldError('password' , 'email or password is wrong')
        console.log('no register')
        formikHelper.setFieldError('password' , 'email or password is wrong')
        alert(JSON.stringify(emailInput, null, 2));
      }
    })
  }

  const emails =['rami.alassad7@live.com','marah.alosh987@gmail.com' ,'rahaf.alosh7@gmail.com']
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema : loginSchema,
    validateOnBlur: true,
    // validateOnChange : false,

    onSubmit: (values,formikHelper) => {
      validationSubmit(values.email,values.password,formikHelper)
     

      // console.log("email already exist")
      // if(emails.find((email)=>email.includes(values.email))){
      //   formikHelper.setFieldError('email' , 'email already exist')
      //   // console.log("email already exist")
      // }
      // else{
      //   alert(JSON.stringify(values, null, 2));
      // }
    },
  });
    //  useEffect(()=>{
    //   console.log(formik.touched)
    //   // if(!formik.values.email) {
    //   //   formik.setFieldValue("email" , "rami.alassad7@live.com")
    //   // }
    
    //  },[formik])
const emailHandler=(e)=>{
  console.log(e.target.value)
  formik.handleChange(e)
}

  return (
   
   
    <div>
     <Container style={{marginTop: '0'}}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    login
                  </h2>
                  <div className="mb-3">
                    <Form style={{transform: 'scale(1.1)'}} onSubmit={formik.handleSubmit}>
                    

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control isInvalid={formik.touched.email &&  formik.errors.email} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="email" placeholder="Enter email"  onChange={emailHandler}  />
                        <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
                      </Form.Group>
                     {/* <div>{formik.touched.email &&  formik.errors.email ? formik.errors.email : null}</div> */}

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control isInvalid={formik.touched.password && formik.errors.password} onBlur={formik.handleBlur} value={formik.values.password} name='password' type="password" placeholder="Password" onChange={formik.handleChange} />
                        <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
                      </Form.Group>
                      {/* <div>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</div> */}
                
                      <div className="d-grid">
                         <Button variant="primary" type="submit">
                         Submit
                        </Button>
                        <Link to='../register'>        <Button variant="primary" type="submit">
                         Register
                        </Button></Link>
                    
                        {/* <Link to='../register'><Button variant="primary" type="submit">
                          SignIn
                        </Button></Link> */}
                        
                      </div>
                      {/* <div className="d-grid">
                        <Button variant="primary" type="submit">
                          SignIn
                        </Button>
                      </div> */}
                    </Form>
                    
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  
   
  )
}


/*


 <div className='main-login'>
    <div className="main_div">
    <div className="title">Login Form</div>
   
    <form action="#" onSubmit={formik.handleSubmit}>
      <div className="input_box">
        <input isInvalid={formik.touched.email &&  formik.errors.email} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="email" placeholder="Enter email"  onChange={emailHandler}/>
        <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
        <div className="icon">
        <i class="gg-user"></i>
        </div>
      </div>
      <div className="input_box">
        <input isInvalid={formik.touched.password && formik.errors.password} onBlur={formik.handleBlur} value={formik.values.password} name='password' type="password" placeholder="Password" onChange={formik.handleChange} />
        <div className="icon">
        <i class="gg-lock"></i>
        </div>
        <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
      </div>
     
      <div className="input_box button">
        <input type="submit" defaultValue="Login" />
      </div>
      <div className="sign_up">
        Not a member? <a href="#">Signup now</a>
      </div>
    </form>
  </div>
  </div>


*/
