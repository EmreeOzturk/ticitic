import clsx from 'clsx'
import { SquareProps } from '../types'

const Square: React.FC<SquareProps> = ({ value, isCorner }) => {
    return (
        <button className={clsx(
            "h-32 w-32 border-4 border-black",
            "flex justify-center items-center",
            "text-9xl font-bold hover:bg-gray-500",
            isCorner === "topLeft" && "rounded-tl-3xl",
            isCorner === "topRight" && "rounded-tr-3xl",
            isCorner === "bottomLeft" && "rounded-bl-3xl",
            isCorner === "bottomRight" && "rounded-br-3xl",
        )}>
            {value}
        </button>
    )
}

export default Square