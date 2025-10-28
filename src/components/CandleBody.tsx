interface CandleBodyProps {
    candleHeight: number
    candleWidth: number
    dripDuration: number
}

const CandleBody = ({
    candleHeight,
    candleWidth,
    dripDuration,
}: CandleBodyProps) => {
    return (
        <div
            style={{
                height: `${candleHeight}px`,
                width: `${candleWidth}px`,
            }}
            className="relative rounded-t bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-[inset_-2px_0_8px_rgba(0,0,0,0.2),inset_2px_0_8px_rgba(255,255,255,0.3)] shadow-lg transition-all"
        >
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

            <style>
                {`
                    @keyframes drip {
                        0%, 100% { height: 1rem; opacity: 0.8; }
                        50% { height: 1.5rem; opacity: 1; }
                    }
                `}
            </style>
        </div>
    )
}

export default CandleBody
