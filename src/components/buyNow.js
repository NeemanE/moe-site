import React, { Component } from "react";

class FormToggler extends Component {
  render() {
    return (
      <div>
        <div>
          <form
            name="PrePage"
            method="post"
            action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
          >
            <input
              type="hidden"
              name="LinkId"
              value="2ea7ac88-b983-4452-b1c3-66925ffe803e"
            />
            <input
              type="image"
              src="//content.authorize.net/images/buy-now-blue.gif"
            />
          </form>
        </div>
        <div>
          <form
            name="PrePage"
            method="post"
            action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
          >
            {" "}
            <input
              type="hidden"
              name="LinkId"
              value="0212c3ce-af64-441e-a41b-9b63528240b3"
            />{" "}
            <input
              type="image"
              src="//content.authorize.net/images/buy-now-gold.gif"
            />{" "}
          </form>
        </div>
        <div>
          <form
            name="PrePage"
            method="post"
            action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
          >
            {" "}
            <input
              type="hidden"
              name="LinkId"
              value="d8cf079b-ba18-4b38-8dd2-2160e69154b3"
            />{" "}
            <input
              type="image"
              src="//content.authorize.net/images/buy-now-gray.gif"
            />{" "}
          </form>
        </div>
      </div>
    );
  }
}

export default FormToggler;
