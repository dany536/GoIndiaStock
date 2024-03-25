import React from 'react'
import Discussion from './Discussion.jsx'
import Stories from './Stories.jsx'
import Sidebar from './Sidebar.jsx'

function Main() {
    return (
        <div className='h-max w-[98%] mx-auto grid sm:grid-flow-col grid-cols-1'>

            <div className="m-3 w-full">

                <Discussion />

            </div>
            <div className="m-3 w-full">
                <Stories />
            </div>
        </div>
    )
}

export default Main