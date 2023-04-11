import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Img/logo.svg";
import MultiForm from "./MultiForm";

const Banner = () => {
  return (
    <Box w="100%" mx="auto">
      <Box display={["block", "block", "none"]}>
        <Box w="100%" mx="auto" display={"grid"} placeItems="center" h="3rem">
          <Image src={logo} alt="logo" />
        </Box>
      </Box>

      <Box w="85%" mx="auto" my="2">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={["1rem", "1rem", "4rem"]}>
          <Box>
            <VStack
              spacing={"0px"}
              alignItems={"flex-start"}
              justifyContent="center"
              h="100%"
              px="5"
            >
              <Text fontSize=".875rem" fontWeight="500">
                Connect with a Helpful Lender
              </Text>
              <Heading fontSize={["1.75rem", "1.75rem", "4rem"]} as="h1">
                Get a Loan Today for a Better Tomorrow
              </Heading>
            </VStack>
          </Box>
          <Box>
            <MultiForm />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Banner;
