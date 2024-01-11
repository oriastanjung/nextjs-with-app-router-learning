// import { URL_BACKEND } from "@/config";
const backend = "http://127.0.0.1:1337";
import axios from "axios";
import { writeFileSync } from "node:fs";
import QueryString from "qs";

const url = `${backend}/api/reviews?${QueryString.stringify(
  {
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 6 },
    sort : ['publishedAt:desc']
  },
  { encodeValuesOnly: true }
)}`;
console.log(url);
const res = await axios.get(url);
const body = res.data.data;
const file = "scripts/strapi-response.json";
writeFileSync(file, JSON.stringify(body, null, 2), "utf8");
