import { Box, Container, Heading, SimpleGrid, Text, Stack, Button, Image, Icon, useColorModeValue, VStack, HStack } from "@chakra-ui/react";
import { FaDesktop, FaGamepad, FaChalkboardTeacher, FaShoppingBasket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"6xl"} p="12">
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Welcome to ShanTech Hub
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Your one-stop tech hub for gaming equipment, projectors, screens, and educational courses in Kenya.
        </Text>
      </VStack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} pt={16}>
          <ProductCard icon={FaDesktop} title={"Gaming Equipment"} text={"High-quality gaming PCs, consoles, and accessories to enhance your gaming experience."} />
          <ProductCard icon={FaGamepad} title={"Projectors & Screens"} text={"Top-notch projectors and screens for your home theater or professional presentations."} />
          <ProductCard icon={FaChalkboardTeacher} title={"Educational Courses"} text={"Learn new skills with our variety of tech-related courses."} />
          <ProductCard
            icon={FaShoppingBasket}
            title={"Shop Now"}
            text={"Explore our latest products and start shopping today!"}
            action={
              <Button
                mt={10}
                w={"full"}
                bg={useColorModeValue("yellow.400", "yellow.500")}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: useColorModeValue("yellow.500", "yellow.600"),
                }}
                _focus={{
                  bg: useColorModeValue("yellow.500", "yellow.600"),
                }}
              >
                <FaShoppingBasket />
                &nbsp;Start Shopping
              </Button>
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const ProductCard = ({ icon, title, text, action }) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" w={{ sm: "100%", md: "540px" }} height={{ sm: "476px", md: "20rem" }} direction={{ base: "column", md: "column" }} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} padding={4}>
      <HStack spacing={4} align={"top"}>
        <Box display={"inline-flex"} rounded={"full"} bg={"gray.100"} p={2}>
          <Icon as={icon} w={10} h={10} />
        </Box>
        <VStack align={"start"}>
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Text color={"gray.600"}>{text}</Text>
        </VStack>
      </HStack>
      {action && <Box mt={8}>{action}</Box>}
    </Stack>
  );
};

export default Index;
