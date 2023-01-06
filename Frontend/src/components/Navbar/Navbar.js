import { useState } from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';



export default function Navbar() {
  return (
    <nav className='h-[50px] bg-black px-[2%] text-white flex justify-end'>
      <div className='my-auto flex'>
        <form className='h-[40px] flex'>
          <input type='text' className='h-[100%] bg-white text-black outline-none my-auto indent-[16px]' />
          <input type='button' className='bg-[#198754] h-[100%] outline-none px-[5px] my-auto' value="Search" />
        </form>
        <ul className='flex ml-[20px]'>
          <li className='m-auto p-[5px]'>Dashboard</li>
          <Menu className="border border-black text-black"
            menuButton={<MenuButton className="m-auto p-[5px]">New Post</MenuButton>}
          >
            <MenuItem className="px-[6px] py-[2px] cursor-pointer">Free</MenuItem>
            <MenuItem className="px-[6px] py-[2px] cursor-pointer">Paid1</MenuItem>
            <MenuItem className="px-[6px] py-[2px] cursor-pointer">Paid2</MenuItem>
          </Menu>
          <li className='m-auto p-[5px] cursor-pointer' onClick={()=>{
            localStorage.setItem('token', '');
          }}>LogOut</li>
        </ul>
      </div>
    </nav>
  )
}