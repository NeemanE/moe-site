import { HostedForm } from "react-acceptjs";
import axios from "axios";

const authData = {
  apiLoginID: process.env.REACT_APP_API_LOGIN_ID,
  clientKey: process.env.REACT_APP_CLIENT_KEY,
  transactionKey: process.env.REACT_APP_TRANSACTION_KEY,
};
console.log(authData);
const Payment = () => {
  // Define the handleSubmit function
  const handleSubmit = async (response) => {
    try {
      // Send the payment nonce to Authorize.Net for processing
      const serverResponse = await axios.post(
        "https://api.authorize.net/xml/v1/request.api",
        {
          createTransactionRequest: {
            merchantAuthentication: {
              name: authData.apiLoginID,
              transactionKey: authData.transactionKey // Replace with your actual transaction key
            },
            transactionRequest: {
              transactionType: "authCaptureTransaction", // You can adjust this based on your needs
              amount: 0.01, // Replace with your pricing logic
              payment: {
                opaqueData: {
                  dataDescriptor: response.opaqueData.dataDescriptor,
                  dataValue: response.opaqueData.dataValue,
                },
              },
            },
          },
        }
      );

      // Handle the server response (e.g., show a success message to the user)
      console.log("Server response:", serverResponse.data);
    } catch (error) {
      // Handle errors (e.g., show an error message to the user)
      console.error("Error:", error);
    }
  };

  return <HostedForm authData={authData} onSubmit={handleSubmit} />;
};

export default Payment;
