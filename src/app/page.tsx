import React from 'react'
import Hero from './modules/hero'
import Features from './modules/features'
import Pricing from './modules/pricing'
import Editor from './modules/editor'

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Editor />
    </div>
  )
}

export default page
