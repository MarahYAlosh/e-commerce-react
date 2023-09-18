import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {registerSchema} from '../../utill/validationSchema.js'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/registerSlice';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const dispatch =useDispatch()
  const userName = useSelector((state)=>state.register.users)
  // console.log(userName)
  const navigate = useNavigate()
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConf: '',
    },
    validationSchema : registerSchema,
    validateOnBlur: true,
    // validateOnChange : false,

    onSubmit: (values,formikHelper) => {
      const emails =userName.map((el)=>el.email)
      // console.log(emails)
      
      //  console.log(values)
      if(emails.find((email)=>email.includes(values.email))){
        formikHelper.setFieldError('email' , 'email already exist')
        
        // console.log("email already exist")
      }
      else{
        dispatch(login(values))
        navigate('../login')
        alert(JSON.stringify(values, null, 2));
      }
    },
  });


  return (
    <div>
      <Container style={{marginTop: '0'}}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4" style={{height : 'auto'}}>
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    register
                  </h2>
                  <div className="mb-3">
                    <Form style={{transform: 'scale(1.1)'}} onSubmit={formik.handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control type="text"
                        isInvalid={formik.touched.name &&  formik.errors.name}
                         onBlur={formik.handleBlur} value={formik.values.name}
                         name='name'    onChange={formik.handleChange}
                         placeholder="Enter Name" />
                        <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>
                     
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control isInvalid={formik.touched.email &&  formik.errors.email} 
                        onBlur={formik.handleBlur} value={formik.values.email} name='email'
                         type="email" placeholder="Enter email"

                          onChange={formik.handleChange} />
                        <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
                     
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control isInvalid={formik.touched.password && formik.errors.password} 
                        onBlur={formik.handleBlur} value={formik.values.password} name='password'
                         type="password"
                         placeholder="Password" onChange={formik.handleChange} />
                      <Form.Control.Feedback type='invalid'>{formik.errors.password}</Form.Control.Feedback>
                     
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control isInvalid={formik.touched.passwordConf && formik.errors.passwordConf}
                         onBlur={formik.handleBlur}
                          value={formik.values.passwordConf}

                          name='passwordConf' type="password"
                         placeholder="re-type Password" onChange={formik.handleChange} />
                       <Form.Control.Feedback type='invalid'>{formik.errors.passwordConf}</Form.Control.Feedback>
                     
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
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
