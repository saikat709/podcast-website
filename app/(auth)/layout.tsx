import Image from "next/image";
import React from "react";

export default function RootLayout({
    children
} : Readonly<{
    children: React.ReactNode
}> ){
    return (
        <main className="relative h-screen w-full">
            <div className="absolute size-full">
                <Image src='/images/bg-img.png' alt='bg' fill className='size-full' />
            </div>
            { children }
        </main>
    )
}