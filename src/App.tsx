import BirthdayCake from './components/BirthdayCake'
import { useCandleManager } from './hooks/useCandleManager'

function App() {
    const { candles, showResetButton, handleBlowOutCandle, resetCandles } =
        useCandleManager('Happy Birthday')

    return (
        <BirthdayCake
            candles={candles}
            showResetButton={showResetButton}
            onCandleHover={handleBlowOutCandle}
            onReset={resetCandles}
        />
    )
}

export default App
