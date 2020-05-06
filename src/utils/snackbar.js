import "node-snackbar/dist/snackbar.min.css";
import Snackbar from "node-snackbar";
import i18n from "@/plugins/i18n";

const snackbar = {
  noAction: text => {
    return Snackbar.show({
      showAction: false,
      text: text,
      pos: "bottom-center"
    });
  },
  actionText: (text, title = i18n.t("close")) => {
    return Snackbar.show({
      text: i18n.t(text),
      actionText: title,
      actionTextColor: "#ff9800",
      pos: "bottom-center"
    });
  }
};

export default snackbar;
