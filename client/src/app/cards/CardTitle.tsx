'use client'

interface Props {
    title: string;
}

export default function CardTitle(props: Props) {
    return (
            <span className="font-semibold uppercase text-md text-black dark:text-white opacity-50">{props.title}</span>
    )
}