import ICoin from "../coins/coin.interface";
import IClient from "./client.interface";

export default class Monkey implements IClient {
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
  // 스레드는 특정 시간동안 invest를 실행한다
  invest(duration: number): void {
    
    const intervalId = setInterval( async () => {
        if() {
            clearInterval(intervalId);
        }

    // 인내심(_patient)을 이용해 인내심 시간 간격으로 ICoin의 데이터를 가져와서(fetchData)
    // 오르는 중이면 팔지 않고 내려가면 바로 파는 전략으로 투자한다

    }, this._patient);
  }
}
