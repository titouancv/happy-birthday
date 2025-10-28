import { useEffect, useState } from 'react'
import LitCandle from './LitCandle'
import LetterBlock from './LetterBlock'
import { randomValue } from '../utils/randomValue'

interface CandleProps {
    index: number
    handleHover: (index: number) => void
    isLit: boolean
    associatedLetter: string
}

const Candle = ({
    index,
    handleHover,
    isLit,
    associatedLetter,
}: CandleProps) => {
    const [candleHeight, setCandleHeight] = useState(80)
    const [candleWidth, setCandleWidth] = useState(40)
    const [pulseDuration, setPulseDuration] = useState(0.5)
    const [flickerDuration, setFlickerDuration] = useState(0.4)
    const [dripDuration, setDripDuration] = useState(4)

    // Hauteur de la flamme (32px) + mèche (12px) + base (8px) = 52px
    const extraHeight = 52

    useEffect(() => {
        setCandleHeight(randomValue(80))
        setCandleWidth(randomValue(40))
        setPulseDuration(randomValue(2))
        setFlickerDuration(randomValue(4))
        setDripDuration(randomValue(4))
    }, [])

    return (
        <div className="flex cursor-pointer items-end">
            {isLit ? (
                <LitCandle
                    candleHeight={candleHeight}
                    candleWidth={candleWidth}
                    pulseDuration={pulseDuration}
                    flickerDuration={flickerDuration}
                    dripDuration={dripDuration}
                    onHover={() => handleHover(index)}
                />
            ) : (
                <LetterBlock
                    letter={associatedLetter}
                    height={candleHeight + extraHeight}
                    width={candleWidth}
                    extraHeight={extraHeight}
                />
            )}
        </div>
    )
}

export default Candle
