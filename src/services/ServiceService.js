import Base from "@/services";

export default {
  getService() {
    return Base().get("/service");
  }
};
