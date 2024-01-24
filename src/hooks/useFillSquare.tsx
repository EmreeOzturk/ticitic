import useNextValue from "./useNextValue";


const useFillSquare = () => {
    const { nextValueText, toggleNextValue } = useNextValue();
    const fillSquare = (id: number) => {
        toggleNextValue();
    }



}

export default useFillSquare