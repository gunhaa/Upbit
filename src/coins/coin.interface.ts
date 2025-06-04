import { CoinData } from "./coin.types";

export default interface ICoin {
    fetchData(): Promise<CoinData | undefined>;
}