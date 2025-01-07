const date = new Date();
export const timestamp =
  date.getFullYear() +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  ("0" + date.getDate()).slice(-2) +
  ("0" + date.getHours()).slice(-2) +
  ("0" + date.getMinutes()).slice(-2) +
  ("0" + date.getSeconds()).slice(-2);

export const shortCode = process.env.PESA_PAYBILL;

export const passkey = process.env.MPESA_PASSKEY;

export const callbackurl = process.env.CALLBACK_URL;

export const consumer_key = process.env.MPESA_CONSUMER_KEY;

export const consumer_secret = process.env.MPESA_CONSUMER_SECRET;

export const password = new Buffer.from(
  shortCode + passkey + timestamp
).toString("base64");

export const whiteListedIps = [
  "196.201.214.200",
  "196.201.214.206",
  "196.201.213.114",
  "196.201.214.207",
  "196.201.214.208",
  "196. 201.213.44",
  "196.201.212.127",
  "196.201.212.138",
  "196.201.212.129",
  "196.201.212.136",
  "196.201.212.74",
  "196.201.212.69",
];
