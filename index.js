const axois = require("axios");
require("dotenv").config();
console.log(process.env.INFURA_API_KEY);
console.log(process.env.INFURA_API_KEY_SECRET);

const Auth = Buffer.from(
  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET
).toString("base64");

const chainId = 1;

const getGasPrice = async () => {
  const { data } = await axois.get(
    `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
    {
      headers: {
        Authorization: `Basic ${Auth}`,
      },
    }
  );
  //   console.log(data);
};

getGasPrice().catch((err) => console.log(err));
