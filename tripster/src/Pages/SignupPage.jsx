import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as LinkPage } from 'react-router-dom'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (

        <Box
            backgroundImage="url('https://t4.ftcdn.net/jpg/02/44/61/09/240_F_244610919_QsikXnS8sUhOeHqGbbifNx1pzjikzgLG.jpg')"
            backgroundRepeat='no-repeat'
            w='100%'
            h='100%'
            objectFit='cover'
            backgroundSize='cover'
        >

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                opacity='transparent'

            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} fontWeight='900'>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        // bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel fontWeight='700' fontSize='18px'>First Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel fontWeight='700' fontSize='18px'>Last Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel fontWeight='700' fontSize='18px'>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel fontWeight='700' fontSize='18px'>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'} fontSize='18px'>
                                    Already a user?
                                    <LinkPage to="/login">
                                        <Text color={'blue.400'} fontSize='18px'> Login</Text>
                                    </LinkPage>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
}