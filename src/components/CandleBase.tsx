interface CandleBaseProps {
    candleWidth: number
}

const CandleBase = ({ candleWidth }: CandleBaseProps) => {
    return (
        <div
            style={{ width: `${candleWidth}px` }}
            className="h-2 rounded-b bg-gradient-to-b from-gray-600 to-gray-700 shadow-md"
        ></div>
    )
}

export default CandleBase
