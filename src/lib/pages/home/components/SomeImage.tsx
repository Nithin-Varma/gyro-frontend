import { Flex, Heading, Image, useBreakpointValue, VStack } from "@chakra-ui/react";

const ICON_SIZE = 22;

const SomeImage = () => {
  return (
    <VStack marginY={8} justifyContent="center" alignItems="center">
      <VStack marginY={8} 
              justifyContent="center" 
              alignItems="center"
              px={useBreakpointValue({ base: 4, md: 8 })}
              >
      <Heading>
        Why to choose "GYRO"
      </Heading>
      <h1>
        This is an open source cab riding software.This is an open source cab riding software.
        This is an open source cab riding software.
        This is an open source cab riding software.
      </h1>
      </VStack>


    <Flex marginY={8} justifyContent="center" alignItems="center" gridGap={2}>
      <Image
        src="/assets/vite-logo.svg"
        title="vite"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/react-icon.svg"
        title="react"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/chakra-ui-logomark-colored.svg"
        title="Chakra UI"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
      <Image
        src="/assets/ts-logo-512.svg"
        title="TypeScript"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
    </Flex>
    </VStack>
  );
};

export default SomeImage;
