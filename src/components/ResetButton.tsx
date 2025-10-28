interface ResetButtonProps {
    onReset: () => void
}

const ResetButton = ({ onReset }: ResetButtonProps) => {
    return (
        <button
            className="ml-6 rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500"
            onClick={onReset}
        >
            Reset Candles
        </button>
    )
}

export default ResetButton
