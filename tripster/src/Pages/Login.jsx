import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link as LinkPage } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom';
import { Context } from '../Context/ContextProvider';

export default function Login() {

    const [cred, setCred] = useState({});
    const { isauth, setIsAuth } = useContext(Context);
    const navigateTo = useNavigate();

    const postDetails = async () => {
        try {
            const data = await fetch(`https://reqres.in/api/login`, {
                method: 'POST',
                body: JSON.stringify(cred),
                headers: {
                    'Content-type': 'application/json'
                },
            });
            const res = await data.json();
            // console.log(res.token);
            if (res.token) {
                setIsAuth(true)
                navigateTo('/');
            }
            // console.log(res);
        } catch (error) {
            console.log(error);
            setIsAuth(false);
        }
    }

    if (isauth) {
        return <Navigate to='/' />
    }

    const HandleInput = (e) => {
        const { type, value } = e.target;
        setCred({
            ...cred,
            [type]: value
        })
    }
    console.log(cred);

    const ClickToLogin = () => {
        postDetails();
    }

    return (
        < Box
            // backgroundImage="url('https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=600')"
            backgroundImage="url('https://cdn.pixabay.com/photo/2022/11/14/10/49/mountains-7591326_960_720.jpg')"
            backgroundRepeat='no-repeat'
            w='100%'
            h='100%'
            objectFit='cover'
            backgroundSize='cover'
        >
            <Flex
                // bg='black'
                minH={'100vh'}
                align={'center'}
                justify={'center'}

            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Login for great deals </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        // bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={HandleInput} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={HandleInput} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    onClick={ClickToLogin}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                            <Text>Don't have an account ?
                                <LinkPage to='/signup'>
                                    <Link color={'blue.400'}> Sign Up</Link>
                                </LinkPage>
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Box >
    );
}