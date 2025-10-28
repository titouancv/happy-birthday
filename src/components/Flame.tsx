interface FlameProps {
    pulseDuration: number
    flickerDuration: number
}

const Flame = ({ pulseDuration, flickerDuration }: FlameProps) => {
    return (
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

            <style>
                {`
                    @keyframes flicker {
                        0%, 100% { transform: translateX(-50%) scale(1, 1) skewX(0deg); opacity: 1; }
                        50% { transform: translateX(-50%) scale(0.95, 1.05) skewX(2deg); opacity: 0.95; }
                    }
                    @keyframes pulse {
                        50% {
                            opacity: 0.5;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Flame
