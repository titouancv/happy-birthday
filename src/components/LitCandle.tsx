import Flame from './Flame'
import Wick from './Wick'
import CandleBody from './CandleBody'
import CandleBase from './CandleBase'

interface LitCandleProps {
    candleHeight: number
    candleWidth: number
    pulseDuration: number
    flickerDuration: number
    dripDuration: number
    onHover: () => void
}

const LitCandle = ({
    candleHeight,
    candleWidth,
    pulseDuration,
    flickerDuration,
    dripDuration,
    onHover,
}: LitCandleProps) => {
    return (
        <div
            className="flex flex-col items-center transition-transform hover:scale-105"
            onMouseEnter={onHover}
        >
            <Flame
                pulseDuration={pulseDuration}
                flickerDuration={flickerDuration}
            />
            <Wick />
            <CandleBody
                candleHeight={candleHeight}
                candleWidth={candleWidth}
                dripDuration={dripDuration}
            />
            <CandleBase candleWidth={candleWidth} />
        </div>
    )
}

export default LitCandle
