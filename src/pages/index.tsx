import Head from 'next/head'
import Image from 'next/image'
import Test from '../Components/test'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-amber-200">
        Hello world!
      </h1>
      <Test/>
    </>
  )
}
