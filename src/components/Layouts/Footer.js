import './style.css';

export default function Footer() {
    return (
        <>
            <div className='footer bg-[#1546B8] p-[23.25px] flex justify-between items-center md:hidden'>
                <p className='font-bold text-base text-[#5F95FB]'>© Fotógrafos Online</p>
                <div className='flex justify-between items-center'>
                    <img className='w-24 h-5' src='./assets/Combined Shape.png' alt='' />
                    <p className='text-white'>online</p>
                </div>
                <p className='font-bold text-base text-[#5F95FB]'>Política de Privacidade</p>
            </div>
            <div className='footer bg-[#1546B8] p-6 m_md:hidden'>
                <div className='flex justify-center items-center'>
                    <img className='w-24 h-5' src='./assets/Combined Shape.png' alt='' />
                    <p className='text-white'>online</p>
                </div>
                <div className='flex justify-center'>
                    <p className='font-bold text-sm text-center text-[#5F95FB]'>© Fotógrafos Online   •  Política de Privacidade</p>
                </div>
            </div>
        </>
    )
}