import { useAnimate } from "framer-motion";
import { useRef } from "react";
import { MouseImageTrailProps } from "../types";

const MouseProvider: React.FC<MouseImageTrailProps> = ({
    children,
    chars,
    renderCharBuffer,
    rotationRange,
}) => {
    const [scope, animate] = useAnimate();

    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const charRenderCount = useRef(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderCharBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    };

    const renderNextImage = () => {
        const charIndex = charRenderCount.current % chars.length;
        const selector = `[data-mouse-move-index="${charIndex}"]`;


        const el = document.querySelector(selector) as HTMLElement;
        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = charRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        animate(
            selector,
            {
                opacity: [0, 1],
                transform: [
                    `translate(-50%, -25%) scale(0.5) ${charIndex % 2
                        ? `rotate(${rotation}deg)`
                        : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${charIndex % 2
                        ? `rotate(-${rotation}deg)`
                        : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 5 }
        );

        charRenderCount.current = charRenderCount.current + 1;
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {children}
            {chars.map((ch, index) => (
                <h2
                    className="text-4xl text-red-400 absolute left-0 top-0 opacity-0 "
                    key={index}
                    data-mouse-move-index={index}
                >
                    {ch}
                </h2>
            ))}
        </div>
    );
};

export default MouseProvider;