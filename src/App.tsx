import { useState } from 'react'
import './App.css'
import Candle from './components/Candle'

const createCandles = (candlesNumber: number): boolean[] => {
    const candles = []
    for (let i = 0; i < candlesNumber; i++) {
        candles.push(true)
    }
    return candles
}

const userAge = 13

function App() {
    const [candles, setCandles] = useState(createCandles(userAge))

    const handleHover = (index: number) => {
        const newCandles = [...candles]
        newCandles[index] = false
        setCandles(newCandles)
    }

    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-black">
                <div className="flex items-center justify-center">
                    <div className="h-[560px]items-end flex space-x-2">
                        {candles.map((candleState, index) => (
                            <Candle
                                key={index}
                                index={index}
                                handleHover={handleHover}
                                isLit={candleState}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
