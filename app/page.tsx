"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import CartItems from './Componenets/CartItems';

export default function Home() {
  const [fetchedCategory, setFetchedCategory] = useState<any>(undefined);
  const [touchedItem, setTouchedItem] = useState<number | undefined>(0);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb').then((res) => {
      setFetchedCategory(res?.data?.data[0]?.table_menu_list);
    });
  }, []);

  console.log("fetchedCategory>>>>>>>>", fetchedCategory);

  // console.log("touchedItem>>>>", touchedItem);

  const categoryDishes = fetchedCategory?.filter((data: any, index: any) => touchedItem == index)[0].category_dishes

  console.log("categoryDishes", categoryDishes);
  console.log(touchedItem);



  return (
    <div className='flex overflow-x-auto overflow-hidden custom-scrollbar lg:shadow-md'>
      {fetchedCategory?.map((data: any, index: number) => (
        <div
          key={index}
          onClick={() => setTouchedItem(index)}
          className={`lg:w-3/12 md:w-4/12 sm:w-4/12 cursor-pointer flex-shrink-0 flex justify-center py-1.5 px-4 sm:border-b-4 lg:border-b-0 lg:border-solid 
          border-${index == touchedItem ? "red" : "blue"}-500`
          }
        >
          <h1 className={`text-${touchedItem == index ? "red" : ''}-500 font-semibold lg:text-1.5xl md:text-1xl sm:text-xl xs:text-sm`}>{data.menu_category}</h1>
        </div>
      ))}


      <CartItems data={categoryDishes} />



    </div>
  );
}
