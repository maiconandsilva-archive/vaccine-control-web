import axios from "axios";
import settings from "../settings";

// class Requests {
//   defaultSendProps = {
//     method: "get",
//   };
//
//   constructor(config) {
//     this.sender = axios.create(config);
//   }
//
//   send(opts) {
//     try {
//       const options = {...this.defaultSendProps, ...opts}
//       return this.sender.request(options);
//     } catch (e) {
//       const error = e.response.data;
//       switch (error.type) {
//         case "validation":
//           return console.log(error.errors.join("\n"));
//         default:
//       }
//     }
//   }
// }

const requests = axios.create({
  baseURL: settings.BASE_URL,
});

requests.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token != null) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default requests;