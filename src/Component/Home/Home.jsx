import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { advantage } from "../../Data/Data";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />

      <Box w="85%" mx="auto" my="10">
        <Box>
          <Heading
            color={"#2b335c"}
            fontWeight="700"
            fontSize={["1.7rem", "3rem", "3rem"]}
          >
            Our Main Advantages
          </Heading>
        </Box>

        <Box my="12">
          <SimpleGrid
            columns={[1, 1, 1, 1, 3]}
            spacing={["2rem", "2rem", "2rem", "2rem", "7rem"]}
          >
            {advantage?.map((item, ind) => (
              <VStack alignItems="flex-start" key={ind}>
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
            backgroundImage:
              "url('https://clearviewloans.com/images/dotted-patterne.svg')",
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
            fontSize={["1.7rem", "3rem", "3rem"]}
          >
            Get a Loan Today <br />
            for a Better Tomorrow
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
            We commit to connecting you with an approved lender. We also made
            the process simple. No need to visit hundreds of websites and fill
            out numerous paperwork. We recognize a personal loan is a private
            matter. Reasons for needing money range from critical automobile
            maintenance, unexpected medical expenses, much needed family
            vacation, basic home improvements, etc.
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
            >
              Get Started
              <Text fontSize={"1.5rem"}>&#8594;</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
