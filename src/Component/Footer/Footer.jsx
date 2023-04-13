import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({handleGetLoanClick}) => {
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
        <Box textAlign={"justify"} color="#555873" fontSize={"15px"}>
          <Text>
            At our loan connecting service, we understand that every borrower is
            unique, with their own specific financial needs and goals. That's
            why we work with you to find the loan solution that's right for you,
            no matter what your circumstances may be. Here are just a few
            reasons why you should choose our service.
            <br />
            <br />
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
                Reliable and Trusted Lenders: We only work with lenders who have
                a proven track record of reliability and trustworthiness, so you
                can feel confident that you're getting a loan from a reputable
                source.
              </ListItem>
            </UnorderedList>
          </Text>
        </Box>
        <Box>
          <Text color="#2b335c" fontWeight={"700"} fontSize="1.25rem">
            Ready to Get Started?
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#555873" fontSize={"15px"}>
          <Text>
            If you're ready to get the loan you need, without all the stress and
            hassle of traditional lenders, then our loan connecting service is
            the right choice for you. Our simple online application form takes
            just minutes to complete, and we'll match you with a lender who
            meets your needs. Here's how the process works:
            <br />
            <br />
            <UnorderedList>
              <ListItem>
                Fill Out the Online Application Form: Start by filling out our
                online application form, which asks for basic information about
                your financial situation and the loan you need.
              </ListItem>
              <ListItem>
                Matched with a Lender: Once you've completed the application
                form, we'll use our network of trusted lenders to find the best
                options for you. We'll match you with a lender who meets your
                needs and who is willing to provide you with a loan.
              </ListItem>
              <ListItem>
                Review Your Loan Options: Once you've been matched with a
                lender, we'll provide you with a list of loan options to choose
                from. You can review the terms and conditions of each loan, and
                choose the one that works best for you.
              </ListItem>
              <ListItem>
                Get the Funds You Need: Once you've chosen your loan option,
                your lender will deposit the funds directly into your bank
                account. It's that easy!
              </ListItem>
            </UnorderedList>
          </Text>
        </Box>
      </SimpleGrid>

      <Box w="85%" mx="auto" my="10">
        <Box
          w={["100%", "100%", "80%"]}
          mx="auto"
          textAlign={["left", "left", "center"]}
        >
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            textTransform={"capitalize"}
            fontSize={["1.7rem", "3rem", "3rem"]}
          >
            Get a Loan Today for a Better Tomorrow
          </Heading>
        </Box>

        <Box>
          <Text
            textAlign={["left", "left", "center"]}
            m="12px auto 24px"
            fontSize="1rem"
            lineHeight=" 1.2"
            color="#555873"
            w={["100%", "100%", "70%"]}
            mx="auto"
            fontWeight="600"
          >
            Get a loan offer right away without a lot of hassle and I truly
            appreciate the speedy service.{" "}
          </Text>
          <Box
            w={["100%", "100%", "70%"]}
            mx="auto"
            display={"grid"}
            placeItems="center"
          >
            <Button
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="14px 24px"
              minHeight="54px"
              minWidth={["100%", "220px", "220px"]}
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
              Apply Now
              <Text fontSize={"1.5rem"}>&#8594;</Text>
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider h="0.5px" bg="grey" />

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={5} w="85%" mx="auto" mt="10">
        <Box>
          <HStack justifyContent={["center", "center", "center", "flex-start"]}>
            <Link to={"/"}>
              <Text
                fontWeight="700"
                color="#242f65"
                fontSize={{ base: "15px", sm: "17px", md: "29px" }}
              >
                Loanbridge Pro
              </Text>
            </Link>
          </HStack>
        </Box>

        <Box textAlign={"center"}>
          <Text fontWeight={"500"} color="#555873" fontSize={"1rem"}>
            Copyright © 2023 Loanbridge Pro. All Rights Reserved
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
