import EmphasisContact from '@/public/EmphasisContact'
import React, { FC } from 'react'
import ImagesContactForm from './ImagesContactForm'

const Contact: FC = () => {
  return (
    <section className="bg-[#f1f1f1] w-full flex justify-center border-b-4 border-dark-purple">
      <div className="relative w-full max-w-[1250px] flex flex-col justify-center items-center space-y-4 pb-48 pt-36 mx-3 lg:mx-10">
        <ImagesContactForm />

        <div className="flex flex-col space-y-6 items-center">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative text-center">
            Interested in <br />{' '}
            <span className="text-medium-blue">working together?</span>
            <EmphasisContact className="absolute -top-12 -right-10 w-12" />
          </h2>
          <p>Make contact</p>
        </div>

        <form className="w-full max-w-lg flex flex-col space-y-3">
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
