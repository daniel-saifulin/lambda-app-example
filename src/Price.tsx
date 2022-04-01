import { useEffect, useState } from 'react';
import Binance from 'binance-api-node';

type PriceProps = {
  symbol?: string
}


const DEFAULT_SYMBOL: string = "BTCUSDT"
const client = Binance();

const Price = ({ symbol: propsSymbol }: PriceProps) => {
  const symbol = propsSymbol || DEFAULT_SYMBOL
  const [price, setPrice] = useState<number | null>(null)

  const fetchPrice = () => {
    client.prices({ symbol: symbol })
      .then((response) => {
        setPrice(parseFloat(response[symbol!]))
      })
  }

  useEffect(() => { fetchPrice() })

  return (
    <p>
      <span> <code>{symbol} - ${price}</code> </span>
    </p>
  )
}

export default Price;
