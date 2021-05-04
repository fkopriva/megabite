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
    {
      name: "haven",
      image: "./images/nahledhaven.jpg",
      description: "sadfasskfsf",
    },
    {
      name: "karakin",
      image: "./images/nahledkarakin.jpg",
      description: "sfasffasd",
    },
    {
      name: "paramo",
      image: "./images/nahledparamo.jpg",
      description: "sfasffasd",
    },
    {
      name: "sanhok",
      image: "./images/nahledsanhok.jpg",
      description: "sfasffasd",
    },
    {
      name: "vikendi",
      image: "./images/nahledvikendi.jpg",
      description: "sfasffasd",
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
