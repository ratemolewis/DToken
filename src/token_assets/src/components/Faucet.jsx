import React, { useState } from "react";
import {canisterId,createActor} from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";


function Faucet() {
const [isDisable, setDisable] = useState(false);
const [buttonText, setText] = useState("Gimme gimme");

  async function handleClick(event) {
    setDisable(true);
 
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions : {
        identity,
      },
    });
    
    // const result = await token.payOut();
    const result = await authenticatedCanister.payOut(); 
    setText(result);
    setDisable(false);
  }
 
  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>               
      {/* "your account" phrase subtitute with {props.userPrincipal} on the label elemnt below.      */}
      <label>Get your free Ratemo tokens here! Claim 10,000 DANG token to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisable}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
