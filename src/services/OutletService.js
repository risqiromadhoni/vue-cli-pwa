import Base from "@/services";

export default {
  getOutlet() {
    return Base().get("/outlet");
  }
};
