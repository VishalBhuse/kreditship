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
import axios from "axios";
import { MAINURL } from "../../Data/BackendURL";

const Form1 = ({ step, setStep, progress, setProgress, setrup }) => {
  return (
    <Box
      h="70%"
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
              setProgress(progress + 100 / 18);
            }}
          >
            Rs.10000
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
              setProgress(progress + 100 / 18);
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
              setProgress(progress + 100 / 18);
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
              setProgress(progress + 100 / 18);
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
              setProgress(progress + 100 / 18);
            }}
          >
            Rs.50000
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form2 = ({
  creditScore,
  setcreditScore,
  creditScoreError,
  setCreditScoreError,
}) => {
  const handleCreditScoreChange = (e) => {
    const value = e.target.value;
    setcreditScore(value);
    if (!value) {
      setCreditScoreError("Credit score is required");
    } else {
      setCreditScoreError("");
    }
  };

  return (
    <Box h="70%">
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
          type="number"
          fontSize="20px"
          placeholder={"Enter Your Credit Score"}
          name="score"
          shadow="sm"
          size="sm"
          w="full"
          value={creditScore}
          py="1.5rem"
          rounded="md"
          onChange={handleCreditScoreChange}
          // onChange={(e) => setcreditScore(e.target.value)}
        />
        {creditScoreError && (
          <Text color="red.500" mt={2}>
            {creditScoreError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form3 = ({
  email,
  setemail,
  EmailError,
  setEmailError,
  setIsEmailVerified,
}) => {
  const toast = useToast();
  const [code, setcode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleVerication = async () => {
    await axios
      .post(MAINURL + `/email/getmailuser`, {
        email: email,
      })
      .then((r) => {
        toast({
          title: "Verification Code Send Successfully.",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setVerificationSent(true);
      })
      .catch((err) => {
        toast({
          title: "Check Your Email ID.",
          description: "Something Went Wrong....",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      });
  };

  const handleVerifyCode = () => {
    if (code === "978654") {
      toast({
        title: "Email Verification Successfull..",
        description: "Please Continue Form....",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsEmailVerified(true);
      setEmailError("");
    } else {
      toast({
        title: "Verification Code is incorrect.",
        description: "Please Try Again....",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setIsEmailVerified(false);
    }
  };

  return (
    <Box h="70%">
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

      <Box mt="1rem">
        <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
          <Input
            type="email"
            placeholder={"Enter Your Email Address"}
            name="email"
            shadow="sm"
            size="sm"
            w="full"
            py="1.5rem"
            rounded="md"
            fontSize="20px"
            value={email}
            onChange={handleEmailChange}
            // onChange={(e) => setemail(e.target.value)}
          />
          {EmailError && (
            <Text color="red.500" mt={2}>
              {EmailError}
            </Text>
          )}
        </FormControl>

        <Button
          mt="4"
          fontSize="16px"
          borderRadius="5px"
          border="1px solid #1D36A0"
          px="1rem"
          color="#242f65"
          bg="#fff"
          _hover={{
            backgroundColor: "#1D36A0",
            color: "#fff",
          }}
          onClick={handleVerication}
        >
          Send Verification Code
        </Button>
      </Box>
      {verificationSent && (
        <Box>
          <FormControl mt="5" as={GridItem} colSpan={[6, 3, null, 2]}>
            <Input
              type="text"
              placeholder={"Enter Your Verification Code"}
              shadow="sm"
              size="sm"
              w="full"
              py="1.5rem"
              rounded="md"
              fontSize="20px"
              onChange={(e) => setcode(e.target.value)}
            />
          </FormControl>

          <Button
            mt="4"
            fontSize="16px"
            borderRadius="5px"
            border="1px solid #1D36A0"
            px="1rem"
            color="#242f65"
            bg="#fff"
            _hover={{
              backgroundColor: "#1D36A0",
              color: "#fff",
            }}
            onClick={handleVerifyCode}
          >
            Verify
          </Button>
        </Box>
      )}
    </Box>
  );
};

const Form4 = ({
  FirstName,
  LastName,
  setLastName,
  setFirstName,
  FirstNameError,
  LastNameError,
  setFirstNameError,
  setLastNameError,
}) => {
  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (!value) {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (!value) {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }
  };
  return (
    <Box h="70%">
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
          value={FirstName}
          onChange={handleFirstName}
          // onChange={(e) => setFirstName(e.target.value)}
        />
        {FirstNameError && (
          <Text color="red.500" mt={2}>
            {FirstNameError}
          </Text>
        )}
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
          value={LastName}
          fontSize="20px"
          onChange={handleLastName}
          // onChange={(e) => setLastName(e.target.value)}
        />
        {LastNameError && (
          <Text color="red.500" mt={2}>
            {LastNameError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form5 = ({
  setphoneNumber,
  phoneNumber,
  phoneNumberError,
  setphoneNumberError,
}) => {
  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    setphoneNumber(value);
    if (!value) {
      setphoneNumberError("Phone Number is required");
    } else {
      setphoneNumberError("");
    }
  };

  return (
    <Box h="70%">
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
          value={phoneNumber}
          onChange={handlePhoneNumber}
          // onChange={(e) => setphoneNumber(e.target.value)}
        />
        {phoneNumberError && (
          <Text color="red.500" mt={2}>
            {phoneNumberError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form6 = ({
  setaddress,
  zipCode,
  setzipCode,
  address,
  zipCodeError,
  setzipCodeError,
  addressError,
  setaddressError,
}) => {
  const handleZipCode = (e) => {
    const value = e.target.value;
    setzipCode(value);
    if (!value) {
      setzipCodeError("Zip Code is required");
    } else {
      setzipCodeError("");
    }
  };
  const handleAddress = (e) => {
    const value = e.target.value;
    setaddress(value);
    if (!value) {
      setaddressError("Address is required");
    } else {
      setaddressError("");
    }
  };

  return (
    <Box h="70%">
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
          type="text"
          placeholder={"Zip Code"}
          name="zipCode"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
          value={zipCode}
          onChange={handleZipCode}
          // onChange={(e) => setzipCode(e.target.value)}
        />
        {zipCodeError && (
          <Text color="red.500" mt={2}>
            {zipCodeError}
          </Text>
        )}
      </FormControl>

      <FormControl mt="10" as={GridItem} colSpan={[6, 3, null, 2]}>
        <Input
          type="text"
          placeholder={"Address"}
          name="address"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
          value={address}
          onChange={handleAddress}
          // onChange={(e) => setaddress(e.target.value)}
        />
        {addressError && (
          <Text color="red.500" mt={2}>
            {addressError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form7 = ({ setowner, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setowner("Yes");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setowner("No");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form8 = ({ setcar, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setcar("Yes");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setcar("No");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form9 = ({ setmilitary, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setmilitary("Yes");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setmilitary("No");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form10 = ({ setdob, dobError, setdobError, dob }) => {
  const handledob = (e) => {
    const value = e.target.value;
    setdob(value);
    if (!value) {
      setdobError("Date OF Birth is required");
    } else {
      setdobError("");
    }
  };
  return (
    <Box h="70%">
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
          type="date"
          placeholder={"Date of Birth"}
          name="dob"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
          value={dob}
          onChange={handledob}
          // onChange={(e) => setdob(e.target.value)}
        />
        {dobError && (
          <Text color="red.500" mt={2}>
            {dobError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form11 = ({ setdebtoffers, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setdebtoffers("Yes");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setdebtoffers("No");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            No
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form12 = ({ setadharNo, adharNo, adharNoError, setadharNoError }) => {
  const handleadhar = (e) => {
    const value = e.target.value;
    setadharNo(value);
    if (!value) {
      setadharNoError("Adhar No is required");
    } else {
      setadharNoError("");
    }
  };
  return (
    <Box h="70%">
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
          type="Number"
          placeholder={"Adhar Card Number"}
          name="adhar"
          shadow="sm"
          size="sm"
          w="full"
          py="1.5rem"
          rounded="md"
          fontSize="20px"
          value={adharNo}
          onChange={handleadhar}
          // onChange={(e) => setadharNo(e.target.value)}
        />
        {adharNoError && (
          <Text color="red.500" mt={2}>
            {adharNoError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form13 = ({ setincome, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setincome("Employment");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setincome("Benifits");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            Benifits
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form14 = ({ setmonthIncome, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
        Select your total income before taxes.
      </Text>

      <FormControl mt="2%">
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
              setmonthIncome("10000");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
            // onClick={() => {
            //   setrup(10000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 5);
            //   }
            // }}
          >
            Rs.10000
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
              setmonthIncome("20000");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}

            // onClick={() => {
            //   setrup(20000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 5);
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
            onClick={() => {
              setmonthIncome("30000");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}

            // onClick={() => {
            //   setrup(30000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 5);
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
            //     setProgress(progress + 5);
            //   }
            // }}
            onClick={() => {
              setmonthIncome("40000");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
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
            // onClick={() => {
            //   setrup(50000);
            //   setStep(step + 1);
            //   if (step === 3) {
            //     setProgress(100);
            //   } else {
            //     setProgress(progress + 5);
            //   }
            // }}
            onClick={() => {
              setmonthIncome("50000");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            Rs.50000
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form15 = ({
  setincomeSource,
  incomeSource,
  incomeSourceError,
  setincomeSourceError,
}) => {
  const handleincomeSource = (e) => {
    const value = e.target.value;
    setincomeSource(value);
    if (!value) {
      setincomeSourceError("Employer Information is required");
    } else {
      setincomeSourceError("");
    }
  };
  return (
    <Box h="70%">
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
          value={incomeSource}
          onChange={handleincomeSource}
          // onChange={(e) => setincomeSource(e.target.value)}
        />
        {incomeSourceError && (
          <Text color="red.500" mt={2}>
            {incomeSourceError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

const Form16 = ({ setpaycheck, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setpaycheck("Electronic Deposit");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setpaycheck("Paper Check");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            Paper Check
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form17 = ({ setpaid, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
      <Heading
        w="100%"
        textAlign={"center"}
        fontSize="25px"
        fontWeight="600"
        mb="2%"
        color="#242f65"
        textTransform={"capitalize"}
      >
        How Often are you paid?
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
              setpaid("Every 2 Weeks");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setpaid("Twice a Month");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setpaid("Monthly");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setpaid("Weekly");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            Weekly
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form18 = ({ setaccount, setStep, step, setProgress, progress }) => {
  return (
    <Box h="70%">
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
            onClick={() => {
              setaccount("checking");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
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
            onClick={() => {
              setaccount("saving");
              setStep(step + 1);
              setProgress(progress + 100 / 18);
            }}
          >
            Savings
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
};

const Form19 = ({ setdeposite, deposite, depositeError, setdepositeError }) => {
  const handledepositeDetails = (e) => {
    const value = e.target.value;
    setdeposite(value);
    if (!value) {
      setdepositeError("Employer Information is required");
    } else {
      setdepositeError("");
    }
  };
  return (
    <Box h="70%">
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
          value={deposite}
          onChange={handledepositeDetails}
          // onChange={(e) => setdeposite(e.target.value)}
        />
        {depositeError && (
          <Text color="red.500" mt={2}>
            {depositeError}
          </Text>
        )}
      </FormControl>
    </Box>
  );
};

export default function MultiForm({ myDivRef }) {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [rup, setrup] = useState(0);
  const [creditScore, setcreditScore] = useState("");
  const [email, setemail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [address, setaddress] = useState("");
  const [owner, setowner] = useState("");
  const [car, setcar] = useState("");
  const [military, setmilitary] = useState("");
  const [dob, setdob] = useState("");
  const [debtoffers, setdebtoffers] = useState("");
  const [adharNo, setadharNo] = useState("");
  const [income, setincome] = useState("");
  const [monthIncome, setmonthIncome] = useState("");
  const [incomeSource, setincomeSource] = useState("");
  const [paycheck, setpaycheck] = useState("");
  const [paid, setpaid] = useState("");
  const [account, setaccount] = useState("");
  const [deposite, setdeposite] = useState("");

  // console.log(rup, "rup");
  // console.log(creditScore, "creditScore");
  // console.log(email, "email");
  // console.log(FirstName, "FirstName");
  // console.log(LastName, "LastName");
  // console.log(phoneNumber, "phoneNumber");
  // console.log(zipCode, "zipCode");
  // console.log(address, "address");
  // console.log(owner, "owner");
  // console.log(car, "car");
  // console.log(military, "military");
  // console.log(dob, "dob");
  // console.log(debtoffers, "debtoffers");
  // console.log(adharNo, "adharNo");
  // console.log(income, "income");
  // console.log(monthIncome, "monthIncome");
  // console.log(incomeSource, "incomeSource");
  // console.log(paycheck, "paycheck");
  // console.log(paid, "paid");
  // console.log(account, "account");
  // console.log(deposite, "deposite");

  const [creditScoreError, setCreditScoreError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setphoneNumberError] = useState("");
  const [zipCodeError, setzipCodeError] = useState("");
  const [addressError, setaddressError] = useState("");
  const [dobError, setdobError] = useState("");
  const [adharNoError, setadharNoError] = useState("");
  const [incomeSourceError, setincomeSourceError] = useState("");
  const [depositeError, setdepositeError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleSubmit = async () => {
    if (step === 19 && !deposite) {
      setdepositeError("Account Number is required");
    } else {
      const payload = {
        rup: rup,
        creditScore: creditScore,
        email: email,
        FirstName: FirstName,
        LastName: LastName,
        phoneNumber: phoneNumber,
        zipCode: zipCode,
        address: address,
        owner: owner,
        car: car,
        military: military,
        dob: dob,
        debtoffers: debtoffers,
        adharNo: adharNo,
        income: income,
        monthIncome: monthIncome,
        incomeSource: incomeSource,
        paycheck: paycheck,
        paid: paid,
        account: account,
        deposite: deposite,
      };

      await axios
        .post(MAINURL + `/email/getmail`, payload)
        .then((r) => {
          toast({
            title: "Form Submitted Successfully.",
            description: "Our Team Will Contact You Soon....",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          setrup(0);
          setcreditScore("");
          setemail("");
          setFirstName("");
          setLastName("");
          setphoneNumber("");
          setzipCode("");
          setaddress("");
          setowner("");
          setcar("");
          setmilitary("");
          setdob("");
          setdebtoffers("");
          setadharNo("");
          setincome("");
          setmonthIncome("");
          setincomeSource("");
          setpaycheck("");
          setpaid("");
          setaccount("");
          setdeposite("");
          setStep(1);
        })
        .catch((err) => {
          toast({
            title: "Form Not Submitted Successfully.",
            description: "Something Went Wrong....",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        });
    }
  };

  return (
    <>
      <Box mx="auto" w="100%" as="form" color="#242f65" h="100%" ref={myDivRef}>
        <Progress
          hasStripe
          size="sm"
          value={progress}
          mb="5%"
          colorScheme="green"
        >
          <ProgressLabel color="red" fontSize={"12px"}></ProgressLabel>
        </Progress>

        {step === 1 ? (
          <Form1
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
            setrup={setrup}
          />
        ) : step === 2 ? (
          <Form2
            creditScore={creditScore}
            setcreditScore={setcreditScore}
            creditScoreError={creditScoreError}
            setCreditScoreError={setCreditScoreError}
          />
        ) : step === 3 ? (
          <Form3
            email={email}
            setemail={setemail}
            EmailError={EmailError}
            setEmailError={setEmailError}
            setIsEmailVerified={setIsEmailVerified}
          />
        ) : step === 4 ? (
          <Form4
            FirstName={FirstName}
            setFirstName={setFirstName}
            LastName={LastName}
            setLastName={setLastName}
            FirstNameError={FirstNameError}
            setFirstNameError={setFirstNameError}
            LastNameError={LastNameError}
            setLastNameError={setLastNameError}
          />
        ) : step === 5 ? (
          <Form5
            phoneNumber={phoneNumber}
            setphoneNumber={setphoneNumber}
            phoneNumberError={phoneNumberError}
            setphoneNumberError={setphoneNumberError}
          />
        ) : step === 6 ? (
          <Form6
            setzipCode={setzipCode}
            setaddress={setaddress}
            zipCode={zipCode}
            address={address}
            zipCodeError={zipCodeError}
            setzipCodeError={setzipCodeError}
            addressError={addressError}
            setaddressError={setaddressError}
          />
        ) : step === 7 ? (
          <Form7
            setowner={setowner}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 8 ? (
          <Form8
            setcar={setcar}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 9 ? (
          <Form9
            setmilitary={setmilitary}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 10 ? (
          <Form10
            setdob={setdob}
            dobError={dobError}
            setdobError={setdobError}
            dob={dob}
          />
        ) : step === 11 ? (
          <Form11
            setdebtoffers={setdebtoffers}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 12 ? (
          <Form12
            adharNo={adharNo}
            setadharNo={setadharNo}
            adharNoError={adharNoError}
            setadharNoError={setadharNoError}
          />
        ) : step === 13 ? (
          <Form13
            setincome={setincome}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 14 ? (
          <Form14
            setmonthIncome={setmonthIncome}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 15 ? (
          <Form15
            setincomeSource={setincomeSource}
            incomeSource={incomeSource}
            incomeSourceError={incomeSourceError}
            setincomeSourceError={setincomeSourceError}
          />
        ) : step === 16 ? (
          <Form16
            setpaycheck={setpaycheck}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 17 ? (
          <Form17
            setpaid={setpaid}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : step === 18 ? (
          <Form18
            setaccount={setaccount}
            setStep={setStep}
            step={step}
            setProgress={setProgress}
            progress={progress}
          />
        ) : (
          <Form19
            setdeposite={setdeposite}
            deposite={deposite}
            depositeError={depositeError}
            setdepositeError={setdepositeError}
          />
        )}

        <br />

        <ButtonGroup w="100%">
          <Flex w="100%" justifyContent="center" alignItems={"center"}>
            <HStack
              flexDirection={{ base: "column", sm: "row" }}
              gap={["1rem", "1rem", "1rem", "2rem", "2rem"]}
            >
              <Button
              ml={{ base: "4px", sm: "0px" }}
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 5);
                  setProgress(progress - 100 / 18);
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
                mt={{ base: 2, md: 0 }}
                display={
                  step === 1 ||
                  step === 7 ||
                  step === 8 ||
                  step === 9 ||
                  step === 11 ||
                  step === 13 ||
                  step === 14 ||
                  step === 16 ||
                  step === 17 ||
                  step === 18 ||
                  step === 19
                    ? "none"
                    : "inline-flex"
                }
                onClick={() => {
                  switch (step) {
                    case 2:
                      if (!creditScore) {
                        setCreditScoreError("Credit score is required");
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 3:
                      if (!email || EmailError || !isEmailVerified) {
                        setEmailError(
                          "Email is required and verify your email"
                        );
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 4:
                      if (!FirstName || !LastName) {
                        if (!FirstName) {
                          setFirstNameError("First Name is required");
                        } else {
                          setFirstNameError("");
                        }
                        if (!LastName) {
                          setLastNameError("Last Name is required");
                        } else {
                          setLastNameError("");
                        }
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 5:
                      if (!phoneNumber) {
                        setphoneNumberError("Phone Number is required");
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 6:
                      if (!zipCode || !address) {
                        if (!zipCode) {
                          setzipCodeError("Zip Code is required");
                        } else {
                          setzipCodeError("");
                        }
                        if (!address) {
                          setaddressError("Address is required");
                        } else {
                          setaddressError("");
                        }
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 10:
                      if (!dob) {
                        setdobError("Date OF Birth is required");
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 12:
                      if (!adharNo) {
                        setadharNoError("Adhar No is required");
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    case 15:
                      if (!incomeSource) {
                        setincomeSourceError(
                          "Employer Information is required"
                        );
                      } else {
                        setStep(step + 1);
                        setProgress(progress + 100 / 18);
                      }
                      break;
                    default:
                      setStep(step + 1);
                      setProgress(progress + 100 / 18);
                      break;
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
              {step === 19 ? (
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
                  onClick={handleSubmit}
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
