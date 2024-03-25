import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'

export default function Sidebar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const market = ["Sentiment", 'Market', 'Sector', 'Watchlist', 'Events', 'News/Intervies']

    return (
        <div className='flex '>

            {isMenuOpen && (
                <aside className="bg-blue-900 flex h-screen w-64 flex-col overflow-y-auto text-white px-5 py-8">
                    <h1 className="inline-flex justify-between w-full">
                        <div className='flex'>
                            <a className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                            </a>
                            <p className="text-md font-semibold w-max ps-2" >Hello User</p>
                        </div>
                        <p className='p-1 bg'>
                            <svg xmlns="https://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        </p>
                    </h1>
                    <hr className='mt-2' />


                    <div className="mt-3 flex flex-1 flex-col justify-between text-white">
                        <nav className="-mx-3 space-y-6 ">
                            <div className="space-y-2 ">
                                <a
                                    className="flex transform items-center px-3 py-2 text-white-600 transition-colors duration-600 hover:bg-blue-950"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-text"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
                                    <span className="px-2 text-md font-medium">Disscussion Fourm</span>
                                </a>
                                <a
                                    className="flex transform items-center px-3 py-2 text-white-600 transition-colors duration-600 hover:bg-blue-950"
                                    href="#"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                                    <span className="px-2 text-md font-medium">Market Stories</span>
                                </a>

                                {market.map((item) => (
                                    <div className=" text-white-600  ">
                                        <div className='w-full ps-11 py-1.5 text-md font-medium transition-colors duration-600 hover:bg-blue-950'>
                                            <p className=''>{item}</p>
                                        </div>
                                    </div>
                                ))}



                            </div>

                        </nav>
                    </div>
                </aside>

            )}

            <button onClick={toggleMenu} className='absolute left-1 h-20 mt-60 bg-blue-900 text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></button>

        </div>

    )
}
