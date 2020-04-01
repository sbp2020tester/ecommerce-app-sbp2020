import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="product"
                    style={{
                      maxHeight: "500px",
                      width: "auto",
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2 className="text-capitalize">model: {title}</h2>
                  <h4 className="text-muted mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <br />
                  <h4 className="text-blue text-capitalize">
                    <strong>
                      price: <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    Some info about product:
                  </p>
                  <p className="text-muted">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
