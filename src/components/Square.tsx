import clsx from 'clsx'
import { SquareProps } from '../types'
const Square: React.FC<SquareProps> = ({ value, corner }) => {

    return (
        <button className={clsx(
            "h-32 w-32 border-4 border-gray-500",
            "flex justify-center items-center",
            "text-9xl font-bold hover:bg-gray-500 hover:scale-[1.03] transition-all",
            corner === "topLeft" && "rounded-tl-3xl",
            corner === "topRight" && "rounded-tr-3xl",
            corner === "bottomLeft" && "rounded-bl-3xl",
            corner === "bottomRight" && "rounded-br-3xl",
        )}>
            {value}
        </button>
    )
}

export default Square