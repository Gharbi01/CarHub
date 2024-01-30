'use client';
import React from 'react'
import { SearchManufacturer } from '.';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const SearchButton=({otherClasses}:{otherClasses:string})=>
(
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain'/>
    </button>
)



function SearchBar({setManufacturer,setModel}) {
    const[SEARCHmanufacturer,setSEARCHManufacturer] = useState('')
    const[SEARCHmodel,setSEARCHModel]= useState('')
    const router= useRouter();
    function handleSearch (e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(SEARCHmanufacturer ==='' && SEARCHmodel ===''){
            return alert('Please fill in the search bar')

        }
        ;
        setModel(SEARCHmodel),
        setManufacturer(SEARCHmanufacturer)
     }
     
     
    return (
       <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar-item'>
                <SearchManufacturer
                    selected={SEARCHmanufacturer}
                    setselected={setSEARCHManufacturer}
                />
                <SearchButton otherClasses='sm:hidden'/>
                

            </div>
            <div className='searchbar__item'>
                <Image src='/model-icon.png'width={25 }height={25} className='absolute w-[20px] h-[20px] ml-4'
                alt='car mosel icon'/>
                <input type='text'
                name='model'
                value={SEARCHmodel}
                onChange={(e)=> setSEARCHModel(e.target.value)}
                placeholder='Tiguan'
                className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden'/>

            </div>
            <SearchButton otherClasses='max-sm:hidden'/>
        </form>
  )
    }

export default SearchBar