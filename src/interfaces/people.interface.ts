import ICoin from "./coin.interface";

export default interface IPeople {
    _patient: number;
    _name: string;
    _investedCoin: ICoin;
    _memory: number[];

    invest(duration: number): void;
}