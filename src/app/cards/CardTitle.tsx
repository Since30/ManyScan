'use client'

interface Props {
    title: string;
}

export default function CardTitle(props: Props) {
    return (
            <span className="font-bold text-xl text-black">{props.title}</span>
    )
}