import axios from "axios";
import ICoin from "./coin.interface";
import { CoinData, CoinResponse } from "./coin.types";

export class ETH implements ICoin {
  public fetchData = async (): Promise<CoinData | undefined> => {
    try {
      const response = await axios.get<CoinResponse[]>(
        "https://api.upbit.com/v1/ticker?markets=KRW-ETH"
      );
      return {
        trade_price: response.data[0].trade_price,
        signed_change_price: response.data[0].signed_change_price,
      };
    } catch (error) {
      console.error("error");
    }
  };
}
