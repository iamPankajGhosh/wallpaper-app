import axios from "axios";

const API_KEY = "43763293-ff5b1334dce86dcb598cbc946";
const URL = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = URL + "&per_page=25&safesearch=true&editors_choice=true";
  if (!params) return url;
  let paramsKeys = Object.keys(params);
  paramsKeys.map((key) => {
    let value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  return url;
};

export const apiCall = async (params) => {
  try {
    await axios.get(formatUrl(params));
  } catch (error) {
    console.log(error);
    return { success: "false", message: error.message };
  }
};
