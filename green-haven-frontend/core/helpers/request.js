import axios from "axios";
import { local } from "./localStorage";

export const sendRequest = async ({
  route,
  body,
  method = "GET",
}) => {

  try {
    const response = await axios.request({
      url: `http://192.168.0.10:8000/${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${local('token')}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
