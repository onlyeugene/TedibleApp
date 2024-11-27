'use client'

import Link from "next/link"
import { Button } from "../ui/button"


interface BackButtonProps {
    href: string;
    label: string;
    content?: React.ReactNode;
}


export const BackButton =({href, label, content}: BackButtonProps) =>  {
    return (
        <Button asChild variant="link" className="w-full font-medium text-tertiary hover:no-underline">
            <span className="flex items-center gap-2 text-sm">
                {content}
                <Link aria-label={label} href={href}>{label}</Link>
            </span>
        </Button>
    )
}