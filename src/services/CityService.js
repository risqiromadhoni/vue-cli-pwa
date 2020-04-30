import Base from "@/services";

export default {
  getCity() {
    return Base().get("/city");
  }
};
