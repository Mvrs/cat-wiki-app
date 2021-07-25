import { config } from "dotenv";
config();

export const port = Number(process.env.PORT);
export const catAPIKey = process.env.CAT_API_KEY;
export const mong_uri = process.env.MONGO_URI as string;
