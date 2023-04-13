import {
  Box,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import MyForm from "../Home/Form";

const Faq = ({ inputRef }) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} w="85%" mx="auto" mt="2%">
        <Box>
          <Text
            color={"#2b335c"}
            fontWeight={"700"}
            fontSize={["2rem", "2rem", "2rem", "2rem", "4rem"]}
            mt="2"
          >
            Frequently Asked Questions
          </Text>
          <Text
            color={"#555873"}
            fontWeight={"400"}
            fontSize={"1rem"}
            textAlign={"justify"}
          >
            Loanbridge Pro provides a marketplace service where your loan
            request is submitted to a network of reputable lenders. Our service
            is always free--there is never a cost to you for submitting an
            inquiry. Your lender will have its own rates and fees that will be
            provided to you before you accept the loan. Loanbridge Pro is not a
            lender and does not make credit decisions.
            <br />
            <br />
            New customers may have questions about Loanbridge Pro, which is why
            we have compiled the most common questions below. If you have a
            question that is not answered here, we are happy to answer your
            questions.
            <br />
            <br />
            If you have questions regarding a loan inquiry, approval, funded
            loan, payments or any other question about a particular loan, please
            contact your lender or lending partner directly.
          </Text>
        </Box>
        <Box px={[0, 0, 0, 5]}>
          <MyForm inputRef={inputRef} />
        </Box>
      </SimpleGrid>
      <Box w="85%" mx="auto" mt="2%">
        <Box mt={"3"}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border="none">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    1. What is a loan connecting service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                A loan connecting service, like ours, is a service that helps
                borrowers connect with trusted lenders who can provide them with
                the loan they need. We work with a network of lenders to find
                the best loan options for our borrowers, tailored to their
                unique financial situation.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mt="8px"  border="none">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontWeight={700}
                    fontSize="1rem"
                    textAlign="left"
                  >
                    2. How does your loan connecting service work?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Our loan connecting service works in four easy steps: <br />
                <br />
                1. Fill out our online application form. <br />
                2. We'll match you with a lender who meets your needs.
                <br />
                3. Review your loan options and choose the one that works best
                for you. <br />
                4. Get the funds you need deposited directly into your bank
                account.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    3. How long does it take to get a loan through your service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Our application process is designed to be as fast and easy as
                possible. In many cases, you can get approved for a loan and
                receive the funds within 24-48 hours of submitting your
                application.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    4. Is your loan connecting service free to use?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Yes! Our loan connecting service is completely free to use.
                There are no hidden fees or charges for using our service. You
                can apply for a loan and connect with a lender without any cost
                to you.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    5. Will my credit score be affected if I apply for a loan
                    through your service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Your credit score may be affected when you apply for a loan,
                regardless of whether you use our loan connecting service or
                not. However, we work with lenders who specialize in providing
                loans to borrowers with all types of credit scores, so we may be
                able to find a loan option that works for you.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    6. Are the lenders you work with trustworthy?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Yes, we only work with lenders who have a proven track record of
                reliability and trustworthiness. We carefully vet all of our
                lending partners to ensure that they meet our high standards for
                customer service and financial stability.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    7. What if I have trouble repaying my loan?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                If you have trouble repaying your loan, it's important to reach
                out to your lender as soon as possible to discuss your options.
                Many lenders offer flexible repayment plans and other options to
                help borrowers who are experiencing financial difficulty.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    8. Need a Loan? We Can Help!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Are you in need of a loan, but not sure where to turn? Look no
                further! Our loan connecting service helps borrowers just like
                you find the right lender to meet their financial needs.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    9. Why Choose Us?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                We work with a network of trusted lenders to find you the best
                loan options Our application process is fast and easy, so you
                can get the funds you need quickly We understand that every
                borrower's situation is unique, so we work with you to find the
                right loan solution for your needs Our service is free to use -
                there's no cost to apply or connect with a lender
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem mt="8px">
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    color="#1d36a0"
                    fontSize="1rem"
                    fontWeight={700}
                    textAlign="left"
                  >
                    10. How It Works?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                color={"#555873"}
                fontWeight={"400"}
                fontSize={"0.9rem"}
                textAlign={"justify"}
                pb={4}
              >
                Fill out our simple online application form We'll match you with
                a lender who meets your needs Review your loan options and
                choose the best one for you Get the funds you need deposited
                directly into your bank account Don't let financial stress keep
                you up at night. Let us help you find the right loan solution to
                meet your needs. Apply now and take the first step towards
                financial freedom!
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default Faq;
