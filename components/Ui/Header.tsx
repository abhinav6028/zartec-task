import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Header() {
    //lg:bg-slate-500 md:bg-red-400 sm:bg-gray-50

    const router = useRouter();

    const cartItems = useSelector((state: any) => state.cart.cartItems);



    return (
        <div className='w-full flex justify-center '>

            <div className="flex justify-between w-11/12">

                <div className='flex items-center'>

                    <svg className="w-5 h-5 sm:flex lg:hidden text-customGrey rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>

                    <p className='font-semibold text-lg ml-3 lg:ml-6 md:ml-4 sm:ml-3 xs:ml:2 text-customGrey '>UNI Resto Cafe</p>

                </div>

                <div className="flex justify-center items-center space-x-4 font-medium">

                    <h1>My Orders</h1>
                    <div onClick={() => router.push("/cart")} className="relative py-2">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{cartItems?.length}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    )
}
