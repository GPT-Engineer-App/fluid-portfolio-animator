import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Link, Button, IconButton, useColorModeValue, Flex, Spacer, Slide, useDisclosure, Collapse, SlideFade, ScaleFade } from "@chakra-ui/react";
import { FaBars, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  { name: "Chai Chata", url: "https://henrynicholson.online/chaichata" },
  { name: "STEEZ", url: "https://henrynicholson.online/Steez" },
  { name: "Out Of Style", url: "https://henrynicholson.online/oos" },
  { name: "Uflo", url: "https://Uflo.io" },
  { name: "Illicit Elixirs", url: "https://illicitelixirs.com" },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  const handlePrevProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const bg = "var(--background)";
  const color = "var(--text)";
  const primary = "var(--primary)";
  const secondary = "var(--secondary)";
  const accent = "var(--accent)";

  return (
    <Box bg={bg} color={color} minH="100vh" overflow="hidden">
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <Flex p={4} alignItems="center" bg={`linear-gradient(to right, ${secondary}, ${primary})`} boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
          <Heading size="lg" color={accent} textShadow="0 0 5px rgba(0, 0, 0, 0.5)">
            Henry Nicholson
          </Heading>
          <Spacer />
          <IconButton icon={isOpen ? <FaTimes /> : <FaBars />} variant="ghost" onClick={onToggle} display={{ md: "none" }} aria-label="Toggle Navigation" />
        </Flex>
      </motion.div>

      <VStack p={8} spacing={8} align="stretch">
        <SlideFade in={true} offsetY="20px">
          <Heading size="xl" textAlign="center" color={primary} textShadow="0 0 10px rgba(0, 0, 0, 0.5)">
            Projects
          </Heading>
        </SlideFade>
        <Box position="relative" w="100%" h="200px" overflow="hidden">
          <Flex position="absolute" top={0} left={0} w="100%" h="100%" alignItems="center" transition="transform 0.5s" transform={`translateX(-${selectedProjectIndex * 100}%)`}>
            {projects.map((project, index) => (
              <Box key={project.name} w="100%" h="100%" p={4} bg={accent} color={secondary} cursor="pointer" onClick={() => setSelectedProject(project)} display="flex" alignItems="center" justifyContent="center" flexDirection="column" transition="background-color 0.3s" _hover={{ bg: primary }}>
                <Heading size="lg" mb={2}>
                  {project.name}
                </Heading>
                <Text>{project.description}</Text>
              </Box>
            ))}
          </Flex>
          <Flex position="absolute" top="50%" transform="translateY(-50%)" w="100%" justifyContent="space-between" px={4}>
            <IconButton icon={<FaChevronLeft />} onClick={handlePrevProject} aria-label="Previous Project" variant="ghost" />
            <IconButton icon={<FaChevronRight />} onClick={handleNextProject} aria-label="Next Project" variant="ghost" />
          </Flex>
        </Box>
      </VStack>

      <ScaleFade initialScale={0.9} in={selectedProject !== null}>
        {selectedProject && (
          <Box p={8} display="flex" justifyContent="center">
            <Box maxW="sm" borderWidth={1} borderRadius="lg" overflow="hidden" bg={secondary} boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
              <Box p={4}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Text fontWeight="bold" fontSize="xl" color={accent} textShadow="0 0 5px rgba(0, 0, 0, 0.5)">
                    {selectedProject.name}
                  </Text>
                  <IconButton icon={<FaTimes />} onClick={() => setSelectedProject(null)} aria-label="Close Project" variant="ghost" color={accent} />
                </Flex>
              </Box>
              <Box p={4} className="iframe-container">
                <iframe title={selectedProject.name} src={selectedProject.url} width="100%" height="100%" />
              </Box>
            </Box>
          </Box>
        )}
      </ScaleFade>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <VStack p={8} spacing={4}>
          <Heading size="lg" color={primary} textShadow="0 0 10px rgba(0, 0, 0, 0.5)">
            Connect with Me
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://www.linkedin.com/in/yourprofile" isExternal>
              <Button colorScheme="blue" size="lg" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://www.instagram.com/yourprofile" isExternal>
              <Button colorScheme="pink" size="lg" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
                Instagram
              </Button>
            </Link>
            <Link href="mailto:youremail@example.com">
              <Button colorScheme="teal" size="lg" boxShadow="0 0 10px rgba(0, 0, 0, 0.5)">
                Email
              </Button>
            </Link>
          </HStack>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Index;
