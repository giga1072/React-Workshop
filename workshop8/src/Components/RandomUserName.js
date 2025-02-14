const randomUsers = [
    "user123",
    "coolguy42",
    "john_doe",
    "random_user",
    "superuser",
    "techy_tim",
    "jane_doe",
    "dev_master",
    "code_king",
    "hacker_hero",
    "web_wizard",
    "frontend_fanatic",
    "react_rocks",
    "node_ninja",
    "css_guru",
    "angular_ace",
    "vue_veteran",
    "js_junkie",
    "code_crusader",
    "programmer_pro",
    "coding_cowboy",
    "software_slinger",
    "tech_titan",
    "commander_code",
    "dev_dude",
  ];
  
  const getRandomUsername = () => {
      const randomIndex = Math.floor(Math.random() * randomUsers.length);
      return randomUsers[randomIndex];
    };
  
  export { randomUsers, getRandomUsername };  