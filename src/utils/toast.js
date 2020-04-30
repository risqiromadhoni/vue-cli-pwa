import "izitoast/dist/css/iziToast.min.css";
import iZtoast from "izitoast";
import i18n from "@/plugins/i18n";

/* toast - START */
// Description : toast is for message info for make simple use iztoast.
// Author : Risqi Romadhoni <risqir57@gmail.com>
// Created on : Tue, 29 January 2019.   Updated on : Tue, 29 January 2019.
// Created by : Risqi Romadhoni <risqir57@gmail.com>       Updated by : Risqi Romadhoni <risqir57@gmail.com>
/* Version : 1.0:1. */

const toast = {
  error: (message, title = i18n.t("error")) => {
    return iZtoast.error({
      title: title,
      message: message,
      position: "bottomCenter"
    });
  },
  warning: (message, title = i18n.t("warning")) => {
    return iZtoast.warning({
      title: title,
      message: message,
      position: "bottomCenter"
    });
  },
  success: (message, title = i18n.t("success")) => {
    return iZtoast.success({
      title: title,
      message: message,
      position: "bottomCenter"
    });
  }
};

export default toast;

/* toast - END */
