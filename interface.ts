type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;
type Player2 = {
  nickname: string;
  team: Team;
  health: Health;
};

interface Player3 {
  nickname: string;
  team: Team;
  health: Health;
}

const nico2: Player2 = {
  nickname: "nico",
  team: "blue",
  health: 10,
};
