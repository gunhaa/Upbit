import ICoin from "../interfaces/coin.interface";
import IPeople from "../interfaces/people.interface";

export default class Monkey implements IPeople {
  _patient: number;
  _name: string;
  _investedCoin: ICoin;
  _memory: number[];

  constructor(millis: number, investedCoin: ICoin, name: string) {
    this._patient = millis;
    this._name = name;
    this._investedCoin = investedCoin;
    this._memory = [];
  }

  // 실행 시간은 스레드 생성할때 주입받는다
  invest(duration: number): void {
    // 인내심(_patient)을 이용해 인내심 시간 간격으로 ICoin의 데이터를 가져와서(fetchData)
    // 오르는 중이면 팔지 않고 내려가면 바로 파는 전략으로 투자한다
  }
}
