import CandleList from './CandleList'
import ResetButton from './ResetButton'
import type { CandleData } from '../utils/candleHelpers'

interface BirthdayCakeProps {
    candles: CandleData[]
    showResetButton: boolean
    onCandleHover: (index: number) => void
    onReset: () => void
}

const BirthdayCake = ({
    candles,
    showResetButton,
    onCandleHover,
    onReset,
}: BirthdayCakeProps) => {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-black">
            <div className="flex flex-col items-center justify-center space-y-4">
                <CandleList candles={candles} onCandleHover={onCandleHover} />
                <div className="h-10">
                    {showResetButton && <ResetButton onReset={onReset} />}
                </div>
            </div>
        </div>
    )
}

export default BirthdayCake
