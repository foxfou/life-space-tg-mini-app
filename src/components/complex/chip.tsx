import {clsx} from 'clsx'

export type ChipsProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: 'sm' | 'lg'
}

export const Chips = (props: ChipsProps) => {
    const {children, size, className, ...otherProps} = props
    return (
        <div
            className={
                clsx(
                    className,
                    'rounded-md bg-accent border py-0.5 px-2.5 h-8 flex justify-center items-center leading-[1px]',
                    {}
                )
            }
            {...otherProps}
        >
            {children}
        </div>
    )
}