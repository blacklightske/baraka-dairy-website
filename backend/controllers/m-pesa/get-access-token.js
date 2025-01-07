import axios from "axios";

const getAccesToken = async (req, res, next) => {
  try {
    const auth = Buffer.from(
      `yma7MFTIuBkg6HOi9SsnSH0ALaJXcjUCeG1g7N7VmGYnLDc2:Ojj9GeEjyvq841KBUsmG9kpmsoSvuehfGB5ZBGiIvhBaInaB4xmruScKtIeE0C71`
    ).toString("base64");

    const config = {
      headers: {
        authorization: `Basic ${auth}`,
      },
    };

    const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      config
    );

    const token = response.data.access_token;

    req.token = token;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default getAccesToken;
