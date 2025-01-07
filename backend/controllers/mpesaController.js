import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { consumer_key, consumer_secret } from "./mpesaConstants.js";

let token;
// get access token
const getAccesToken = async (req, res, next) => {
  const auth = btoa(`${consumer_key}:${consumer_secret}`);

  const config = {
    headers: {
      authorization: `Basic ${auth}`,
    },
  };

  await axios
    .get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      config
    )
    .then((response) => {
      token = response.data?.access_token;
      next();
    })
    .catch((error) => {
      console.error(`Error getting m-pesa token: \n ${error}`);
      next(error);
    });
  // return response.data;
};

// stk push
const stkPush = async (req, res) => {
  try {
    const { phone, amount } = req.body;

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: 174379,
        Password:
          "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMjIwMTU1ODUx",
        Timestamp: "20231220155851",
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: 174379,
        PhoneNumber: `254${phone}`,
        // CallBackURL: `https://eazzyhire-88rn.onrender.com/api/mpesa/callback-route`,
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(StatusCodes.OK).json({ msg: "requested" });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json(error.message || "stk push error");
  }
};

// callback
// const callback = async (req, res) => {
//   try {
//     // const ipAddress = req.connection.remoteAddress;

//     // if (!whiteListedIps.includes(ipAddress)) {
//     //   return res.status(StatusCodes.FORBIDDEN).json("Forbidden");
//     // }

//     const data = req.body.Body.stkCallback;

//     //check for failed/incomplete transactions
//     if (!data.CallbackMetadata) {
//       console.log(data.ResultDesc);
//       console.log("failed");
//       res.status(200).json("ok");
//       return;
//     }

//     // handle successfull payment
//     const transactionDetails = {
//       MerchantRequestID: data.MerchantRequestID,
//       CheckoutRequestID: data.CheckoutRequestID,
//       ResultCode: data.ResultCode,
//       ResultDesc: data.ResultDesc,
//       Amount: data.CallbackMetadata?.Item[0].Value,
//       MpesaReceiptNumber: data.CallbackMetadata?.Item[1].Value,
//       Balance: data.CallbackMetadata?.Item[2].Value,
//       TransactionDate: data.CallbackMetadata?.Item[3].Value,
//       PhoneNumber: data.CallbackMetadata?.Item[4].Value,
//     };

//     const transaction = new TransactionsSchema(transactionDetails);

//     await transaction.save();

//     await updateUserPlanDetails(data.CheckoutRequestID);
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).json("unable to save transaction");
//   }
// };

// // stk query
// const stkPushQuery = async (req, res) => {
//   try {
//     const { CheckoutRequestID } = req.params;

//     const response = await axios.post(
//       "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
//       {
//         BusinessShortCode: 174379,
//         Password:
//           "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMjIwMTU1ODUx",
//         Timestamp: "20231220155851",
//         CheckoutRequestID: CheckoutRequestID,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log(response.data);

//     res.status(StatusCodes.OK).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(StatusCodes.BAD_REQUEST).json(error?.message);
//   }
// };

export { getAccesToken, stkPush };
