import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  Input,
  ProgressLabel,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const Form1 = ({ step, setStep, progress, setProgress, rup, setrup }) => {
  return (
    <Box
      h="350px"
      // h={["55vh", "auto", "auto", "auto", "100%"]}
    >
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        How Much Do You Need?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => {
              setrup(10000);
              setStep(step + 1);
              if (step === 3) {
                setProgress(100);
              } else {
                setProgress(progress + 33.33);
              }
            }}
          >
            Rs.1000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => {
              setrup(20000);
              setStep(step + 1);
              if (step === 3) {
                setProgress(100);
              } else {
                setProgress(progress + 33.33);
              }
            }}
          >
            Rs.20000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => {
              setrup(30000);
              setStep(step + 1);
              if (step === 3) {
                setProgress(100);
              } else {
                setProgress(progress + 33.33);
              }
            }}
          >
            Rs.30000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => {
              setrup(40000);
              setStep(step + 1);
              if (step === 3) {
                setProgress(100);
              } else {
                setProgress(progress + 33.33);
              }
            }}
          >
            Rs.40000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => {
              setrup(50000);
              setStep(step + 1);
              if (step === 3) {
                setProgress(100);
              } else {
                setProgress(progress + 33.33);
              }
            }}
          >
            Rs.50000
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form2 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        What Is Your Credit Score?
      </Heading>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          fontSize="20px"
          placeholder={"Enter Your Credit Score"}
          name="score"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
        />
      </FormControl>
    </Box>
  );
};

const Form3 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Email Address
      </Heading>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Email"}
          name="email"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form4 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Your Name
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        Entering your full legal name may increase your chances of approval.
      </Text>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"First Name"}
          name="firstName"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Last Name"}
          name="lastName"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form5 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Cell Phone Number
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        Why do we require this? Some lenders will quickly confirm your request
        by phone.
      </Text>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="number"
          placeholder={"Cell Phone Number"}
          name="phoneno"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form6 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        What Is Your Street Address?
      </Heading>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="number"
          placeholder={"Zip Code"}
          name="zipCode"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="number"
          placeholder={"Address"}
          name="address"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form7 = ({ setowner }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Are You a Homeowner?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setowner("Yes")}
          >
            Yes
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setowner("No")}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form8 = ({ setcar }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Do You Own a Car That Is Fully Paid Off?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setcar("Yes")}
          >
            Yes
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setcar("No")}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form9 = ({ setmilitary }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Are You Currently in the Military, or Are You the Spouse, Child or
        Dependent of Someone in the Military?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setmilitary("Yes")}
          >
            Yes
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setmilitary("No")}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form10 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        What Is Your Date of Birth?
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        We ask for your birthday so lenders can verify your identity. You must
        be over 18 years of age.
      </Text>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Date of Birth"}
          name="dob"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form11 = ({ setdebtoffers }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Are You Interested in Debt Consolidation Offers?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setdebtoffers("Yes")}
          >
            Yes
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setdebtoffers("No")}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form12 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        What Is Adhar Card
      </Heading>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Adhar Card Number"}
          name="adhar"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form13 = ({ setincome }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Income Type
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setincome("Employment")}
          >
            Employment
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setincome("Benifits")}
          >
            Benifits
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form14 = ({ setdebtoffers }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Monthly Income
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        Select your total income before taxes and include all sources of income.
      </Text>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            // onClick={() => {
            //   setrup(10000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 33.33);
            //   }
            // }}
          >
            Rs.1000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            // onClick={() => {
            //   setrup(20000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 33.33);
            //   }
            // }}
          >
            Rs.20000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            // onClick={() => {
            //   setrup(30000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 33.33);
            //   }
            // }}
          >
            Rs.30000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            // onClick={() => {
            //   setrup(40000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 33.33);
            //   }
            // }}
          >
            Rs.40000
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            // onClick={() => {
            //   setrup(50000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 33.33);
            //   }
            // }}
          >
            Rs.50000
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form15 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Employer Name/Income Source
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        We will not contact your employer. Please enter your main source of
        income. Social Security, Disability and Unemployment income OK.
      </Text>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Employer"}
          name="employer"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

const Form16 = ({ setpaycheck }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        How Is Your Paycheck Received?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaycheck("electronic")}
          >
            Electronic Deposit
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaycheck("paper")}
          >
            Paper Check
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form17 = ({ setpaid }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        How Is Your Paycheck Received?
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaid("every 2 weeks")}
          >
            Every 2 Weeks
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaid("twice a month")}
          >
            Twice a month
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaid("monthly")}
          >
            Monthly
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setpaid("weekly")}
          >
            Weekly
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form18 = ({ setaccount }) => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Type of Bank Account
      </Heading>

      <FormControl mt="5%">
        <VStack spacing={"3"} h="100%">
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➜"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setaccount("checking")}
          >
            Checking
          </Button>
          <Button
            w="100%"
            bg="#1D36A0"
            py="25px"
            _hover={{ bg: "#6888fa" }}
            borderRadius={"50px"}
            fontWeight={"600"}
            color="#fff"
            _after={{
              content: '"➔"',
              position: "absolute",
              top: "30%",
              right: "15px",
              display: "block",
              width: "16px",
              height: "16px",
              fontFamily: "jsf-icomoon",
              fontSize: "16px",
            }}
            onClick={() => setaccount("saving")}
          >
            Savings
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form19 = () => {
  return (
    <Box h="350px">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
      >
        Deposit Details
      </Heading>

      <Text color="#666d93" fontSize={"14px"} textAlign="center">
        This Information is needed so a lender can direct deposite your loan
        when approved.
      </Text>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Account Number"}
          name="accountNumber"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
        />
      </FormControl>
    </Box>
  );
};

