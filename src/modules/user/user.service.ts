import { User } from "./user.types";

// getting the user info

const getUserFromDB = (): User => {
  return {
    id: 1,
    name: "the script-sage",
    email: "thesage@gmail.com",
  };
};

export default getUserFromDB;
