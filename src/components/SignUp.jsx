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

function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" variant="outline" size="sm" onClick={onOpen}>
        SignUp
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SignUp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  First Name
                </label>
                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputAddress"
                />
              </div>
              <div class="col-md-6">
                <label for="inputAddress2" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputAddress2"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  Re-Enter Password
                </label>
                <input type="password" class="form-control" id="inputCity" />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
          <Button colorScheme="blue" mr={3} >
                SignUp
              </Button>
              <Button  onClick={onClose} variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUp;
