import { useSpring, config } from "@react-spring/web";



export const useSlideAnimation = (offset: number = -300 ) => {
    const slideAnimation = useSpring({
        from: {
            opacity: 0,
            translate: offset
        },
        to: {
            opacity: 1,
            translate: 0
        },
        config: config.slow
    })


    return slideAnimation
}



export const useScaleAnimation = (trail: number = 100) => {
    const scaleAnimation = useSpring({
        from: {
            opacity: 0,
            scale: 0
        },
        to: {
            opacity: 1,
            scale: 1
        },
        config: {
            ...config.wobbly,
            mass: 1,
            tension: 200
        },
        delay: trail,   
    })


    return scaleAnimation 
}