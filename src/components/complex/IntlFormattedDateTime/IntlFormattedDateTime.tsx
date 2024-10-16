import React from 'react'

export type IntlFormattedDateTimeProps = {
    value: string
    day?: '2-digit' | 'numeric',
    month?: '2-digit',
    year?: '2-digit',
    hour?: 'numeric',
    minute?: '2-digit',
    second?: '2-digit',
}

export const IntlFormattedDateTime = (props: IntlFormattedDateTimeProps) => {
    const { value, day, month, year, hour, minute, second } = props

    const formattedValue = React.useMemo(() => {
        const formatter= new Intl.DateTimeFormat('ru', {
            day,
            month,
            year,
            hour,
            minute,
            second,
        })
        const date = new Date(value)
        return formatter.format(date)
    }, [
        value,
        day,
        month,
        year,
        hour,
        minute,
        second,
    ])

    return (
        <>{formattedValue}</>
    )
}
