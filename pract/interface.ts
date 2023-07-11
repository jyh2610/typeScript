type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;
type Player2 = {
  nickname: string;
  team: Team;
  health: Health;
};

//오브젝트만 지정가능
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
/*
인터페이스 객체지향 / 프로퍼티 누적 가능
*/ 
// interface User {
//     name : string
//  }
 
 
//  interface Player extends User {}
 
//  const nico : Player = {
//     name: "nico"
//  }
 
//  type User2 = {
//     name: string
//  }
 
//  type Player2 = User2 & {}
 
//  const nico2 : Player2 = {
//     name: "nico"
//  }