import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const MyForm = ({ inputRef }) => {
  const toast = useToast();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    pincode: "",
  });
  const [showEmptyFieldsMessage, setShowEmptyFieldsMessage] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setEmailFormatError(!validateEmail(value));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.address === "" ||
      formValues.phoneNumber === "" ||
      formValues.pincode === "" ||
      emailFormatError
    ) {
      setShowEmptyFieldsMessage(true);
    } else {
      setShowEmptyFieldsMessage(false);

      const payload = {
        email: formValues.email,
        name: formValues.name,
        address: formValues.address,
        phoneNo: formValues.phoneNumber,
        pinCode: formValues.pincode,
      };

      axios
        .post(`https://loanbridge-backend.vercel.app/email/getmail`, payload)
        .then((r) => {
          //   console.log(r.data);
          toast({
            title: "Form Submitted Successfully.",
            description: "Our Team Will Contact You Soon....",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          setFormValues({
            name: "",
            email: "",
            address: "",
            phoneNumber: "",
            pincode: "",
          });
        })
        .catch((err) => {
          console.log(err);
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
    <Box
      h="auto"
      bg="#fff"
      borderRadius={15}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Box rounded="lg" color="#242f65" p={8}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              ref={inputRef}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleEmailChange}
            />
            {emailFormatError && (
              <Box color="red" fontSize="14px">
                Please enter a valid email address.
              </Box>
            )}
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          </FormControl>
          <HStack flexDirection={["column", "column", "row"]}>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel mt={[2, 2, 2, 0, 0]}>Pin Code</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  name="pincode"
                  value={formValues.pincode}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <Box
            h={showEmptyFieldsMessage ? "24px" : "24px"}
            overflow="hidden"
            transition="height 0.3s ease-in-out"
          >
            {showEmptyFieldsMessage && (
              <Box color="red" fontSize="14px">
                All fields are required.
              </Box>
            )}
          </Box>

          <HStack w="100%" justifyContent={"center"} my="5">
            <Button
              px="2rem"
              py="1.5rem"
              backgroundColor="#1D36A0"
              color="#fff"
              w="10rem"
              fontWeight="600"
              fontSize="16px"
              borderRadius="54px"
              colorScheme="red"
              variant="solid"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyForm;
