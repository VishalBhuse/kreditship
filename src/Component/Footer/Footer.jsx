import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import back from "../../Img/back.svg";
import man from "../../Img/man.svg";

const Footer = ({ handleGetLoanClick }) => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacing={5}
        w="85%"
        mx="auto"
        mt="10"
        pb="10"
      >
        <Box>
          <Text color="#2b335c" fontWeight={"700"} fontSize="1.25rem">
            Why Choose Us?
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#002257" fontSize={"15px"}>
          <Text>
            At our loan connecting service, we understand that every borrower is
            unique, with their own specific financial needs and goals. That's
            why we work with you to find the loan solution that's right for you,
            no matter what your circumstances may be. Here are just a few
            reasons why you should choose our service.
            <br />
            <br />
          </Text>
          <UnorderedList>
            <ListItem>
              Fast and Easy Application Process: Our application process is
              designed to be as quick and hassle-free as possible, so you can
              get the funds you need without a lot of stress and paperwork.
              Simply fill out our online application form, and we'll take care
              of the rest.
            </ListItem>
            <ListItem>
              Tailored Loan Solutions: We know that every borrower's situation
              is different, which is why we work with a network of trusted
              lenders to find loan options that meet your specific needs.
              Whether you need a loan for unexpected expenses, debt
              consolidation, or something else, we've got you covered.{" "}
            </ListItem>
            <ListItem>
              Reliable and Trusted Lenders: We only work with lenders who have a
              proven track record of reliability and trustworthiness, so you can
              feel confident that you're getting a loan from a reputable source.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text color="#2b335c" fontWeight={"700"} fontSize="1.25rem">
            Ready to Get Started?
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#002257" fontSize={"15px"}>
          <Text>
            If you're ready to get the loan you need, without all the stress and
            hassle of traditional lenders, then our loan connecting service is
            the right choice for you. Our simple online application form takes
            just minutes to complete, and we'll match you with a lender who
            meets your needs. Here's how the process works:
            <br />
            <br />
          </Text>
          <UnorderedList>
            <ListItem>
              Fill Out the Online Application Form: Start by filling out our
              online application form, which asks for basic information about
              your financial situation and the loan you need.
            </ListItem>
            <ListItem>
              Matched with a Lender: Once you've completed the application form,
              we'll use our network of trusted lenders to find the best options
              for you. We'll match you with a lender who meets your needs and
              who is willing to provide you with a loan.
            </ListItem>
            <ListItem>
              Review Your Loan Options: Once you've been matched with a lender,
              we'll provide you with a list of loan options to choose from. You
              can review the terms and conditions of each loan, and choose the
              one that works best for you.
            </ListItem>
            <ListItem>
              Get the Funds You Need: Once you've chosen your loan option, your
              lender will deposit the funds directly into your bank account.
              It's that easy!
            </ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>

      <Box
        position={"relative"}
        w="85%"
        mx="auto"
        my="10"
        bg={`url(${back})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
        p="5"
        py="6rem"
      >
        <Box
          w={["100%", "100%", "80%"]}
          mx="auto"
          textAlign={["center", "center", "center", "left"]}
        >
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            textTransform={"capitalize"}
            fontSize={["1.7rem", "3rem", "3rem"]}
          >
            Get a Loan Today <br /> for a Better Tomorrow
          </Heading>
          <Text
            m="12px auto 24px"
            fontSize={["0.8rem", "1rem", "1rem"]}
            lineHeight=" 1.2"
            color="#555873"
            mx="auto"
            fontWeight="600"
          >
            Get a loan offer right away without a lot of hassle and I truly
            appreciate the speedy service.{" "}
          </Text>
        </Box>

        <Box
          textAlign={["center", "center", "center", "left"]}
          w={["100%", "100%", "80%"]}
          mx="auto"
          display={"flex"}
          justifyContent={["center", "center", "center", "left"]}
        >
          <Button
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="14px 24px"
            minHeight="54px"
            minWidth={["60%", "220px", "220px"]}
            fontFamily="Montserrat,Arial,sans-serif"
            fontWeight="700"
            fontSize="1rem"
            color="#fff"
            textAlign="center"
            border="1px solid transparent"
            borderRadius="4px"
            background="#1d36a0"
            cursor="pointer"
            _hover={{
              background: "#1d36a0",
            }}
            onClick={handleGetLoanClick}
          >
            <Text>Apply Now</Text>
            <Text fontSize={"1.5rem"}>
              <MdOutlineArrowRightAlt />
            </Text>
          </Button>
          <Image
            position={"absolute"}
            right="5%"
            top={"5%"}
            src={man}
            alt="man"
            display={["none", "none", "none", "block", "block"]}
          />
        </Box>
      </Box>

      <Divider h="0.3px" bg="#ebedf8" mt={["2rem","3rem","5rem"]} />

      <Box
        w="75%"
        mx="auto"
        textAlign={["justify", "justify", "center"]}
        fontSize="12px"
        color="#a6b2c4"
        my="5"
      >
        <Text>
          The operator of this website is NOT a lender or a broker, does not
          make offers for loans and does not charge you for any service or
          products. This site allows you to submit your information to our
          network of lenders to determine if they maybe be able to offer you a
          personal loan ranging from $100 up to $10,000. The actual amounts,
          terms, and APR a customer could qualify for will vary based on credit
          scores, individual lender requirements, and state laws. Not all
          lenders can provide up to $10,000. Services are not available in all
          states. Credit checks may be obtained by some lenders. By using our
          content and services, you agree to our Terms of Website Use, Privacy
          Policy, and Disclaimer .
        </Text>
        <br />
        <Text>
          Mintcrednow.com will share the information you provide with
          participating lenders, advertisers, networks, and other partners who
          may not lend or issue credit, including debt settlement companies.
        </Text>
      </Box>

      <SimpleGrid
        columns={2}
        spacing={[1, 2, 5]}
        w="85%"
        mx="auto"
        mt="10"
      >
        <Box>
          <HStack justifyContent={["center", "center", "center", "flex-start"]}>
            <Link to={"/"}>
              <Text
                fontWeight="700"
                color="#242f65"
                fontSize={{ base: "15px", sm: "17px", md: "29px" }}
              >
                kreditship
              </Text>
            </Link>
          </HStack>
        </Box>

        <Box textAlign={"center"}>
          <Text
            fontWeight={"500"}
            color="#555873"
            fontSize={{ base: "0.4rem", sm: "0.6rem", md: "1rem" }}
          >
            Copyright © 2023 kreditship <br /> All Rights Reserved
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
