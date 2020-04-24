import * as moment from "moment";

export function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
export function date(value, format) {
  if (value) {
    if (format) {
      return moment(value).format(format);
    } else {
      return moment(value).format("DD/MM/YYYY");
    }
  }
  return "";
}
export function translate(
  obj,
  locale,
  en_label = "name",
  id_label = "translation"
) {
  if (obj) {
    if (locale === "en") {
      return obj[en_label];
    }
    return obj[id_label];
  }
  return "";
}
export function accountTypeCurrency(value) {
  if (value) {
    value = parseInt(value);
    if (value === 0) {
      return "FREE";
    }

    value = value.toString();
    let result = parseInt(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1.");
    return `${result.substr(0, result.length - 3)}`;
  }
  return "";
}
export function formater(value) {
  if (value) {
    value = value.toString();
    let result = parseInt(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1.");
    return result.substr(0, result.length - 3);
  } else {
    return 0;
  }
}
export function deformater(value) {
  if (value) {
    value = value.toString();
    let result = parseInt(value.replace(/,.*|[^0-9]/g, ""));
    return result;
  } else {
    return 0;
  }
}
export function fileToURL(value) {
  if (value instanceof File) {
    return URL.createObjectURL(value);
  }
  return value;
}
export function uppercase(value) {
  if (value) {
    return value.toString().toUpperCase();
  }
  return "";
}
export function capitalize(value) {
  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
  };

  if (value) {
    return value.toString().capitalize();
  }
  return "";
}
export function capitalizeNoSpace(value) {
  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase().replace(/ +/g, "");
    });
  };

  if (value) {
    return value.toString().capitalize();
  }
  return "";
}
export function replace(value, replace, replaced) {
  if (value) {
    return value.toString().replace(replace, replaced);
  }
  return "";
}

export function randString(length = 6) {
  return Math.random()
    .toString(20)
    .toUpperCase()
    .substr(2, length);
}

export function intToIdr(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(value);
}
