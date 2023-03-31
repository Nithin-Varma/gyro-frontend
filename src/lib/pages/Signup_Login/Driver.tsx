import type { IconProps, useToast } from "@chakra-ui/react";
import {
  chakra,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { React } from "react";

import Header from "lib/layout/Header";

const testimonials = [
  {
    name: "Brandon P.",
    role: "Chief Marketing Officer",
    content:
      "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Krysta B.",
    role: "Entrepreneur",
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Darcy L.",
    role: "Movie star",
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Daniel T.",
    role: "Musician",
    content:
      "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow="lg"
      maxW="640px"
      direction={{ base: "row", md: "column" }}
      width="full"
      rounded="xl"
      p={10}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue("white", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        // backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex direction="row" textAlign="left" justifyContent="space-between">
        <chakra.p fontFamily="Inter" fontWeight="medium" fontSize="15px" pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily="Work Sans" fontWeight="bold" fontSize={14}>
          {name}
          <chakra.span fontFamily="Inter" fontWeight="medium" color="gray.500">
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height="80px"
        width="80px"
        alignSelf="center"
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function DriverSignup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Header />
      <Box w="100%" h="100%" bgGradient="linear(to-l,  gray.700, #4F0079)">
        <Box position="relative">
          <Container
            as={SimpleGrid}
            maxW="7xl"
            // columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
          >
            <Flex
              textAlign="center"
              pt={10}
              justifyContent="center"
              direction="column"
              width="full"
              overflow="hidden"
            >
              <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin="auto">
                <chakra.h3
                  fontFamily="Work Sans"
                  fontWeight="bold"
                  fontSize={20}
                  textTransform="uppercase"
                  color="white"
                >
                  People love us
                </chakra.h3>
                <chakra.h1
                  py={5}
                  fontSize={48}
                  fontFamily="Work Sans"
                  fontWeight="bold"
                  color={useColorModeValue("white", "white")}
                >
                  You're in good company
                </chakra.h1>
                <chakra.h2
                  margin="auto"
                  width="70%"
                  fontFamily="Inter"
                  fontWeight="medium"
                  color={useColorModeValue("white", "white")}
                >
                  See why over{" "}
                  <chakra.strong color={useColorModeValue("white", "white")}>
                    150,000+
                  </chakra.strong>{" "}
                  influencers use EEZY to manage their social media content!
                </chakra.h2>
              </Box>
              <SimpleGrid
                columns={{ base: 1, xl: 2 }}
                spacing="20"
                mt={16}
                mb={16}
                mx="auto"
              >
                {testimonials.map((cardInfo, index) => (
                  <TestimonialCard {...cardInfo} index={index} />
                ))}
              </SimpleGrid>
              <Box>
                <Icon
                  viewBox="0 0 40 35"
                  mt={14}
                  boxSize={10}
                  color="purple.400"
                >
                  <path
                    fill="currentColor"
                    d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                  />
                </Icon>
              </Box>
            </Flex>
            {/* <Stack
              bg="gray.50"
              rounded="xl"
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Stack spacing={4}>
                <Heading
                  color="gray.800"
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Join our team
                  <Text
                    as="span"
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color="gray.500" fontSize={{ base: "sm", sm: "md" }}>
                  We’re looking for amazing engineers just like you! Become a
                  part of our rockstar engineering team and skyrocket your
                  career!
                </Text>
              </Stack>
              <Box as="form" mt={10}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Firstname"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    placeholder="firstname@lastname.io"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    placeholder="+1 (___) __-___-___"
                    bg="gray.100"
                    border={0}
                    color="gray.500"
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Button fontFamily="heading" bg="gray.200" color="gray.800">
                    Upload CV
                  </Button>
                </Stack>
                <Button
                  fontFamily="heading"
                  mt={8}
                  w="full"
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                >
                  Submit
                </Button>
              </Box>
              form
            </Stack> */}
          </Container>
          {/* <Blur
      position="absolute"
      top={-10}
      left={-10}
      style={{ filter: "blur(70px)" }}
    /> */}
        </Box>
      </Box>
    </>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* <circle fill="#6C0BA9" />
      <circle cx="244" cy="106" r="139" fill="#6C0BA9" />
      <circle cy="291" r="139" fill="#6C0BA9" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#6C0BA9" />
      <circle cx="190" cy="317.5" r="101.5" fill="#6C0BA9" />
      <circle cx="90" cy="458.5" r="101.5" fill="#6C0BA9" />
      <circle cx="90" cy="-0.5" r="101.5" fill="#6C0BA9" /> */}
    </Icon>
  );
};