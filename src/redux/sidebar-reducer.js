let initialState = [
  { path: "/profile", link: "Profile", id: 1 },
  { path: "/messages", link: "Messages", id: 2 },
  { path: "/news", link: "News", id: 3 },
  { path: "/music", link: "Music", id: 4 },
  { path: "/settings", link: "Settings", id: 5 },
];

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
