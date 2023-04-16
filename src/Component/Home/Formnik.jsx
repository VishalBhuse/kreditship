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
import { useFormik } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().min(3).max(50).required("Please enter your address"),
  phoneNumber: Yup.string()
    .length(10)
    .required("Please enter your phone number "),
  pincode: Yup.string().min(5).max(7).required("Please enter your pincode "),
});

const Formniks = () => {
  const toast = useToast();

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    pincode: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    //   const Formik =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        const payload = {
          email: values.email,
          name: values.name,
          address: values.address,
          phoneNo: values.phoneNumber,
          pinCode: values.pincode,
        };
        console.log(payload);
        await axios
          .post(`http://localhost:8000/email/getmail`, payload)
          .then((r) => {
            toast({
              title: "Form Submitted Successfully.",
              description: "Our Team Will Contact You Soon....",
              status: "success",
              duration: 3000,
              position: "top",
              isClosable: true,
            });
            action.resetForm();
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
      },
    });

  return (
    <Box
      h="auto"
      bg="#fff"
      borderRadius={15}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
    >
      <Box rounded="lg" color="#242f65" p={8}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <Box color="red" fontSize="14px">
                  {errors.name}
                </Box>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <Box color="red" fontSize="14px">
                  {errors.email}
                </Box>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <Box color="red" fontSize="14px">
                  {errors.address}
                </Box>
              ) : null}
            </FormControl>
            <HStack flexDirection={["column", "column", "row"]}>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {errors.phoneNumber && touched.phoneNumber ? (
                  <Box color="red" fontSize="14px">
                    {errors.phoneNumber}
                  </Box>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 0, 0]}>Pin Code</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    name="pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {errors.pincode && touched.pincode ? (
                  <Box color="red" fontSize="14px">
                    {errors.pincode}
                  </Box>
                ) : null}
              </FormControl>
            </HStack>

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
                type="submit"
              >
                Submit
              </Button>
            </HStack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Formniks;
