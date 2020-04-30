import { capitalizeNoSpace } from "@/utils/helper";

export default {
  services: state => {
    return state.services.map(m => {
      m.route = capitalizeNoSpace(m.title);
      return m;
    });
  }
};
