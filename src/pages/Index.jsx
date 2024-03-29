import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Link, IconButton, useColorModeValue, Flex, Spacer, Slide, useDisclosure, Collapse } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

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

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color} minH="100vh">
      <Flex p={4} alignItems="center">
        <Heading size="lg">Henry Nicholson</Heading>
        <Spacer />
        <IconButton icon={isOpen ? <FaTimes /> : <FaBars />} variant="ghost" onClick={onToggle} display={{ md: "none" }} aria-label="Toggle Navigation" />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {projects.map((project) => (
            <Link key={project.name} onClick={() => setSelectedProject(project)}>
              {project.name}
            </Link>
          ))}
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack p={4} spacing={4} align="stretch">
          {projects.map((project) => (
            <Link
              key={project.name}
              onClick={() => {
                setSelectedProject(project);
                onToggle();
              }}
            >
              {project.name}
            </Link>
          ))}
        </VStack>
      </Collapse>

      <Slide direction="bottom" in={selectedProject !== null} style={{ zIndex: 10 }}>
        <Box p={4} borderTopWidth={1} borderColor="gray.200">
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontWeight="bold">{selectedProject?.name}</Text>
            <IconButton icon={<FaTimes />} onClick={() => setSelectedProject(null)} aria-label="Close Project" variant="ghost" />
          </Flex>
          <Box mt={4} h="50vh">
            <iframe title={selectedProject?.name} src={selectedProject?.url} width="100%" height="100%" />
          </Box>
        </Box>
      </Slide>

      <VStack p={4} spacing={4}>
        <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
          <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
        </Link>
        <Link href="https://www.instagram.com/yourprofile" isExternal>
          <IconButton icon={<FaInstagram />} aria-label="Instagram" />
        </Link>
        <Link href="mailto:youremail@example.com">
          <IconButton icon={<FaEnvelope />} aria-label="Email" />
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;
