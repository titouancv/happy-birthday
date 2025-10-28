export interface CandleData {
    isLit: boolean
    letter: string
}

export function createCandles(text: string): CandleData[] {
    const candles: CandleData[] = []
    for (let i = 0; i < text.length; i++) {
        candles.push({
            isLit: true,
            letter: text[i],
        })
    }
    return candles
}
