let state = {
  sidebar: [
    { path: "/profile", link: "Profile", id: 1 },
    { path: "/messages", link: "Messages", id: 2 },
    { path: "/news", link: "News", id: 3 },
    { path: "/music", link: "Music", id: 4 },
    { path: "/settings", link: "Settings", id: 5 },
  ],
  dialogsPage: {
    messages: [
      { id: 1, text: "Hello" },
      { id: 2, text: "How are you?" },
    ],
    dialogs: [
      { id: 1, name: "Oleg" },
      { id: 2, name: "Max" },
    ],
  },
  profilePage: {
      posts: [
        {id:1,text:"Hello everyone"},
        {id:2,text:"I am new at this"}
      ]
  }
};

export default state;
