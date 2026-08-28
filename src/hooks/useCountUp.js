import { useEffect, useState } from "react";

export function useCountUp(target, isVisible, duration = 1500) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = null;
        let raf;

        const step  = (timestamp) => {
            if(!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                raf = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [isVisible, target, duration]);

    return count;
}