type Config = {
  path: string;
  state: object;
};

//콜사인 타입이 여러개일 경우
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type ADD = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//인수가 3개일 경우 c 에 ?:number 을 적어 숫자일지 모른다고 명시
const add: ADD = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);

//제네릭 타입 <변수>
type SuperPrint = {
  <Type>(arr: Type[]): Type;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false]);
const c = superPrint(["a", 1, true]);

//제네릭 재사용 해보기
type Player<E> = {
  name: string;
  extraInfo: E;
};

type Food = {
  favfood: string;
};
type PlayerInfo = Player<Food>;

const nico1: PlayerInfo = {
  name: "nico",
  extraInfo: {
    favfood: "kimchi",
  },
};

const lynn: PlayerInfo = {
  name: "lynn",
  extraInfo: {
    favfood: "no",
  },
};

///Array<number> === number[]

type A =  Array<number>

let B:A = [1,2,3,4]

// const [test ,setTest] =useState<number>(11111)



//class
abstract class User {
    constructor(
           protected firstName :string,
           protected lastName : string,
           protected  nickname : string
   ) {}
   abstract getNickName():string
    getFullName(){
       return `${this.firstName} ${this.lastName}`
   }
}
//user 상속
class Player1 extends User{
  getNickName(){
  return this.nickname
  }
 
}


const nico = new Player1('nico' , 'las ' , "니코")

console.log(nico.getNickName())


type Words = {
    [key:string] : string
 }
 
 // let dict :Words = {
 //    1 : "food",
 //    2 : "",
 //    3: "",
 //    }
 
 class Dict {
    private words : Words
    constructor (){
       this.words = {}
    }
    add(word:Word){
       if(this.words[word.term]=== undefined){
          this.words[word.term] = word.def
       } 
    }
    def(term:string){
       return this.words[term]
    }
    del(term:string){
     return delete this.words[term] 
    }
    
 }
 
 class Word {
    constructor(  public term : string , public def : string){}
 }
 
 
 const kimchi = new Word("kimchi" , "한국의 음식")
 const dict = new Dict()
 dict.add(kimchi)
 dict.del("kimchi")
 console.log(dict.def("kimchi"))