import { useEffect, useState } from 'react'
import type { CandleData } from '../utils/candleHelpers'
import { createCandles } from '../utils/candleHelpers'

export function useCandleManager(initialText: string) {
    const [candles, setCandles] = useState<CandleData[]>(
        createCandles(initialText)
    )
    const [showResetButton, setShowResetButton] = useState(false)

    useEffect(() => {
        if (candles.every((candle) => !candle.isLit)) {
            setShowResetButton(true)
        }
    }, [candles])

    const handleBlowOutCandle = (index: number) => {
        const newCandles = [...candles]
        newCandles[index].isLit = false
        setCandles(newCandles)
    }

    const resetCandles = () => {
        setCandles(createCandles(initialText))
        setShowResetButton(false)
    }

    return {
        candles,
        showResetButton,
        handleBlowOutCandle,
        resetCandles,
    }
}
