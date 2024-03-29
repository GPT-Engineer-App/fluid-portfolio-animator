import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Link, Button, IconButton, useColorModeValue, Flex, Spacer, Slide, useDisclosure, Collapse } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const projects = [
  { name: "Chai Chata", url: "https://henrynicholson.online/chaichata" },
  { name: "STEEZ", url: "https://henrynicholson.online/Steez" },
  { name: "Out Of Style", url: "https://henrynicholson.online/oos" },
  { name: "Uflo", url: "https://Uflo.io" },
  { name: "Illicit Elixirs", url: "https://illicitelixirs.com" },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onToggle } = useDisclosure();

  const bg = "var(--background)";
  const color = "var(--text)";
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";
  const accent = "var(--accent)";

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Flex p={4} alignItems="center" bg={`linear-gradient(to right, ${secondary}, ${primary})`}>
        <Heading size="lg" color={accent}>
          Henry Nicholson
        </Heading>
        <Spacer />
        <IconButton icon={isOpen ? <FaTimes /> : <FaBars />} variant="ghost" onClick={onToggle} display={{ md: "none" }} aria-label="Toggle Navigation" />
      </Flex>

      <VStack p={8} spacing={8} align="stretch">
        <Heading size="xl" textAlign="center" color={primary}>
          Projects
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {projects.map((project) => (
            <Button key={project.name} onClick={() => setSelectedProject(project)} m={2} colorScheme="teal" size="lg">
              {project.name}
            </Button>
          ))}
        </Flex>
      </VStack>

      <Slide direction="bottom" in={selectedProject !== null} style={{ zIndex: 10 }}>
        <Box p={4} borderTopWidth={1} borderColor={accent} bg={secondary}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold" fontSize="xl">
              {selectedProject?.name}
            </Text>
            <IconButton icon={<FaTimes />} onClick={() => setSelectedProject(null)} aria-label="Close Project" variant="ghost" />
          </Flex>
          <Box mt={4} className="iframe-container">
            <iframe title={selectedProject?.name} src={selectedProject?.url} width="100%" height="100%" />
          </Box>
        </Box>
      </Slide>

      <VStack p={8} spacing={4}>
        <Heading size="lg" color={primary}>
          Connect with Me
        </Heading>
        <HStack spacing={4} justify="center">
          <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
            <Button colorScheme="blue" size="lg">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://www.instagram.com/yourprofile" isExternal>
            <Button colorScheme="pink" size="lg">
              Instagram
            </Button>
          </Link>
          <Link href="mailto:youremail@example.com">
            <Button colorScheme="teal" size="lg">
              Email
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
