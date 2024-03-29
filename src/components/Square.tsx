import clsx from 'clsx'
import { SquareComponentProps } from '../types'
const Square: React.FC<SquareComponentProps> = ({ value, corner, fillSquare, id, setSq }) => {
    const handleOnClick = () => {
        if (value !== undefined) return
        fillSquare(id, setSq)
    }
    return (
        <button
            onClick={handleOnClick}
            className={
                clsx(
                    "h-48 w-48 border-4 border-gray-500",
                    "flex justify-center items-center",
                    "text-9xl font-bold hover:bg-gray-500 hover:scale-[1.03] transition-all z-30",
                    corner === "topLeft" && "rounded-tl-3xl",
                    corner === "topRight" && "rounded-tr-3xl",
                    corner === "bottomLeft" && "rounded-bl-3xl",
                    corner === "bottomRight" && "rounded-br-3xl",
                )}>
            <h1 className='text-red-500'>
                {value}
            </h1>
        </button >
    )
}

export default Square