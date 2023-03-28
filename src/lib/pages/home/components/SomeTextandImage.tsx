import { Grid, Heading, Text, VStack, Image } from "@chakra-ui/react";

const SomeTextandImage = () => {
  return (
    <VStack>
      <VStack>
        <Heading>First On-Chain Ride sharing Software.</Heading>
        <Text>
          ​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </VStack>
      <Image 
      src="assets/pic1.jpg"
      />
    </VStack>
  );
};

export default SomeTextandImage;
