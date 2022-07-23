import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'
import styles from "../styles/payment.module.css";
import { Cards,Button,Box } from "@chakra-ui/react";
import { PinInput,HStack, PinInputField } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const CreditCard = () => {

  const [otp,setotp]=useState(false)
  const navigate=useNavigate()

  function final(){
    setotp(!otp)
     
  }



  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  



  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  return (
    <>
      {/* <div className="rccs__card backcolor"> */}

      <div clasName="rccs__card rccs__card--unknown">
        {/* <Cards>
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
          </Cards> */}
      </div>

      <br />
     
     <form>
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Number</label>
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col=sm-8"
            style={{
              ...{ "padding-right": "12em" },
              ...{ "padding-left": "1em" }
            }}
          >
            <label for="month">Expiration Date</label>
          </div>
          <div className="col=sm-4">
            <label for="cvv">CVV</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleDate}
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleExpiry}
            >
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
          <div className="col-sm-3">
            <input
              type="tel"
              name="cvc"
              maxlength="3"
              className=" form-control card"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <Button backgroundColor="black" color="white" width="350px"
        onClick={()=>final()}>
          SUBMIT</Button>  
          <br />
          <br />
          { otp ?
     <Box margin="auto" width="40%">
     <Heading as='h3' size='lg'>
    Enter OTP 
  </Heading>
      <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField  onChange={()=>navigate("/order")} />
  </PinInput>
</HStack>
     </Box>:null}
      </form>
    </>
  );
};
export default CreditCard;
