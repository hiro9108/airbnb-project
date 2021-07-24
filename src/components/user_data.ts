const USERS = [
  {
    id: "u1",
    name: "Ash",
    email: "ash@email.com",
    password: "Ash&1234",
    icon: "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: "u2",
    name: "Dan",
    email: "dan@email.com",
    password: "Dan&1234",
    icon: "https://images.unsplash.com/photo-1610431205421-739e027cc0ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u3",
    name: "Sarah",
    email: "sarah@email.com",
    password: "Sarah&1234",
    icon: "https://images.unsplash.com/photo-1551292831-023188e78222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u4",
    name: "Vivi",
    email: "vivi@email.com",
    password: "Vivi&1234",
    icon: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u5",
    name: "Lucy",
    email: "lucy@email.com",
    password: "Lucy&1234",
    icon: "https://images.unsplash.com/photo-1620148639493-5a7cc139813d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwZG9nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u6",
    name: "Luna",
    email: "luna@email.com",
    password: "Luna&1234",
    icon: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u7",
    name: "Kaila",
    email: "kaila@email.com",
    password: "Kaila&1234",
    icon: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u8",
    name: "John",
    email: "john@email.com",
    password: "John&1234",
    icon: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "u9",
    name: "Maria",
    email: "maria@email.com",
    password: "Maria&1234",
    icon: "https://images.unsplash.com/photo-1484360751593-36ec906bad60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFkeXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "u10",
    name: "Smith",
    email: "smith@email.com",
    password: "Smith&1234",
    icon: "https://images.unsplash.com/photo-1495434224324-36812b391125?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c21pdGh8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "u11",
    name: "Josh",
    email: "josh@email.com",
    password: "Josh&1234",
    icon: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "u12",
    name: "James",
    email: "james@email.com",
    password: "James&1234",
    icon: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "u13",
    name: "Keith",
    email: "keith@email.com",
    password: "Keith&1234",
    icon: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "u14",
    name: "Anya",
    email: "anya@email.com",
    password: "Anya&1234",
    icon: "https://images.unsplash.com/photo-1486116736668-6384736c9330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxhZHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
];
export function getAllUsers() {
  return USERS;
}
export function getUserById(id) {
  return USERS.find((user) => user.id === id);
}
