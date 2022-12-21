import './style.css';

export default function Header() {
    return (
        <div className='header'>
            <div className="flex pt-3.5 pr-4 pb-4 pl-5 bg-[#1546B8] header-main justify-between md:hidden">
                <div className="left flex items-center">
                    <div className="menu mr-5">
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                    </div>
                    <div className='logo flex'>
                        <img className='object-contain mt-1' src='./assets/Combined Shape.png' alt='' />
                        <span className='text-[23px] text-[#32C5FF]'>online</span>
                    </div>
                </div>
                <div className="right flex items-center">
                    <div className='menu_items mr-8'>
                        <ul className='flex'>
                            <li className='flex mr-5 items-center'>
                                <img className='w-3 h-3' src='./assets/Shape (1).png' alt='' />
                                <p className='text not-italic text-base leading-5 text-[#47CBFF] ml-2 lg:hidden'>Home</p>
                            </li>
                            <li className='flex mr-5 items-center'>
                                <img className='w-3 h-3' src='./assets/Subtract.png' alt='' />
                                <p className='text not-italic text-base leading-5 text-[#47CBFF] ml-2 lg:hidden'>Sobre</p>
                            </li>
                            <li className='flex mr-5 items-center'>
                                <img className='w-3 h-3' src='./assets/Union.png' alt='' />
                                <p className='text not-italic text-base leading-5 text-[#47CBFF] ml-2 lg:hidden'>Comunidade</p>
                            </li>
                            <li className='flex mr-5 items-center'>
                                <img className='w-3 h-3' src='./assets/Combined Shape1.png' alt='' />
                                <p className='text not-italic text-base leading-5 text-[#47CBFF] ml-2 lg:hidden'>Trinamento</p>
                            </li>
                            <li className='flex items-center'>
                                <img className='w-3 h-3' src='./assets/Icon (Stroke).png' alt='' />
                                <p className='text not-italic text-base leading-5 text-[#47CBFF] ml-2 lg:hidden'>Marketplace</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='login flex flex-row justify-end items-center pr-3 pl-3 bg-[#66AE3E] rounded mr-4 pt-3 pb-3'>
                            <img src='./assets/Icon.png' alt='' />
                            <p className='text-white ml-2'>Login</p>
                        </div>
                        <div className='signup flex flex-row justify-end items-center pr-3 pl-3 bg-[#66AE3E] rounded pt-3 pb-3'>
                            <img src='./assets/Icon (1).png' alt='' />
                            <p className='text-white ml-2'>Signup</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-[#00206A] pt-[13px] pb-[13px] justify-center m_md:hidden'>
                <img className='w-3 h-3 mr-7' src='./assets/Shape (1).png' alt='' />
                <img className='w-3 h-3 mr-7 ml-7' src='./assets/Union.png' alt='' />
                <img className='w-3 h-3 mr-7 ml-7' src='./assets/Combined Shape1.png' alt='' />
                <img className='w-3 h-3 mr-7 ml-7' src='./assets/Icon (Stroke).png' alt='' />
                <img className='w-3 h-3 mr-7 ml-7' src='./assets/Subtract.png' alt='' />
                <img className='w-3 h-3 ml-7' src='./assets/person.png' alt='' />
            </div>
            <div className='flex header-main bg-[#1546B8] pt-3 pb-3 pl-5 pr-4 justify-between m_md:hidden'>
                <div className='flex items-center'>
                    <img className='w-24 h-5' src='./assets/Combined Shape.png' alt='' />
                    <p className='text-[#32C5FF] text-lg'>online</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex bg-[#66AE3E] rounded pt-[12px] pb-[12px] pl-[14px] pr-[14px] mr-[21px]'>
                        <img className='mr-[6px] object-contain' src='./assets/P_Union.png' alt='' />
                        <p className='text-white'>Sign In</p>
                    </div>
                    <img className='object-contain mr-[20.5px]' src='./assets/B_search.png' alt='' />
                    <div className="menu mr-5">
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                        <p className='mb-[4.42px] bg-[#32C5FF] rounded-[10px]'></p>
                    </div>
                </div>
            </div>
            <div className='relative min-h-[171px] overflow-x-hidden'>
                <div className='flex min-h-[85px] image_row'>
                    <img className='w-full1' src='./assets/image/Rectangle 43.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 44.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 45.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 46.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 47.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 48.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 49.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 50.png' alt='' />
                </div>
                <div className='flex min-h-[85px] image_row'>
                    <img className='w-full1' src='./assets/image/Rectangle 51.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 52.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 53.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 54.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 55.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 56.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 57.png' alt='' />
                    <img className='w-full1' src='./assets/image/Rectangle 58.png' alt='' />
                </div>
                <div className='header-images absolute w-full h-full top-0 left-0'></div>
                <div className='absolute header-text'>
                    <div className='flex justify-center items-center mb-[10.3px]'>
                        <img className='w-10 sm:w-[27.22px] h-10 sm:h-[27.22px]' src='./assets/Shape.png' alt='' />
                        <p className='font-[700] text-[56px] md:text-[37px] leading-9 flex items-center text-center text-white ml-4 sm:ml-[8.2px]'>145.933</p>
                    </div>
                    <p className='flex justify-center font-medium text-[24px] sm:text-[18px] leading-[35px] sm:leading-[23px] sm:mt-3 flex items-center text-center text-[#53D6FF]'>Maior Plataforma de Fotógrafos no Brasil e no Mundo</p>
                </div>
            </div>
        </div>
    )
}