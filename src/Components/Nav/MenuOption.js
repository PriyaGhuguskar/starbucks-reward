import React from 'react'

const MenuOption = () => {
    return (
        //     height: 100%;
        // align-items: center;
        <div className='shrink-0 h-full'>
            <ul className='flex h-full items-center gap-x-[2.4rem] tracking-widest uppercase font-bold text-sm'>
                <li className='h-full flex items-center'>
                    <a href="/" className='hover:text-green'>
                        Menu
                    </a>
                </li>
                <li className='flex items-center h-full border-b-4 border-green-600'>
                    <a href="/" className='hover:text-green'>
                        Rewards
                    </a>
                </li>
                <li className='flex items-center h-full'>
                    <a href="/" className='hover:text-green'>
                        Gift Cards
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuOption