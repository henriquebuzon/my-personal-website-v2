'use client'

import EmphasisContact from '@/public/EmphasisContact'
import React, { FC, useState } from 'react'
import ImagesContactForm from './ImagesContactForm'
import emailjs from '@emailjs/browser'

const Contact: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name || !email || !message) {
      alert('Please fill all inputs before submitting the email.')
      return
    }

    await emailjs.send(
      'service_5i0u279',
      'template_04f6mso',
      {
        from_name: name,
        from_email: email,
        message,
      },
      'Aj7BwPtLnrdxj28qd'
    )

    setEmail('')
    setMessage('')
    setName('')
    alert('Email sent!')
  }

  return (
    <section className="bg-neutral-100 w-full flex justify-center  border-dark-purple">
      <div className="relative w-full max-w-[1250px] flex flex-col justify-center items-center space-y-4 pb-48 pt-32 mx-3 lg:mx-10">
        <ImagesContactForm />

        <div className="flex flex-col space-y-6 items-center">
          <h2 className="font-extrabold text-3xl lg:text-5xl relative text-center">
            Interested in <br />{' '}
            <span className="text-medium-blue">working together?</span>
            <EmphasisContact className="absolute -top-12 -right-10 w-12" />
          </h2>
          <p>Make contact</p>
        </div>

        <form
          className="w-full max-w-lg flex flex-col space-y-3"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="bg-transparent py-4 rounded-full border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            className="bg-transparent py-4 rounded-full border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            rows={6}
            className="bg-transparent py-4 rounded-[2.2rem] border-dark-purple border-[3px] mt-5 px-8 w-full"
            placeholder="Your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input
            type="submit"
            className="py-4 bg-pink rounded-full border-dark-purple border-[3px] font-bold w-full cursor-pointer"
            value="Send"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
