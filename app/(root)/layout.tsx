import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
    children
} : Readonly<{
    children: React.ReactNode
}> ){
    return (
        <div className="relative flex flex-col">
            <main className="relative flex bg-black-3">
                <LeftSidebar />

                <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
                    <div className="mx-auto flex max-w-5xl flex-col max-sm:px-4">
                        <div className="flex items-center justify-between md:hidden">
                            <Image src={'/icons/logo.svg'} alt="logo" width={23} height={23} />
                            <MobileNav />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        Toaster (notification popups)
                        { children }
                    </div>
                </section>

                <RightSidebar />
            </main>
        </div>
    )
}