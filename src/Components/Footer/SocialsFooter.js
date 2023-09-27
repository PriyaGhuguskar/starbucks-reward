import React from 'react';
// import Spotify from '../../Assets/Spotify'

import Spotify from '../../Assets/Spotify';
import Facebook from '../../Assets/Facebook';
import Pinterest from '../../Assets/Pinterest';
import Instagram from '../../Assets/Instagram';
import Youtube from '../../Assets/Youtube';
import Twitter from '../../Assets/Twitter';

const SocialsFooter = () => {
    return (
        <ul className='flex ml-[-5px] list-none ml-[-5px]'>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Spotify />
                </a>
            </li>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Facebook />
                </a>
            </li>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Pinterest />
                </a>
            </li>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Instagram />
                </a>
            </li>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Youtube />
                </a>
            </li>
            <li className='min-[480px]:mr-[0.4rem]'>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Twitter />
                </a>
            </li>
        </ul>
    )
};

export default SocialsFooter