import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { advantage } from "../../Data/Data";
import Banner from "./Banner";
import dottedpatterne from "../../Img/dottedpatterne.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = ({ myDivRef, handleGetLoanClick }) => {
  const isLg = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  return (
    <>
      <Banner myDivRef={myDivRef} />

      <Box w="85%" mx="auto" my="7rem">
        <Box textAlign="center">
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            fontSize={["1.7rem", "2.5rem", "2.5rem"]}
          >
            Simple as one, two, three...
          </Heading>
        </Box>

        <Box my="5rem" textAlign="center">
          <SimpleGrid
            columns={[1, 1, 1, 1, 3]}
            spacing={["2rem", "2rem", "2rem", "2rem", "7rem"]}
          >
            {advantage?.map((item, ind) => (
              <VStack
                key={ind}
                position={"relative"}
                _after={
                  (ind === 0 || ind === 1) &&
                  isLg && {
                    content: '""',
                    top: "10%",
                    position: "absolute",
                    bg: "#0064ff",
                    left: "70%",
                    display: "block",
                    width: "100%",
                    height: "1px",
                  }
                }
                // _after={{
                //   content: '""',
                //   top: "10%",
                //   position: "absolute",
                //   bg: "#0064ff",
                //   left: "60%",
                //   display: "block",
                //   width: "90%",
                //   height: "1px",
                // }}
              >
                <Image src={item.img} alt="adv" />
                <Text color={"#1d36a0"} fontWeight="500" fontSize={"0.9rem"}>
                  {item.text1}
                </Text>
                <Text color={"#2b335c"} fontWeight="600" fontSize={"1.5rem"}>
                  {item.text2}
                </Text>
                <Text
                  fontFamily="Montserrat,Arial,sans-serif"
                  color="#555873"
                  fontSize={"0.9rem"}
                >
                  {item.text3}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box display={["none", "none", "none", "block"]}>
        <Box
          w="100%"
          mx="auto"
          display={"grid"}
          gridTemplateColumns="calc(50vw + 375px) 1fr"
          bg="#fff"
          gridTemplateRows={"min-content"}
          _before={{
            content: '""',
            display: "inline-block",
            mr: "5px",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            gridColumn: "1/2",
            gridRow: "1/-1",
            backgroundColor: "#e8e9ef",
            backgroundImage: `url(${dottedpatterne})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 6px right 770px",
            backgroundSize: "332px",
          }}
        >
          <Box
            gridRow="1/-1"
            gridColumn="1"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="flex-start"
            alignItems={["left", "left", "left", "center"]}
            // gap="20px"
            p="10"
            my="1rem"
            mx={["1rem", "1rem", "5rem"]}
            position="relative"
          >
            <Image
              src="./img/loan2.jpg"
              alt="review"
              w={["400px", "400px", "340px"]}
            />
            <Heading
              color={"#2b335c"}
              fontWeight="700"
              fontSize={["1.7rem", "1.7rem", "2rem", "3rem"]}
              ml="5rem"
              left="85%"
              top="50%"
              transform="translate(-50%, -50%)"
              width="80%"
              position={"absolute"}
            >
              I got a loan offer right away without a lot of hassle and I truly
              appreciate the speedy service.
            </Heading>
          </Box>
        </Box>
      </Box>

      <Box
        w="100%"
        mx="auto"
        p="4"
        px={["2rem", "2rem", "5rem"]}
        bg="#e8e9ef"
        display={["block", "block", "block", "none"]}
      >
        <VStack alignItems="flex-start">
          <Image
            src="./img/loan2.jpg"
            alt="review"
            w={["300px", "300px", "340px"]}
          />
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            fontSize={["1.7rem", "1.7rem", "3rem"]}
            ml="5rem"
          >
            I got a loan offer right away without a lot of hassle and I truly
            appreciate the speedy service.
          </Heading>
        </VStack>
      </Box>

      <Box w="85%" mx="auto" my="10">
        <Box
          w={["100%", "100%", "70%"]}
          mx="auto"
          textAlign={["left", "left", "center"]}
        >
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            textTransform={"capitalize"}
            fontSize={["1.7rem", "3rem", "3rem"]}
          >
            Get Matched with Your Ideal Loan Lender in next 48 hrs
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
          >
            Are you struggling to find a loan that meets your needs? Look no
            further than our loan connecting service! We specialize in helping
            borrowers just like you connect with trusted lenders to find the
            best loan options, tailored to your unique situation in the next
            24-48 hrs.
            <Text as="span" fontWeight={"700"}>
              GUARANTEED!
            </Text>
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
              minWidth={["70%", "220px", "220px"]}
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
              Get Started
              <Text fontSize={"1.5rem"}>
                <MdOutlineArrowRightAlt />
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
