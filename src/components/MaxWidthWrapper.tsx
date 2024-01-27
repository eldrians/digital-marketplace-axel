import { ReactNode } from "react"

// this file is created to make entire layout looks Good
const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
    return (
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
            {children}
        </div>
    )
}

export default MaxWidthWrapper