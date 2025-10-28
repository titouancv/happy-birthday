import { useEffect, useState } from 'react'

interface CandleProps {
    index: number
    handleHover: (index: number) => void
    isLit: boolean
}

const Candle = ({ index, handleHover, isLit }: CandleProps) => {
    const [candleHeight, setCandleHeight] = useState(80)
    const [candleWidth, setCandleWidth] = useState(40)
    const [pulseDuration, setPulseDuration] = useState(0.5)
    const [flickerDuration, setFlickerDuration] = useState(0.4)
    const [dripDuration, setDripDuration] = useState(4)

    useEffect(() => {
        setCandleHeight(randomValue(80))
        setCandleWidth(randomValue(40))
        setPulseDuration(randomValue(2))
        setFlickerDuration(randomValue(4))
        setDripDuration(randomValue(4))
    }, [])

    return (
        <div className="flex cursor-pointer items-end">
            <div
                className="flex flex-col items-center transition-transform hover:scale-105"
                onMouseEnter={() => handleHover(index)}
            >
                {isLit && (
                    <div className="z-10 mb-[-4px] h-8 w-5">
                        <div
                            style={{
                                animation: `pulse ${pulseDuration}s ease-in-out infinite`,
                            }}
                            className="h-8 w-5"
                        >
                            <div
                                style={{
                                    animation: `flicker ${flickerDuration}s ease-in-out infinite alternate`,
                                }}
                                className="flex h-8 w-5 translate-x-1/2 items-end rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 px-1 py-px opacity-90 blur-[1px]"
                            >
                                <div
                                    style={{
                                        animation: `flicker ${flickerDuration * 1.2}s ease-in-out infinite alternate`,
                                    }}
                                    className="h-5 w-3 translate-x-1/2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-yellow-300 via-yellow-100 to-white"
                                ></div>
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className={`z-[5] h-3 w-1 rounded-t-sm transition-colors ${
                        isLit
                            ? 'bg-gradient-to-t from-orange-600 to-gray-800'
                            : 'bg-gradient-to-t from-gray-600 to-gray-800'
                    }`}
                ></div>

                <div
                    style={{
                        height: `${candleHeight}px`,
                        width: `${candleWidth}px`,
                    }}
                    className={`relative rounded-t shadow-lg transition-all ${
                        isLit
                            ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-[inset_-2px_0_8px_rgba(0,0,0,0.2),inset_2px_0_8px_rgba(255,255,255,0.3)]'
                            : 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 shadow-[inset_-2px_0_8px_rgba(0,0,0,0.2),inset_2px_0_8px_rgba(255,255,255,0.1)]'
                    }`}
                >
                    {isLit && (
                        <>
                            <div
                                style={{
                                    animation: `drip ${dripDuration}s ease-in-out infinite`,
                                }}
                                className="absolute top-2 left-2 h-4 w-1.5 rounded-b bg-gradient-to-b from-yellow-300/90 to-yellow-600/70"
                            ></div>
                            <div
                                style={{
                                    animation: `drip ${dripDuration}s ease-in-out infinite`,
                                    animationDelay: `${dripDuration / 2}s`,
                                }}
                                className="absolute top-2 right-2 h-4 w-1.5 rounded-b bg-gradient-to-b from-yellow-300/90 to-yellow-600/70"
                            ></div>
                        </>
                    )}
                </div>

                <div
                    style={{ width: `${candleWidth}px` }}
                    className="h-2 rounded-b bg-gradient-to-b from-gray-600 to-gray-700 shadow-md"
                ></div>

                <style>
                    {`
                        @keyframes flicker {
                            0%, 100% { transform: translateX(-50%) scale(1, 1) skewX(0deg); opacity: 1; }
                            50% { transform: translateX(-50%) scale(0.95, 1.05) skewX(2deg); opacity: 0.95; }
                        }
                        @keyframes drip {
                            0%, 100% { height: 1rem; opacity: 0.8; }
                            50% { height: 1.5rem; opacity: 1; }
                            }
                        @keyframes pulse {
                            50% {
                                opacity: 0.5;
                            }
                        }
                    `}
                </style>
            </div>
        </div>
    )
}

export default Candle

function randomValue(minValue: number): number {
    return Math.floor(Math.random() * minValue) + minValue
}
