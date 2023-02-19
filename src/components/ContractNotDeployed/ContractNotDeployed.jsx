import React from "react";

const ContractNotDeployed = () => {
  return (
    <div className="jumbotron">
      <h3>Crypto Bears contract not deployed to this network.</h3>
      <hr className="my-4" />
      <p className="lead">
        Connect metamask to Goerli Testnet or localhost running a custom RPC
        like Hardhat.
      </p>
    </div>
  );
};

export default ContractNotDeployed;