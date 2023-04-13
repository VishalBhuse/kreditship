import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import MyForm from "./Form";

const Banner = ({inputRef}) => {
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
              <Text fontSize=".875rem" fontWeight="500" mt="2">
                Connect with a Helpful Lender
              </Text>
              <Heading fontSize={["1.75rem", "1.75rem", "4rem"]} as="h1">
                Get Matched with Your Ideal Loan Lender in next 48 hrs{" "}
              </Heading>
            </VStack>
          </Box>
          <Box
            bg="#fff"
            borderWidth="1px"
            rounded="lg"
            shadow="1px 1px 3px rgba(0,0,0,0.3)"
            maxWidth={800}
            p={6}
            m="10px auto"
            as="form"
          >
            <MyForm inputRef={inputRef}/>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Banner;
