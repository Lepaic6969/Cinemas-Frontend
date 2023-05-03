const isAuthGuard = async (to, from, next) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    next();
  } else {
    next({ name: "home" });
  }
};

export default isAuthGuard;
