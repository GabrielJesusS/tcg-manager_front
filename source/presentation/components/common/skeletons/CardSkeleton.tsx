


export const CardSkeleton = ():JSX.Element=>{
    return(
        <span className="after:absolute after:w-full after:bg-gradient-to-r after:from-white/0 after:via-white/30 after:to-white/0  shimmer after:aspect-card relative overflow-hidden aspect-card bg-system-200 w-full rounded-xl"/>
    )
}