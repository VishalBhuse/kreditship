import {
  Box,
  Divider,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Img/logo.svg";

const Footer = () => {
  return (
    <>
      <Box bg="#e8e9ef" color="#555873" w="85%" mx="auto" borderRadius={"15px"}>
        <Box
          display="flex"
          gap="2.5rem"
          justifyContent={"space-around"}
          flexWrap="wrap"
          py="3rem"
          px={["2rem", "2rem", "2rem", "4rem", "4rem"]}
        >
          <Text> How It Works</Text>
          <Text>About Us</Text>
          <Text>Why Choose Us</Text>
          <Text>Questions</Text>
          <Text>Definitions</Text>
          <Text>Rates & Fees</Text>
          <Text>Lending Policy</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms of Use</Text>
          <Text>Disclaimer</Text>
          <Text>Contact</Text>
          <Text>E-Consent</Text>
        </Box>
      </Box>
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
            Important Disclosures. Please Read Carefully.
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#555873" fontSize={"15px"}>
          <Text>
            Persons facing serious financial difficulties should consider other
            alternatives or should seek out professional financial advice.{" "}
            <br />
            <br />
            This website is not an offer to lend. ClearViewLoans.com is not a
            lender or lending partner and does not make loan or credit
            decisions. ClearViewLoans.com connects interested persons with a
            lender or lending partner from its network of approved lenders and
            lending partners. ClearViewLoans.com does not control and is not
            responsible for the actions or inactions of any lender or lending
            partner, is not an agent, representative or broker of any lender or
            lending partner, and does not endorse any lender or lending partner.
            ClearViewLoans.com receives compensation from its lenders and
            lending partners, often based on a ping-tree model similar to Google
            AdWords where the highest available bidder is connected to the
            consumer. Regardless, ClearViewLoans.com’s service is always free to
            you. In some cases, you may be given the option of obtaining a loan
            from a tribal lender. Tribal lenders are subject to tribal and
            certain federal laws while being immune from state law including
            usury caps. If you are connected to a tribal lender, please
            understand that the tribal lender’s rates and fees may be higher
            than state-licensed lenders. Additionally, tribal lenders may
            require you to agree to resolve any disputes in a tribal
            jurisdiction. You are urged to read and understand the terms of any
            loan offered by any lender, whether tribal or state-licensed, and to
            reject any particular loan offer that you cannot afford to repay or
            that includes terms that are not acceptable to you. <br />
            <br />
            This service is not available in all states. If you request to
            connect with a lender or lending partner in a particular state where
            such loans are prohibited, or in a location where ClearViewLoans.com
            does not have an available lender or lending partner, you will not
            be connected to a lender or lending partner. You are urged to read
            and understand the terms of any loan offered by any lender or
            lending partner, and to reject any particular loan offer that you
            cannot afford to repay or that includes terms that are not
            acceptable to you. <br />
            <br />
            By submitting your information via this website, you are authorizing
            ClearViewLoans.com and its partners to do a credit check, which may
            include verifying your social security number, driver license number
            or other identification, and a review of your creditworthiness.
            Credit checks are usually performed by one of the major credit
            bureaus such as Experian, Equifax and TransUnion, but also may
            include alternative credit bureaus such as Teletrack, DP Bureau or
            others. You also authorize ClearViewLoans.com to share your
            information and credit history with a network of approved lenders
            and lending partners.
            <br />
          </Text>
        </Box>
        <Box>
          <Text color="#2b335c" fontWeight={"700"} fontSize="1.25rem">
            Lender’s or Lending Partner’s Disclosure of Terms.
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#555873" fontSize={"15px"}>
          <Text>
            The lenders and lending partners you are connected to will provide
            documents that contain all fees and rate information pertaining to
            the loan being offered, including any potential fees for
            late-payments and the rules under which you may be allowed (if
            permitted by applicable law) to refinance, renew or rollover your
            loan. Loan fees and interest rates are determined solely by the
            lender or lending partner based on the lender’s or lending partner’s
            internal policies, underwriting criteria and applicable law.
            ClearViewLoans.com has no knowledge of or control over the loan
            terms offered by a lender and lending partner. You are urged to read
            and understand the terms of any loan offered by any lenders and
            lending partners and to reject any particular loan offer that you
            cannot afford to repay or that includes terms that are not
            acceptable to you.
          </Text>
        </Box>
        <Box>
          <Text color="#2b335c" fontWeight={"700"} fontSize="1.25rem">
            Late Payments Hurt Your Credit Score
          </Text>
        </Box>
        <Box textAlign={"justify"} color="#555873" fontSize={"15px"}>
          <Text>
            Please be aware that missing a payment or making a late payment can
            negatively impact your credit score. To protect yourself and your
            credit history, make sure you only accept loan terms that you can
            afford to repay. If you cannot make a payment on time, you should
            contact your lenders and lending partners immediately and discuss
            how to handle late payments.
          </Text>
        </Box>
      </SimpleGrid>

      <Divider h="0.5px" bg="grey" />

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={5} w="85%" mx="auto" mt="10">
        <Box>
          <HStack justifyContent={["center", "center", "center", "flex-start"]}>
            <Link to={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </HStack>
        </Box>
        <Box textAlign={"center"}>
          <Text fontWeight={"500"} color="#555873" fontSize={"1rem"}>
            Copyright © 2023 ClearViewLoans.com. All Rights Reserved
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Footer;
