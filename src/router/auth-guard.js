const isAuthGuard = async (to, from, next) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    next();
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("MovieSelector");
    localStorage.removeItem("Sala");
    localStorage.removeItem("showModal");
    localStorage.removeItem("total");
    localStorage.removeItem("SalaId");
    next({ name: "home" });
  }
};

export default isAuthGuard;
