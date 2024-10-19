import styles from "./Header.module.css";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import logo from "../images/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";



function Header() {


  return (
    <>
      <div className={styles.header}>
        <div className="row mt-2 mx-5">
          
          <Stack direction="row" spacing={4} className="justify-content-end">
          <img src={logo} alt="" className={styles.logo} />
            <SignUp/>
            <Login/>
          </Stack>
        </div>
        <div className="row text-center mt-4 text-white">
          <h1 className={styles.h1}>Let's Book Your Flight</h1>
          <p className={styles.p}>Make your Flight journey Memorable</p>
        </div>
      </div>
      
    </>
  );
}

export default Header;
