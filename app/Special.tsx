import React from 'react'

const Special = () => {
  return (
    <section className="mb-44 flex flex-col gap-14 items-center">
      <h2 className="font-extrabold text-3xl lg:text-5xl ">
        What makes them so <span className="text-medium-blue">special?</span>
      </h2>

      <div className="flex gap-10">
        <div className="border-4 border-dark-purple w-64 h-64 rounded-2xl"></div>
        <div className="border-4 border-dark-purple w-64 h-64 rounded-2xl"></div>
        <div className="border-4 border-dark-purple w-64 h-64 rounded-2xl"></div>
        <div className="border-4 border-dark-purple w-64 h-64 rounded-2xl"></div>
      </div>
    </section>
  )
}

export default Special
