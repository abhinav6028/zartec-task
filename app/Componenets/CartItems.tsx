"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Header from './Ui/Header'

export default function CartItems(props: any) {

    const { data } = props

    var totalItems = 0

    if (!Array.isArray(data)) {
        return null;
    }

    const [counts, setCounts] = useState(() => Array(data?.length).fill(0));

    const handleIncrement = (index: number) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const handleDecrement = (index: number) => {

        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
        }

    };

    console.log("counts", counts);

    counts.map((data) => { totalItems += data })

    console.log("totalItems>>>>>>>>>>>>>>>", totalItems);

    return (



        <div className='w-screen absolute flex flex-col justify-center overflow-hidden lg:top-32 md:top-32 sm:top-32 top-28'>

            {
                data?.map((data, index) =>
                    <div key={index} className='w-screen flex justify-center mt-4 '>

                        <div className='w-11/12 lg:w-11/12 md:w-11/12 sm:w-11/12 flex justify-between'>
                            <div className='w-10/12 flex'>

                                <div className={`w-4 lg:w-6 md:w-6 h-4 lg:h-6 md:h-6 border-2 flex justify-center items-center border-${data.dish_Type === 2 ? "red" : "green"}-700`}>
                                    <div className={`w-2 lg:w-4 md:w-4 h-2 lg:h-4 md:h-4 bg-${data.dish_Type === 1 ? "green" : "red"}-700 rounded-full`}></div>
                                </div>

                                <div className='ml-3 lg:ml:6  md:ml-6 sm:ml-4 w-full' >

                                    <h1 className='lg:text-2xl md:text-2xl sm:text-2xl text-lg font-bold'>{data?.dish_name}</h1>

                                    <div className='w-full flex justify-between align-middle  my-1 lg:my-2 md:my-2 sm:my-2 '>
                                        <h1 className='text-1.5xl lg:text-2.3xl md:text-2.3xl sm:text-2.3xl text-md font-bold '>{data.dish_currency} {data.dish_price}</h1>
                                        <h1 className='lg:text-2.3xl md:text-2.3xl sm:text-2.3xl text-sm mr-5 lg:mr-20 md:mr-20 sm:mr-12 font-bold'>{data.dish_calories} Calories</h1>
                                    </div>

                                    <div className='lg:w-7/12 md:w-7/12 sm:w-7/12  object-fill'>
                                        <h1 className='text-sm lg:text-1.5xl md:text-md sm:text-md my-1 lg:my-2 md:my-2 sm:my-2 '>{data.dish_description}{data?.dish_Type}</h1>
                                    </div>

                                    <div className='flex my-2.5 lg:my-2 md:my-2 sm:my-2 justify-center  items-center lg:bg-green-600 md:bg-red-400 sm:bg-slate-600 bg-slate-600 w-fit rounded-[20px] '>

                                        <h1
                                            onClick={() => handleDecrement(index)}
                                            className='text-white font-bold lg:text-3xl md:text-3xl mb-.5  md:mb-.5 lg:mb-1 lg:px-4 md:px-2.5 sm:px-2.5 px-2 cursor-pointer'>-</h1>
                                        <h1 className='text-white font-bold lg:text-2xl md:text-3xl mb-.5 md:mb-.5 lg:mb-1 lg:px-4 md:px-2.5 sm:px-2.5 px-2 cursor-pointer'>{counts[index]}</h1>
                                        <h1
                                            onClick={() => handleIncrement(index)}
                                            className='text-white font-bold lg:text-3xl md:text-3xl mb-.5 md:mb-.5 lg:mb-1 lg:px-4 md:px-2.5 sm:px-2.5 px-2 cursor-pointer'>+</h1>

                                    </div>

                                </div>

                            </div>


                            <div className='w-3/12 flex justify-center items-center  '>

                                <div className="h-32 w-40  flex justify-center items-center  ">
                                    <Image
                                        src={data.dish_image}
                                        alt="Description of your image"
                                        width={100}
                                        height={100}
                                        className="h-20 lg:h-32 md:h-32 sm:h-32  w-32 lg:w-32 md:w-32 sm:w-32 bg-slate-500 lg:rounded-[10px] md:rounded-[10px] sm:rounded-[10px] "
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }


        </div>


    )
}
