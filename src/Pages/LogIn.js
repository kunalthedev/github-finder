import React, {useState, useContext} from 'react'
import {Container, Row, Col, Card, Form, CardHeader, CardBody, FormGroup, Label, Input, CardFooter, Button} from 'reactstrap'
import { toast} from 'react-toastify'
import {Redirect} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'
import firebase from 'firebase/app'
require('firebase/auth')
const SignUp = () => {
    const context = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            res => {
                console.log(res);
                context.setUser({
                    email: res.user.email, uid: res.user.uid
                })
            }
        )
        .catch((err) =>{console.log(err)
        toast(err.message, {type: "error"})
        }
        
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup();

    }
    if(context.user?.uid){
       return <Redirect to="/" />
    }

    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleSubmit} >
							<CardHeader className='Form font-weight-bold'>Log In here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Log In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default SignUp
