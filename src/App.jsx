import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Input from './components/Input'
import Output from './components/Output'
import Footer from './components/Footer'

function App() {
  const [text, setText] = useState("Please enter your Text above")
  
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <section id='converter'>
        <Input text={text} setText={setText}></Input>
        <Output text={text}></Output>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
