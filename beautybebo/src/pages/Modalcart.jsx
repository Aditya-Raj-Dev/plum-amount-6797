import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Box
 
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import { GiShoppingBag} from 'react-icons/gi';
import styles from "../styles/home.module.css";
import {useNavigate} from "react-router-dom";
import Cartpage from './Cartpage';
import Minicart from './Minicart';


  export default function BasicUsage() {
    const navigate=useNavigate()
    const {total}=useContext(Appcontext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button className={styles.navcartbutton}
        colorScheme="darkpink"
        onClick={onOpen}><GiShoppingBag fontSize="22px"/> CART- ₹{total}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
             
                <Minicart/>
             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={()=>{navigate("/cart")
              onClose()
              }}
              colorScheme='red'>Go To Cart</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }