import { toast } from "react-toastify";

export default function Message(messageType, text) {
  const SuccessNotify = (msg) => {
    toast.success(msg);
  };
  const ErrorNotify = (msg) => {
    toast.error(msg);
  };
  if (messageType === "Success") {
    return SuccessNotify(text);
  }
  if (messageType === "Error") {
    return ErrorNotify(text);
  }
}
