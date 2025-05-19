import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

const APP_ID = process.env.COMETCHAT_APP_ID;
const API_KEY = process.env.COMETCHAT_API_KEY;
const REGION = process.env.COMETCHAT_REGION; // just to be safe

app.post("/api/register-user", async (req, res) => {
  const { uid, name } = req.body;

  const url = `https://${APP_ID}.api-${REGION}.cometchat.io/v3/users`;

  try {
    const response = await axios.post(
      url,
      { uid, name },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          appId: APP_ID,
          apiKey: API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: error.message });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
