import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl">Your one-stop shop for the latest electronics</Text>
        <Box mt={8}>
          <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" borderRadius="md" />
        </Box>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$199.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product4.jpg" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact Us: info@electroshop.com</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;