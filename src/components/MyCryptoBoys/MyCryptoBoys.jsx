import React, { useState, useEffect } from "react";
import CryptoBearNFTImage from "../CryptoBearNFTImage/CryptoBearNFTImage";
import MyCryptoBearNFTDetails from "../MyCryptoBearNFTDetails/MyCryptoBearNFTDetails";
import Loading from "../Loading/Loading";

const MyCryptoBears = ({
  accountAddress,
  cryptoBears,
  totalTokensOwnedByAccount,
}) => {
  const [loading, setLoading] = useState(false);
  const [myCryptoBears, setMyCryptoBears] = useState([]);

  useEffect(() => {
    if (cryptoBears.length !== 0) {
      if (cryptoBears[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
    const my_crypto_bears = cryptoBears.filter(
      (cryptobear) => cryptobear.currentOwner === accountAddress
    );
    setMyCryptoBears(my_crypto_bears);
  }, [cryptoBears]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of CryptoBear's You Own : {totalTokensOwnedByAccount}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {myCryptoBears.map((cryptobear) => {
          return (
            <div
              key={cryptobear.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              <div className="row">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6 text-center">
                  <MyCryptoBearNFTDetails
                    cryptobear={cryptobear}
                    accountAddress={accountAddress}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCryptoBears;