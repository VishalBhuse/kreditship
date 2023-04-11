import {
  Box,
  Button,
  Hide,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Img/logo.svg";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SimpleGrid
        display={"flex"}
        justifyContent={"space-between"}
        spacing={2}
        w="80%"
        mx="auto"
        mt="3"
        pb="10"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Box w={["100%", "100%", "100%", "100%", "65%"]} textAlign={"justify"}>
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
            At Loanbridge Pro, we're committed to making it easier for borrowers
            to find the right loan for their unique financial needs. Our loan
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
            At Loanbridge Pro, we prioritize your privacy and security, and
            we're committed to providing exceptional customer service. Best of
            all, our service is completely free to use with no hidden fees or
            charges.
            <br />
            <br />
            Ready to find the right loan for your needs? Apply now and let us
            help you connect with trusted lenders who can provide the funds you
            need.
          </Text>
        </Box>
        <Box
          width={["100%", "70%", "50%", "50%", "30%"]}
          mx={["auto", "auto", "auto", "0", "0"]}
          borderRadius={15}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          py={7}
          px={6}
          height={"400px"}
        >
          <Text
            textAlign={"center"}
            color={"#2b335c"}
            marginBottom={"24px"}
            fontSize={"24px"}
            fontWeight={600}
          >
            Start Your Speedy Form!
          </Text>
          <Box>
            <Select
              icon={<MdArrowDropDown />}
              borderColor="#555873"
              placeholder="Select Loan Option"
              h={"54px"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              color={"#555873"}
              borderRadius={"4px"}
              _hover={{ color: "#555873" }}
              focusBorderColor="black"
            >
              <option value="$1000">$1000</option>
              <option value="$2000">$2000</option>
              <option value="$3000">$3000</option>
              <option value="$4000">$4000</option>
              <option value="$5000">$5000</option>
            </Select>
          </Box>
          <Box mt={3}>
            <Input
              type="email"
              borderColor="#555873"
              h={"54px"}
              fontSize={["14px", "14px", "14px", "14px", "16px"]}
              color={"#555873"}
              borderRadius={"4px"}
              _hover={{ color: "#555873" }}
              focusBorderColor="black"
              placeholder="Email"
            />
          </Box>
          <Box mt={3}>
            <Button
              bg={"#1d36a0"}
              w={"full"}
              h={"54px"}
              fontWeight="700"
              fontSize="1rem"
              color=" #fff"
              textAlign="center"
              _hover={{ bg: "#1d36a0" }}
            >
              Get Started{" "}
              <BsArrowRight style={{ marginLeft: "25px", color: "#white" }} />
            </Button>
          </Box>
          <Box mt={2}>
            <Text color="#555873" fontSize={"12px"}>
              By clicking [Get Started], you agree that this acts as your
              digital signature, that you accept the{" "}
              <Link style={{ color: "blue" }}>Terms of Use</Link>, and{" "}
              <Link style={{ color: "blue" }}>Privacy Policy</Link>.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default About;
