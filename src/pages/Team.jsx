import React from 'react'

import TeamCss from "./TeamCss.module.css"
import PeopleCard from '../components/Team/PeopleCard'

const Team = () => {
    return (
        <>
            <div className='container mx-auto px-5 m-auto'>

                <div className={TeamCss.header}>
                    <h1><span className={TeamCss.text_blue}>Our</span><span className={TeamCss.text_white}> Team</span></h1>
                </div>
                <section>

                    <div className='grid  grid-cols-3 md:grid-cols-5 gap-10 py-5 ' >
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>
                </section>
                <section>

                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                        <div></div>
                        <PeopleCard />
                        <div></div>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                        <div></div>
                        <PeopleCard />
                        <div></div>
                    </div>
                </section>
                <section>

                    <div className=' grid grid-cols-2 md:grid-cols-6 gap-12 py-5'>
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>

                    <h3 className='text-white text-center font-bold pt-10'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-6 gap-12 py-5'>
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>
                    <h3 className='text-white text-center font-bold pt-10'>Social Media Team</h3>

                    <div className=' grid grid-cols-2 md:grid-cols-6 gap-12 py-5'>
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>
                    <h3 className='text-white text-center font-bold pt-10'>Content Team</h3>

                    <div className=' grid grid-cols-2 md:grid-cols-6 gap-12 py-5'>
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>
                    <h3 className='text-white text-center font-bold pt-10'>Web Development Team</h3>

                    <div className=' grid grid-cols-2 md:grid-cols-6 gap-12 py-5'>
                        <div></div>

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <div></div>

                    </div>
                </section>






            </div>
        </>
    )
}

export default Team