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
} from "@chakra-ui/react";
import React from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ handleGetLoanClick }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px" py="2">
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
              <DesktopNav handleGetLoanClick={handleGetLoanClick}/>
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
                <Text
                  // fontSize={"1.5rem"}
                  fontWeight="700"
                  display={["block", "block", "none"]}
                  fontSize={{ base: "15px", sm: "17px", md: "29px" }}
                >
                  Loanbridge Pro
                </Text>
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

const DesktopNav = ({handleGetLoanClick}) => {
  return (
    <HStack
      w="100%"
      spacing={"25px"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to={"/"}>
        <Text fontSize={"1.5rem"} fontWeight="700">
          Loanbridge Pro
        </Text>
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
        _hover={{ color: "#fff", bg: "#1d36a0" }}
        border={"1px solid blue"}
        py="6"
        fontWeight={"600"}
        onClick={handleGetLoanClick}
      >
        <HStack w="100%" justifyContent={"space-between"} spacing="10">
          <Text>Get Loan</Text>
          <Text>➜</Text>
        </HStack>
      </Button>
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/faq"}>FAQ's</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
