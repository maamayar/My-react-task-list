import React from "react";
import { Box, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "teal.300" : "teal.500"} 
      fontSize="3xl"
      borderRadius="15px"
      marginTop="20px"
    >
      Task List
      <Flex direction="row" mt="5" justifyContent="center" alignItems={{ base: "center", md: "flex-start" }}>
        <Button 
          as={NavLink} 
          to="/" 
          p="2" 
          fontSize="lg" 
          variant="ghost"
          activeClassName="active"
          mx="8" 
        >
          Home
        </Button>
        <Button 
          as={NavLink} 
          to="/tasks" 
          p="2" 
          fontSize="lg" 
          variant="ghost"
          activeClassName="active"
          mx="8" 
        >
          Task List
        </Button>
        <Button 
          as={NavLink} 
          to="/about" 
          p="2" 
          fontSize="lg" 
          variant="ghost"
          activeClassName="active"
          mx="8" 
        >
          About us
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
