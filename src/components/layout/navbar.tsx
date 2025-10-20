"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 border-b-2">
            <h1 className="text-xl font-bold">Logo</h1>
            <div className="space-x-8">
                <Link href="/">Home</Link>
                <Link href="/campaigns">Campaigns</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}