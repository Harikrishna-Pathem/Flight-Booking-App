import { useState } from "react";
import { useDisclosure, Button, Input } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("example@gmail.com");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={onOpen}>
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login </ModalHeader>
          <ModalCloseButton />
          <form action="">
            <ModalBody>
              <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
               
              </FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password"   />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} >
                Login
              </Button>
              <Button  onClick={onClose} variant="ghost">Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
