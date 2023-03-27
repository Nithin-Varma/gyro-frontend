import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';


import { useNavigate } from "react-router-dom";

export default function LandingView() {
  // const router = useRouter();
  const navigate = useNavigate();
  const tologinpage = () => navigate('/login')
  return (
    <Flex
      // w={'100vh'}
      // h={'100vh'}
      // height={{base:'50vh', md: '100vh'}}
      backgroundImage={
        'url(/assets/car.png)'
      }
      
      backgroundSize={'100%'}
      height={{base:'80vh', md: '80vh'}}
      backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        >
      
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={useBreakpointValue({base: '2xl', md: '4xl'})} align={'left'} spacing={6}  marginTop={'48'}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            align={'center'}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Drive With GYRO
          </Text>
          <Stack  align={'center'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              
              alignContent={'center'}
              alignSelf={'center'}
              _hover={{ bg: 'blue.500' }}
              // onClick = {tologinpage}
              >
              Create Identity
            </Button>
          </Stack>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

        </Stack>
      </VStack>
    </Flex>
  );
}