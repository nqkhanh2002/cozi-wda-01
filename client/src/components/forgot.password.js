import React, { useState } from 'react';
import {
    FormLabel,
    Input,
    FormControl,
    Box,
    Button,
    Center,
    Link,
    Text,
} from '@chakra-ui/react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../actions/auth';
export default function Forgot() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            dispatch(signIn(formData, navigate));
        } else {
            dispatch(signUp(formData, navigate));
        }
    
    };
    const styles = {
        form: {
            minW: 'sm',
            p: 16,
            border: '1px solid',
            borderColor: 'gray.200',
            mx: 'auto',
            label: {
                mt: 2,
            },
        },
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Box sx={styles.form} as='form' onSubmit={handleSubmit}>
            <FormControl isRequired>
            <h3>Quên mật khẩu</h3>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input placeholder='email@address.com' name='email' id='email' type="email" onChange={handleChange} />
            </FormControl>
            <Button variant='filled' w='full' mt={8} colorScheme='blue' type='submit'>
                Lấy lại mật khẩu
            </Button>
            <Center>
            <Text type='submit' mt={4}><Link color='blue' onClick={() => setIsSignIn(true)}>Đăng nhập</Link></Text>
            </Center>
            </Box>
        </>
    )}