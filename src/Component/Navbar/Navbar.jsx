import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  VStack,
  HStack,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../Img/logo.svg";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box my='2'>
        <Flex
          w="90%"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              fontSize={"23px"}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <MdClose w={3} h={3} />
                ) : (
                  <GiHamburgerMenu w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              alignItems={"center"}
              color="#242f65"
              fontWeight="500"
              fontSize={"15px"}
              py="5px"
              px="30px"
              w="100%"
              mx="auto"
            >
              <DesktopNav />
            </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={4}
              alignItems={"center"}
              fontSize="20px"
              mr="10px"
            >
              <Link to="/">
                <Image src={logo} alt="logo" />
              </Link>
            </Stack>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;

const DesktopNav = () => {
  return (
    <HStack
      w="100%"
      spacing={"25px"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <HStack
        w="20%"
        mx="auto"
        spacing={"25px"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to={"/about"}>
          <Text
            _hover={{
              transform: "scale(1.2)",
              borderBottom: "1px solid #242f65",
            }}
          >
            About Us
          </Text>
        </Link>
        <Link to={"/faq"}>
          <Text
            _hover={{
              transform: "scale(1.2)",
              borderBottom: "1px solid #F2CD5C",
            }}
          >
            FAQ's
          </Text>
        </Link>
      </HStack>

      <Button
        color={"#1d36a0"}
        bg={"white"}
        _hover={{ bg: "white" }}
        border={"1px solid blue"}
        px={7}
        py={6}
        fontWeight={500}
      >
        Get Loan{" "}
        <HiArrowNarrowRight style={{ marginLeft: "25px", color: "#1d36a0" }} />{" "}
      </Button>
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/faq"}>FAQ's</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
