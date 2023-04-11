import React from "react";
import { Box } from "@chakra-ui/react";

import MyForm from "./Form";

export default function SingleForm() {
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
        <Box h="auto">
          {/* <Heading
            w="100%"
            textAlign={"center"}
            fontSize="25px"
            fontWeight="600"
            mb="2%"
            color="#242f65"
          >
            How Much Do You Need?
          </Heading> */}

          <MyForm />
        </Box>
      </Box>
    </>
  );
}
