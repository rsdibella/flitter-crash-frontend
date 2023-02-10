

const haveRoleGuard = (to, from, next) => {

  const token = localStorage.getItem("token");

  if (token) {
    next();
  } 
  else {
    next({ name: "loginView" });
  }
};

export default haveRoleGuard;