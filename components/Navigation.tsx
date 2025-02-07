import React from 'react'

type Props = {
    activeItem:number;
}

const navItems :{
    title:string,
    href:string
}[] =  [
    {
        title:'Home',
        href:"/",
    },
    {
        title:'About Us',
        href:'/about'
    },
    {
        title:'Marketplace',
        href:'/marketplace'
    },
    {
        title:'Contact Us',
        href:'/contact'
    },
    {
        title:'Policy',
        href:'/policy'
    },
]

const Navigation = ({activeItem}: Props) => {
  return (
    <div className='block md:flex ml-[150px]'>
        {navItems.map((item,index)=>(
            <div key={item.title}>
                  <h5 className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${activeItem === index && 'text-[#6dff4b]' }`}>{item.title}</h5>
            </div>
        ))}
    </div>
  )
}

export default Navigation