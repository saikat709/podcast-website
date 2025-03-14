'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const LeftSidebar = () => {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col mt-9 gap-6 px-6'>
                <Link href={'/'} className='flex cursor-pointer items-center gap-5 max-lg:px-4 pb-6 max-kg:justify-center'>
                    <Image src={"/icons/logo.svg"} width={23} height={27} alt='logo' />
                    <h1 className='text-24 text-extrabold text-white'> PodCast </h1>
                </Link>
                { sidebarLinks.map( ({ imgURL, route, label })=>{
                        const isActive = pathname == route || pathname.startsWith(`${route}/`);

                        return <Link href={route} key={label} className={cn('flex gap-3 max-lg:px-4 items-center py-3 justify-start', {
                            "bg-nav-focus border-r-4 border-orange-1": isActive,
                        })}>
                            <Image src={imgURL} alt={label} width={24} height={25} />
                            <p className='text-white-1'> {label} </p>
                        </Link>
                    } )
                }
            </nav>
        </section>
    );
}

export default LeftSidebar;