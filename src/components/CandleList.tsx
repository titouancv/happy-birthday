import Candle from './Candle'
import type { CandleData } from '../utils/candleHelpers'

interface CandleListProps {
    candles: CandleData[]
    onCandleHover: (index: number) => void
}

const CandleList = ({ candles, onCandleHover }: CandleListProps) => {
    return (
        <div className="h-[560px]items-end flex space-x-2">
            {candles.map((candle, index) => (
                <Candle
                    key={index}
                    index={index}
                    handleHover={onCandleHover}
                    isLit={candle.isLit}
                    associatedLetter={candle.letter}
                />
            ))}
        </div>
    )
}

export default CandleList
