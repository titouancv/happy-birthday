import { useMemo } from 'react'

interface LetterBlockProps {
    letter: string
    height: number
    width: number
    extraHeight?: number
}

const LetterBlock = ({
    letter,
    height,
    width,
    extraHeight = 0,
}: LetterBlockProps) => {
    const randomColor = useMemo(() => {
        const hue = Math.floor(Math.random() * 360)
        return `hsl(${hue}, 70%, 50%)`
    }, [])

    return (
        <div className="flex flex-col items-center justify-end transition-transform hover:scale-110">
            {extraHeight > 0 && (
                <div style={{ height: `${extraHeight}px` }}></div>
            )}
            <div
                style={{
                    height: `${height - extraHeight}px`,
                    width: `${width}px`,
                    backgroundColor: randomColor,
                }}
                className="flex items-end justify-center p-2 text-6xl font-bold text-white"
            >
                <p>{letter}</p>
            </div>
        </div>
    )
}

export default LetterBlock
