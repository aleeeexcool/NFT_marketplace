import React, { Component } from "react";

class CryptoBearNFTDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCryptoBearPrice: "",
    };
  }

  callChangeTokenPriceFromApp = (tokenId, newPrice) => {
    this.props.changeTokenPrice(tokenId, newPrice);
  };

  render() {
    return (
      <div key={this.props.cryptobear.tokenId.toNumber()} className="mt-4">
        <p>
          <span className="font-weight-bold">Token Id</span> :{" "}
          {this.props.cryptobear.tokenId.toNumber()}
        </p>
        <p>
          <span className="font-weight-bold">Name</span> :{" "}
          {this.props.cryptobear.tokenName}
        </p>
        <p>
          <span className="font-weight-bold">Minted By</span> :{" "}
          {this.props.cryptobear.mintedBy.substr(0, 5) +
            "..." +
            this.props.cryptobear.mintedBy.slice(
              this.props.cryptobear.mintedBy.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Owned By</span> :{" "}
          {this.props.cryptobear.currentOwner.substr(0, 5) +
            "..." +
            this.props.cryptobear.currentOwner.slice(
              this.props.cryptobear.currentOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Previous Owner</span> :{" "}
          {this.props.cryptobear.previousOwner.substr(0, 5) +
            "..." +
            this.props.cryptobear.previousOwner.slice(
              this.props.cryptobear.previousOwner.length - 5
            )}
        </p>
        <p>
          <span className="font-weight-bold">Price</span> :{" "}
          {window.ethers.utils.fromWei(
            this.props.cryptobear.price.toString(),
            "Ether"
          )}{" "}
          Ξ
        </p>
        <p>
          <span className="font-weight-bold">No. of Transfers</span> :{" "}
          {this.props.cryptobear.numberOfTransfers.toNumber()}
        </p>
        <div>
          {this.props.accountAddress === this.props.cryptobear.currentOwner ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.callChangeTokenPriceFromApp(
                  this.props.cryptobear.tokenId.toNumber(),
                  this.state.newCryptoBearPrice
                );
              }}
            >
              <div className="form-group mt-4 ">
                <label htmlFor="newCryptoBearPrice">
                  <span className="font-weight-bold">Change Token Price</span> :
                </label>{" "}
                <input
                  required
                  type="number"
                  name="newCryptoBearPrice"
                  id="newCryptoBearPrice"
                  value={this.state.newCryptoBearPrice}
                  className="form-control w-50"
                  placeholder="Enter new price"
                  onChange={(e) =>
                    this.setState({
                      newCryptoBearPrice: e.target.value,
                    })
                  }
                />
              </div>
              <button
                type="submit"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                className="btn btn-outline-info mt-0 w-50"
              >
                change price
              </button>
            </form>
          ) : null}
        </div>
        <div>
          {this.props.accountAddress === this.props.cryptobear.currentOwner ? (
            this.props.cryptobear.forSale ? (
              <button
                className="btn btn-outline-danger mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptobear.tokenId.toNumber()
                  )
                }
              >
                Remove from sale
              </button>
            ) : (
              <button
                className="btn btn-outline-success mt-4 w-50"
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={() =>
                  this.props.toggleForSale(
                    this.props.cryptobear.tokenId.toNumber()
                  )
                }
              >
                Keep for sale
              </button>
            )
          ) : null}
        </div>
        <div>
          {this.props.accountAddress !== this.props.cryptobear.currentOwner ? (
            this.props.cryptobear.forSale ? (
              <button
                className="btn btn-outline-primary mt-3 w-50"
                value={this.props.cryptobear.price}
                style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                onClick={(e) =>
                  this.props.buyCryptoBear(
                    this.props.cryptobear.tokenId.toNumber(),
                    e.target.value
                  )
                }
              >
                Buy For{" "}
                {window.ethers.utils.fromWei(
                  this.props.cryptobear.price.toString(),
                  "Ether"
                )}{" "}
                Ξ
              </button>
            ) : (
              <>
                <button
                  disabled
                  style={{ fontSize: "0.8rem", letterSpacing: "0.14rem" }}
                  className="btn btn-outline-primary mt-3 w-50"
                >
                  Buy For{" "}
                  {window.ethers.utils.fromWei(
                    this.props.cryptobear.price.toString(),
                    "Ether"
                  )}{" "}
                  Ξ
                </button>
                <p className="mt-2">Currently not for sale!</p>
              </>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

export default CryptoBearNFTDetails;