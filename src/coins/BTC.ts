import axios from "axios";
import ICoin from "./coin.interface";
import { CoinData } from "./coin.types";

export type BTCResponse = {
  market: string;
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  timestamp: number;
};


export class BTC implements ICoin {
  public fetchData = async (): Promise<CoinData | undefined> => {
    try {
      const response = await axios.get<BTCResponse[]>(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
      );
      return {
        trade_price: response.data[0].trade_price,
        signed_change_price: response.data[0].signed_change_price,
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };
}