export default function MultiForm() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [rup, setrup] = useState(0);
  const [owner, setowner] = useState("");
  const [car, setcar] = useState("");
  const [military, setmilitary] = useState("");
  const [debtoffers, setdebtoffers] = useState("");
  const [income, setincome] = useState("");
  const [paycheck, setpaycheck] = useState("");
  const [paid, setpaid] = useState("");
  const [account, setaccount] = useState("");
  console.log(owner);
  return (
    <>
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
        <Progress size="sm" value={progress} mb="5%" colorScheme="green">
          <ProgressLabel color="red" fontSize={"12px"}>
            {progress}
          </ProgressLabel>
        </Progress>

        {step === 1 ? (
          <Form1
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
            rup={rup}
            setrup={setrup}
          />
        ) : step === 2 ? (
          <Form2 />
        ) : step === 3 ? (
          <Form3 />
        ) : step === 4 ? (
          <Form4 />
        ) : step === 5 ? (
          <Form5 />
        ) : step === 6 ? (
          <Form6 />
        ) : step === 7 ? (
          <Form7 setowner={setowner} />
        ) : step === 8 ? (
          <Form8 setcar={setcar} />
        ) : step === 9 ? (
          <Form9 setmilitary={setmilitary} />
        ) : step === 10 ? (
          <Form10 />
        ) : step === 11 ? (
          <Form11 setdebtoffers={setdebtoffers} />
        ) : step === 12 ? (
          <Form12 />
        ) : step === 13 ? (
          <Form13 setincome={setincome} />
        ) : step === 14 ? (
          <Form14 />
        ) : step === 15 ? (
          <Form15 />
        ) : step === 16 ? (
          <Form16 />
        ) : step === 17 ? (
          <Form17 setpaid={setpaid} />
        ) : step === 17 ? (
          <Form18 />
        ) : (
          <Form19 />
        )}
        <ButtonGroup mt="10%" w="100%">
          <Flex w="100%" justifyContent="center">
            <HStack>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                // display={step === 1 || step === 3 ? "none" : "inline-flex"}
                display={step === 1 ? "none" : "inline-flex"}
                fontWeight={"600"}
                fontSize="16px"
                borderRadius="54px"
                border="1px solid #1D36A0"
                px="2rem"
                py="1.5rem"
                color="#242f65"
                bg="#fff"
                w="10rem"
                _hover={{
                  backgroundColor: "#1D36A0",
                  color: "#fff",
                }}
              >
                Back
              </Button>
              <Button
                display={step === 18 ? "none" : "inline-flex"}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 6) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                fontWeight={"600"}
                fontSize="16px"
                borderRadius="54px"
                border="1px solid #1D36A0"
                px="2rem"
                py="1.5rem"
                color="#242f65"
                bg="#fff"
                w="10rem"
                _hover={{
                  backgroundColor: "#1D36A0",
                  color: "#fff",
                }}
              >
                Continue
              </Button>
              {step === 18 ? (
                <Button
                  px="2rem"
                  py="1.5rem"
                  backgroundColor="#1D36A0"
                  color="#fff"
                  w="10rem"
                  fontWeight={"600"}
                  fontSize="16px"
                  borderRadius="54px"
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Submit
                </Button>
              ) : null}
            </HStack>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
