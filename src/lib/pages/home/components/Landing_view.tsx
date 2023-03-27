import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function LandingView() {
  return (
    <Flex
      // w={'100vh'}
      // h={'100vh'}
      // height={{base:'50vh', md: '100vh'}}
      backgroundImage="url(/assets/car.png)"
      backgroundSize="100%"
      height={{ base: "80vh", md: "80vh" }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack
          maxW={useBreakpointValue({ base: "2xl", md: "4xl" })}
          align="left"
          spacing={4}
          marginTop="80"
        >
          <Text
            color="whiteAlpha.800"
            fontWeight="extrabold"
            lineHeight={2.2}
            align="center"
            fontFamily="sans-serif"
            textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            Drive With GYRO
          </Text>
          <Stack align="center">
            <Button
              bg="#51087E"
              rounded="full"
              border="2px"
              borderColor="#6C0BA9"
              color="white"
              alignContent="center"
              alignSelf="center"
              fontFamily="sans-serif"
              textShadow="1px 1px 1px black"
              _hover={{ bg: "black", borderColor: "#6C0BA9" }}
            >
              Connect to Internet Computer
            </Button>
          </Stack>
          {/* <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text> */}
        </Stack>
      </VStack>
    </Flex>
  );
}
