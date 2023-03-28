import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useBreakpointValue,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, _button, description, icon }: FeatureProps) => {
  return (
    <Stack align="center">
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text fontSize="small" color="gray">{description}</Text>
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
        {_button}
      </Button>
    </Stack>
  );
};

export default function WhyToUse() {
  return (
    <Box p={4}>
      <VStack
        align="center"
        spacing="24"
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <VStack spacing="8">
          <Text
            color="whiteAlpha.800"
            fontWeight="bold"
            lineHeight={1.2}
            align="center"
            fontFamily="sans-serif"
            textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          >
            Why to Use GYRO
          </Text>
          <Text
            color="whiteAlpha.800"
            fontWeight="normal"
            lineHeight={1.2}
            align="center"
            fontFamily="sans-serif"
            // textShadow="6px 3px 9px #6C0BA9"
            fontSize={useBreakpointValue({ base: "md", md: "md" })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing="20"
          boxSize="7xl"
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title="How it Benefits the Driver"
            description="Click below to Know more about it"
            _button="Read More"
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title="How it Benefits the Passenger"
            description="Click below to Know more about it"
            _button="Read More"
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title="Why to Use"
            description="Click below to Know more about it"
            _button="Read More"
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
