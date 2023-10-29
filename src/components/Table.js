import React from "react";
import { FaArrowCircleRight, FaCheck } from "react-icons/fa";
import "../CreditRepairPackages.css"; // Import a CSS file for styling

const CreditRepairPackages = () => {
  return (
    <div className="centered-container">
      <h2>Credit Repair Packages</h2>
      <table className="outlined-table"> {/* Add a class to the table */}
        <thead>
          <tr>
            <th>Package</th>
            <th>Features</th>
            <th>Purchase Now!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="package-name">Starter Package - $99.99</td>
            <td>
              <ul className="package-table">
                <li>Minimum Negative Deletions</li>
                <li>Minor Disputes</li>
                <li>Basic Clean Up</li>
                <li>Includes Opt-Out Reporting</li>
                <li>
                  Up to 10 deletions and 10 late payments updated (2-3 months
                  turn around)
                </li>
              </ul>
            </td>
            <td>
              <form
                name="PrePage3"
                method="post"
                action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
              >
                <input
                  type="hidden"
                  name="LinkId"
                  value="d8cf079b-ba18-4b38-8dd2-2160e69154b3"
                />
                <input
                  type="image"
                  src="//content.authorize.net/images/buy-now-gray.gif"
                />
              </form>
            </td>
          </tr>
          <tr>
            <td className="package-name">General Package - $149.99</td>
            <td>
              <ul className="package-table">
                <li>Standard Negative Deletions</li>
                <li>Standard Credit Disputes</li>
                <li>Correct Payment History</li>
                <li>New trade lines up to $3500.00 - additional fees apply</li>
                <li>Includes Opt-Out Reporting</li>
                <li>Up to 20 deletions and 20 late payments updated</li>
              </ul>
            </td>
            <td>
              <form
                name="PrePage2"
                method="post"
                action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"
              >
                <input
                  type="hidden"
                  name="LinkId"
                  value="0212c3ce-af64-441e-a41b-9b63528240b3"
                />
                <input
                  type="image"
                  src="//content.authorize.net/images/buy-now-gold.gif"
                />
              </form>
            </td>
          </tr>
          <tr>
            <td className="package-name">Premium Package - $349.99</td>
            <td>
              <ul className="package-table">
                <li>
                  Advanced Deletions and Public records (repossessions,
                  bankruptcy, tax liens and judgments, etc.)
                </li>
                <li>Heavy Credit Disputes</li>
                <li>Bad Debt Collector Disputes</li>
                <li>Correct Negative Payment Histories</li>
                <li>
                  Access to New Lines of credit up to $3,500.00 - additional
                  fees apply
                </li>
                <li>Includes Opt-Out Reporting</li>
                <li>Unlimited Deletions / Unlimited Late Payments Updated</li>
              </ul>
            </td>
            <td>
              <form
                name="PrePage1"
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
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Payment plans available! Please note, trade-lines have a one-time set-up
        fee which is paid by the customer. Call today for more information on
        how we can get you both good credit and a good life.
      </p>
    </div>
  );
};

export default CreditRepairPackages;
