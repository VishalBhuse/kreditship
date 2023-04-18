import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
// import MyForm from "../Home/Form";
// import Formniks from "../Home/Formnik";
import MultiForm from "../Home/MultiForm";

const About = ({ myDivRef }) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} w="85%" mx="auto" mt="2%">
        <Box textAlign={"justify"}>
          <Text
            color={"#2b335c"}
            fontWeight={"700"}
            fontSize={["2rem", "2rem", "2rem", "2rem", "4rem"]}
          >
            About Us
          </Text>
          <Text
            color={"#555873"}
            fontWeight={"400"}
            fontSize={"1rem"}
            lineHeight={1.2}
          >
            At kreditship, we're committed to making it easier for borrowers to
            find the right loan for their unique financial needs. Our loan
            connecting service matches you with trusted lenders who offer a
            variety of loan options, including personal loans, business loans,
            and more.
            <br />
            <br />
            We understand that searching for a loan can be stressful and
            time-consuming, which is why we've created a simple and convenient
            online application process. With just a few clicks, you can apply
            for a loan and we'll do the hard work of matching you with lenders
            who meet your needs.
            <br />
            <br />
            At kreditship, we prioritize your privacy and security, and we're
            committed to providing exceptional customer service. Best of all,
            our service is completely free to use with no hidden fees or
            charges.
            <br />
            <br />
            Ready to find the right loan for your needs? Apply now and let us
            help you connect with trusted lenders who can provide the funds you
            need.
          </Text>
        </Box>
        <Box
          bg="#fff"
          borderWidth="1px"
          rounded="lg"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          p={5}
          w="100%"
          m="10px auto"
          h="500px"
        >
          <MultiForm myDivRef={myDivRef} />
        </Box>
        {/* <Box px={[0, 0, 0, 5]}> */}
        {/* <Formniks/> */}
        {/* <MyForm inputRef={inputRef} /> */}
        {/* </Box> */}
      </SimpleGrid>
    </>
  );
};

export default About;
