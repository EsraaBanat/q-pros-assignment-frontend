import axios from "axios";
export async function requestBuilder({ path, method = "Post", data }) {
  try {
    // let token = localStorage.getItem("token");
    // if (token) token = JSON.parse(token);

    // if (!ContentType) {
    //   ContentType = "application/json";
    // }
    let config = {
      method: method,
      url: "https://q-pros-assignment.up.railway.app/" + path,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      data,
    };
    return await axios(config);
  } catch (error) {
    // if (
    //   error.response?.data?.message ===
    //     "You are not authorized to access this resource." ||
    //   error.response?.data?.message ===
    //     "Access token expired. Failed to refresh access token."
    // ) {
    //   localStorage.clear();
    //   window.location.reload();
    // }
    // if (error.response && error.response.data) {
    //   throw error.response.data;
    // } else {
    console.log("error", error);
    throw error;
    // }
  }
}
