import {AxiosError} from "axios";
import Notification from "./notification";

class ErrorHandler {
  static handleRequestError(error: AxiosError) {
    try {
      const e = error.response.data;
      switch (e.type) {
        case "validation":
          Notification.showError(e.errors.join("\n"));
          return;
        default:
      }
    } catch(e) {
      throw error;
    }
  }
}

export default ErrorHandler;