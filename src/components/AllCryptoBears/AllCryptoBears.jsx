import React, { useState, useEffect } from "react";
import CryptoBearNFTImage from "../CryptoBearNFTImage/CryptoBearNFTImage";
import CryptoBearNFTDetails from "../CryptoBearNFTDetails/CryptoBearNFTDetails";
import Loading from "../Loading/Loading";

const AllCryptoBears = ({
  cryptoBears,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyCryptoBear,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cryptoBears.length !== 0) {
      if (cryptoBears[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [cryptoBears]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoBear's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {cryptoBears.map((cryptobear) => {
          return (
            <div
              key={cryptobear.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <CryptoBearNFTImage
                  colors={
                    cryptobear.metaData !== undefined
                      ? cryptobear.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <CryptoBearNFTDetails
                cryptobear={cryptobear}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyCryptoBear={buyCryptoBear}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCryptoBears;