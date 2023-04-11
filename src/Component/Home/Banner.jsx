import {
  Box,
  Button,
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
import banner from "../../Img/banner.svg";
import SingleForm from "./SingleForm";

const Banner = () => {
  return (
    <Box
      w="100%"
      mx="auto"
      bg="url('./img/banner.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="#fff"
    >
      <Box w="85%" mx="auto" mb="2">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={["1rem", "1rem", "4rem"]}>
          <Box>
            <VStack
              spacing={"0px"}
              alignItems={"flex-start"}
              justifyContent="center"
              h="100%"
              px="5"
            >
              <Text fontSize=".875rem" fontWeight="500" mt='2'>
                Connect with a Helpful Lender
              </Text>
              <Heading fontSize={["1.75rem", "1.75rem", "4rem"]} as="h1">
                Get Matched with Your Ideal Loan Lender in next 48 hrs{" "}
              </Heading>
            </VStack>
          </Box>
          <Box>
            <SingleForm />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Banner;
