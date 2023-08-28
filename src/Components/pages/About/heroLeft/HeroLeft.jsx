import React from 'react'

const Heroleft = () => {
  return (
    <div className="col-span-4 p-4 relative">
    <div className="flex flex-col justify-center items-center  lg:items-start h-full  max-w-[700px] lg:m-0 mx-auto gap-y-10">

     <img src="personImage.jpg" width={320} height={320} className="w-60 relatie z-10  border-8  md:w-72 xl:w-80 animate-radiusMorph select-none bg-white object-cover lg:hidden">
      </img>

   <div className='text-center lg:text-start'>
   <h2 className="text-3xl text-gray-500 dark:text-white font-semibold tracking-[1px] mb-2">
        Hi, i'm <span className="text-primary">Julio</span>
      </h2>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary/95 to-[#e68e2e] text-2xl md:text-4xl  lg:text-5xl font-bold tracking-[1px] lg:tracking-none mb-6">
        Frontend Developer
      </h1>
      <h3 className="lg:text-start text-gray-500 dark:text-white w-[80%] mx-auto lg:m-0">
        Passionate Fronted Developer with proven track record in html5,
        CSS3, JavaScript. Committed to excellence and ready to provide
        impactful solutions
      </h3>
   </div>
    </div>
  </div>
  )
}

export default Heroleft