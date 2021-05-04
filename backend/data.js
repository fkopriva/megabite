import bcrypt from "bcryptjs";

const data = {
  pubgMaps: [
    {
      name: "erangel",
      image: "./images/erangel.png",
      description: "fnjashdifsadjfkasnmvokl",
    },
    {
      name: "miramar",
      image: "./images/nahledmiramar.jpg",
      description: "fsdfjsaofjksfas",
    },
  ],
  users: [
    {
      name: "admin",
      email: "admin@admin.com",
      password: bcrypt.hashSync("admin", 8),
      isAdmin: true,
    },
  ],
};

export default data;
