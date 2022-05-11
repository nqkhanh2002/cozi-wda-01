import React, { useState } from 'react';
import {
    Box,
    Link,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    InputRightElement,
    InputGroup,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../actions/auth';
import '../App.css';
export default function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [showPassword, setShowPassword] = useState(false);
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box sx={styles.form} as='form' onSubmit={handleSubmit}>
            <FormControl isRequired>
                {!isSignIn && (
                    <>
                    <h3>Đăng ký</h3>
                    </>
                )}
                {isSignIn && (
                    <>
                    <h3>Đăng nhập</h3>
                    </>
                )}
                {!isSignIn && (
                    <>
                        <FormLabel htmlFor='name'>Tên người dùng</FormLabel>
                        <Input placeholder="admin" name='name' id='name' onChange={handleChange}/>
                    </>
                )}

                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input placeholder='email@address.com' name='email' id='email' type="email" onChange={handleChange} />
                <FormLabel htmlFor='password'>Mật khẩu</FormLabel>
                <InputGroup>
                <Input 
                isRequired
                placeholder='Mật khẩu' 
                name='password' 
                // type='password' 
                type={showPassword ? 'text' : 'password'}
                id='name' 
                onChange={handleChange} />
                <InputRightElement width="4.5rem">
                    <Button 
                    height="1.5rem" 
                    size="sm"
                    onClick={({ target }) => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Ẩn' : 'Hiện'}
                    </Button>
                </InputRightElement>
                </InputGroup>
                
                {!isSignIn && (
                    <>
                        <FormLabel htmlFor='confirmPassword'>Nhập lại mật khẩu</FormLabel>
                        <Input name='confirmPassword' type='password' id='confirmPassword' onChange={handleChange} />
                    </>
                )}
            </FormControl>
            <Button variant='filled' w='full' mt={8} colorScheme='blue' type='submit'>
                {isSignIn ? 'Đăng nhập' : 'Tạo tài khoản'}
            </Button>
            {isSignIn && (
                <Stack isInline justifyContent='space-between' alignItems='center'>
                <Box>
                    <Checkbox>Lưu tài khoản</Checkbox>
                </Box>
                </Stack>
            )}
            {isSignIn ? (
                <Text mt={4}>Chưa có tạo khoản? <Link color='blue' onClick={() => setIsSignIn(false)}>Tạo tài khoản</Link></Text>
            ) : (
                <Stack alignItems='center'>
                    <Text mt={4}>Đã có tạo khoản? <Link color='blue' onClick={() => setIsSignIn(true)}>Đăng nhập</Link></Text>
                </Stack>            
                )}
                {isSignIn && (
                    <>
                        <Stack alignItems='center'>
                            <Box mt={4}>
                                <Link to={'/forgot.password'} color='blue'>Quên mật khẩu</Link>
                            </Box>
                        </Stack>
                    </>
                )}
        </Box>
    )
}

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