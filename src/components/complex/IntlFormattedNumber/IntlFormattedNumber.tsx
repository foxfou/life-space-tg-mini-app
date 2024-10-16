import React from 'react'

export type IntlFormattedNumberProps = {
    value?: number
    minimumFractionDigits: number
    maximumFractionDigits: number
}

export const IntlFormattedNumber = (props: IntlFormattedNumberProps) => {
    const { value, minimumFractionDigits, maximumFractionDigits } = props

    const formattedValue = React.useMemo(() => {
        if (value == null) {
            return null
        }
        const formatter= new Intl.NumberFormat('ru', {
            style: 'decimal',
            minimumFractionDigits,
            maximumFractionDigits,
        })
        return formatter.format(value)
    }, [
        value,
        minimumFractionDigits,
        maximumFractionDigits,
    ])

    return (
        <>{formattedValue}</>
    )
}
