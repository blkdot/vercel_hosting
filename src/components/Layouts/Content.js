import { useState } from 'react';
import './style.css';

export default function Content(props) {
    const [show, setShow] = useState(false);
    const [model, setModel] = useState(false);

    return (
        <>
            <div className='relative content w-full h-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    width="100%"
                    height="800px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                <div className='absolute bg-white rounded search pt-5 pr-6 pb-6 pl-6 md:hidden'>
                    <p className='font-bold text-xl leading-7 text-gray-900'>Busque Fotógrafos</p>
                    <div className='mt-5'>
                        <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                            <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Fotógrafia de...'></input>
                            <img className='icon absolute' src='./assets/Combined Shape.svg' alt='' />
                        </div>
                        <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                            <img className='object-contain pl-3' src='./assets/search.png' alt='' />
                            <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Palavra chave (opicional)'></input>
                            <img className='icon absolute' src='./assets/Combined Shape.svg' alt='' />
                        </div>
                        <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                            <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Digite sua localização'></input>
                            <img className='icon absolute' src='./assets/Shape.svg' alt='' />
                        </div>
                        <div className='bg-blue-600 rounded flex p-4 justify-center items-center'>
                            <img src='./assets/search1.png' alt='' />
                            <div className='bg-blue-600 text-white font-bold text-base ml-2'>Buscar</div>
                        </div>
                    </div>
                </div>
                <div className='absolute card bg-white rounded border-2 border-[#6C83B7] cursor-pointer' onClick={() => setModel(true)}>
                    <div className='relative'>
                        <img src='./assets/image/Rectangle 42.png' alt='' />
                        <div className='pt-9 pb-10'>
                            <p className='text-lg font-bold leading-6 text-gray-900 text-center'>JB Bianca Fotos</p>
                            <p className='text-base leading-6 text-center text-blue-600 font-medium'>Casamentos</p>
                            <div className='flex justify-center mt-4 mb-7'>
                                <img src='./assets/Mapa.png' alt='' />
                                <img className='ml-2 mr-1' src='./assets/site.png' alt='' />
                                <img className='ml-1 mr-2' src='./assets/instagram.png' alt='' />
                                <img src='./assets/fb.png' alt='' />
                            </div>
                            <div className='width ml-auto mr-auto bg-blue-600 rounded pt-3 pr-4 pb-3 pl-4 flex items-center'>
                                <img className='object-contain mr-2' src='./assets/Icon (Stroke)1.png' alt='' />
                                <p className='text-white'>Solicitar Orçamento</p>
                            </div>
                        </div>
                        <img className='absolute icon1' src='./assets/Frame 210.png' alt='' />
                    </div>
                </div>
                <div className='absolute search_button rounded-[150px] mt-[15px] ml-[15px] p-[14.86px] bg-white m_md:hidden' onClick={() => { setShow(true); Show() }}>
                    <img src='./assets/search.png' alt='' />
                </div>
                <div className='absolute location bg-white rounded-[150px] pt-3 pr-5 pb-3 pl-5 flex justify-center items-center'>
                    <p className='mr-3 text-base leading-5 text-right text-blue-900 md:hidden'>Visualização</p>
                    <div className='mr-3'>
                        <p className='w-4 h-1 bg-gray-400 rounded'></p>
                        <p className='w-4 h-1 bg-gray-400 mt-0.5 mb-0.5 rounded'></p>
                        <p className='w-4 h-1 bg-gray-400 rounded'></p>
                    </div>
                    <img className='mr-3' src='./assets/Union (1).png' alt='' />
                    <img src='./assets/Shape (2).png' alt='' />
                </div>
                <div className='absolute section bg-white border-2 border-gray-400 rounded-[200px] flex pt-2 pl-2 pb-2 justify-center items-center'>
                    <img src='./assets/Group 30.png' alt='' />
                    <div className='ml-5 mr-12'>
                        <p className='text-xl font-bold leading-6 text-gray-900'>Fábio de Osasco, SP</p>
                        <p className='text-base leading-6 text-gray-700 font-medium'>Acabou de ser adicionado!</p>
                        <p className='text-xs leading-6 font-medium text-gray-600'>a 2 min  |  <span className='text-blue-600'>Fotógrafos Online</span></p>
                    </div>
                </div>
            </div>
            {show
                ?
                <>
                    <div className='absolute top-0 left-0 w-full h-full background' onClick={() => setShow(false)}></div>
                    <div className='absolute bg-white rounded search1 pt-5 pr-6 pb-6 pl-6 z-50'>
                        <div className='relative'>
                            <p className='font-bold text-xl leading-7 text-gray-900'>Busque Fotógrafos</p>
                            <div className='mt-5'>
                                <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                                    <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Fotógrafia de...'></input>
                                    <img className='icon absolute' src='./assets/Combined Shape.svg' alt='' />
                                </div>
                                <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                                    <img className='object-contain pl-3' src='./assets/search.png' alt='' />
                                    <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Palavra chave (opicional)'></input>
                                    <img className='icon absolute' src='./assets/Combined Shape.svg' alt='' />
                                </div>
                                <div className='bg-gray-100 relative border-solid border-2 border-gray-300 rounded flex w-64 mb-4'>
                                    <input className='bg-gray-100 pl-3 text-base leading-10 flex items-center text-gray-700 outline-0' type="text" placeholder='Digite sua localização'></input>
                                    <img className='icon absolute' src='./assets/Shape.svg' alt='' />
                                </div>
                                <div className='bg-blue-600 rounded flex p-4 justify-center items-center'>
                                    <img src='./assets/search1.png' alt='' />
                                    <div className='bg-blue-600 text-white font-bold text-base ml-2'>Buscar</div>
                                </div>
                            </div>
                            <img className='absolute top-0 right-0' src='./assets/close.png' alt='' onClick={() => setShow(false)} />
                        </div>
                    </div>
                </>
                : <></>}
            {model
                ?
                <>
                    <div className='absolute top-0 left-0 w-full h-full background' onClick={() => setModel(false)}></div>
                    <div className='absolute pt-9 md:pt-[33px] pr-10 md:pr-[23px] pb-[39px] md:pb-[31px] pl-[38px] md:pl-6 bg-white model rounded-[5px] min-w-[350px]'>
                        <div className='relative'>
                            <div className='flex md:flex-col md:items-center'>
                                <img className='md:w-[53px]' src='./assets/Frame 210.svg' alt='' />
                                <div className='ml-[14px] text-[22px] lg:text-[18px] md:text-[17px] md:ml-0 md:mt-[9px] md:text-center'>
                                    <p>
                                        Consultar Orçamento e Disponibilidade <br />
                                        <b>JB Bianca Fotos</b>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center mt-[18.41px] mb-[27.59px] md:justify-center'>
                                <img src='./assets/Icon.svg' alt='' />
                                <p className='text-base leading-5 text-[#999999] ml-2'>Responde em menos de 2hrs</p>
                            </div>
                            <div>
                                <div className='mb-[15px] cursor-pointer flex bg-[#F6F6F6] rounded-[5px] pt-[14.37px] pb-[14.63px] pl-[14.5px] border-[1.5px] border-[#E1E1E1] hover:bg-white hover:border-[1.5px] hover:border-[#646464]'>
                                    <img src='./assets/Union.svg' alt='' />
                                    <input className='w-full bg-transparent ml-[9.98px] outline-0 hover:bg-white' type="text" placeholder='Name' />
                                </div>
                                <div className='mb-[15px] cursor-pointer flex bg-[#F6F6F6] rounded-[5px] pt-[14.37px] pb-[14.63px] pl-[14.5px] border-[1.5px] border-[#E1E1E1] hover:bg-white hover:border-[1.5px] hover:border-[#646464]'>
                                    <img src='./assets/Icon (Stroke).svg' alt='' />
                                    <input className='w-full bg-transparent ml-[9.98px] outline-0 hover:bg-white' type="text" placeholder='Email' />
                                </div>
                                <div className='flex lg:flex-col'>
                                    <div className='mr-[15.16px] w-1/2 lg:w-full mb-[15px] cursor-pointer flex bg-[#F6F6F6] rounded-[5px] pt-[14.37px] pb-[14.63px] pl-[14.5px] border-[1.5px] border-[#E1E1E1] hover:bg-white hover:border-[1.5px] hover:border-[#646464]'>
                                        <img src='./assets/calendar.svg' alt='' />
                                        <input className='w-full bg-transparent ml-[9.98px] outline-0 hover:bg-white' type="text" placeholder='Data do Evento' />
                                    </div>
                                    <div className='flex w-1/2 lg:w-full mb-[15px] cursor-pointer flex bg-[#F6F6F6] rounded-[5px] border-[1.5px] border-[#E1E1E1] hover:bg-white hover:border-[1.5px] hover:border-[#646464]'>
                                        <div className='flex items-center border-r-[1.5px] border-[#E1E1E1]'>
                                            <p className='ml-[13.25px] mr-[7.22px] text-[#6C6C6C]'>+1</p>
                                            <img className='mr-[18.12px]' src='./assets/Combined Shape.svg' alt='' />
                                        </div>
                                        <div className='flex pt-[14.37px] pb-[14.63px] pl-[14.5px]'>
                                            <img src='./assets/Icon (1).svg' alt='' />
                                            <input className='w-full bg-transparent ml-[9.98px] outline-0 hover:bg-white' type="text" placeholder='(DDD) Telefone' />
                                        </div>
                                    </div>
                                </div>
                                <div className='relative mb-[15px] cursor-pointer flex bg-[#F6F6F6] rounded-[5px] pt-[10px] pb-[10px] pl-[14.5px] border-[1.5px] border-[#E1E1E1] hover:bg-white hover:border-[1.5px] hover:border-[#646464]'>
                                    <div className='flex'>
                                        <img src='./assets/Shape1.svg' alt='' />
                                        <input className='w-full bg-transparent ml-[9.98px] outline-0 hover:bg-white' type="text" placeholder='Selecione tipo de serviço' />
                                    </div>
                                    <img className='absolute top-5 right-[18.17px]' src='./assets/Combined Shape.svg' alt='' />
                                </div>
                                <textarea className='pr-12 h-[114px] w-full bg-[#F6F6F6] pl-4 pt-2 outline-0 hover:bg-white rounded-[5px] border-[1.5px] border-[#E1E1E1] hover:border-[1.5px] hover:border-[#646464]' type="text" placeholder='Olá, gostaria de mais informações sobre...' />
                            </div>
                            <div className='flex mt-[29.67px] justify-end items-center md:flex-col-reverse'>
                                <p className='text-[#1D56DB] leading-[23px] font-medium md:w-full md:text-center'>Cancelar</p>
                                <div className='flex bg-[#3669CC] rounded ml-[22.94px] md:ml-0 pt-[14px] md:w-full md:justify-center md:mb-[14.45px] pr-5 pb-[14px] pl-5'>
                                    <img className='object-contain mr-2' src='./assets/Icon (Stroke)1.png' alt='' />
                                    <p className='text-white text-base font-[700]'>Enviar Solicitação</p>
                                </div>
                            </div>
                            <img className='absolute -top-[20px] -right-[25px] md:-right-[10px] hover:cursor-pointer' src='./assets/close.png' alt='' onClick={() => setModel(false)} />
                        </div>
                    </div>
                </>
                : <></>
            }

        </>
    )
}