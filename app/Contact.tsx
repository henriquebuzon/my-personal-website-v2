import EmphasisContact from '@/public/EmphasisContact'
import React, { FC } from 'react'

const Contact: FC = () => {
  return (
    <section className="bg-[#f1f1f1] w-full flex justify-center">
      <div className="relative w-[1250px] flex flex-col justify-center items-center space-y-6 h-[900px]">
        <h2 className="font-extrabold text-5xl relative text-center">
          Interested in <br />{' '}
          <span className="text-medium-blue">working together?</span>
          <EmphasisContact className="absolute -top-12 -right-20 w-12" />
        </h2>
        <p>Make contact</p>

        <form className="w-full max-w-md flex flex-col space-y-3">
          <input
            type="text"
            className="bg-transparent py-4 rounded-full border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your name"
          />
          <input
            type="text"
            className="bg-transparent py-4 rounded-full border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your email"
          />
          <textarea
            rows={6}
            className="bg-transparent py-4 rounded-[2.2rem] border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your message"
          />

          <button className="py-4 bg-pink rounded-full border-dark-purple border-[3px] font-bold w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
