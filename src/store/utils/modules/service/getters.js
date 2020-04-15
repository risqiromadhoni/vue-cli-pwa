export default {
  services: state => {
    return state.services.map(m => {
      return (m.slug = m.name
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-'));
    });
  }
};