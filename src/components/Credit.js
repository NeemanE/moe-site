import React, { useEffect } from "react";
import Payment from "./Payment";
import FormToggler from "./buyNow";
import CreditRepairPackages from "./Table";

const Credit = () => {
  return (
    <section>
      <div className="credit-row">
        <div>
          <iframe
            className="credit-iframe"
            name="frame_lead"
            id="frame_lead"
            src="https://www.clientdisputemanager.com/WebLeads?crepto=241483"
            height="400"
            width="500"
            data-txtheaderfontsize="10"
            data-txtheaderfontcolor="#e8f5f7"
            data-txtbgcolcor="#ffffff"
            data-txtheadercolor="#000080"
            data-txtbuttoncolor="#000080"
            data-txtcolor="na"
          ></iframe>
        </div>
        <div className="sign-up">
          <h1>Sign up to begin your credit restoration journey.</h1>
          <p className="sign-p">
            Take the first step to raising your credibility by filling out the
            form today. We will reach out to you as soon as possible, and you
            can relax knowing that we here at Protocall will guide you every
            step of the way.
          </p>
        </div>
      </div>
      <CreditRepairPackages />
      {/* <FormToggler className="authForm" /> */}
    </section>
  );
};

export default Credit;
