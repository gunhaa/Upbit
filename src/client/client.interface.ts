import ICoin from "../coins/coin.interface";

export default interface IClient {
    _patient: number;
    _name: string;
    _investedCoin: ICoin;
    _memory: number[];

    invest(duration: number): void;
}