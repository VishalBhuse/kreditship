import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import MyForm from "./Form";
import MultiForm from "./MultiForm";

const Banner = ({ myDivRef }) => {
  return (
    <Box
      w="100%"
      mx="auto"
      bg="url('./img/banner.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="#fff"
      h="100%"
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
              Our streamlined process makes it easy for you.
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
            p={5}
            w="100%"
            m="10px auto"
            h="530px"
          >
            {/* <MyForm inputRef={inputRef}/> */}
            <MultiForm myDivRef={myDivRef}/>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Banner;
