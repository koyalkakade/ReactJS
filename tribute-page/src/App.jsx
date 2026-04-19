import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievements';
import PertsonaleInfo from './components/PertsonaleInfo';
import FilmfareAwards from './components/FilmfareAwards';

function App() {

const Honours = [
"Honorary Doctorates from the University Of Amravati & Jalgaon in Literature.",
"Asha Bhosle is the recipient of the first Doctor of Literature (D.Litt.) of the Jodhpur National University.",
"Asha Bhosle has also received the Freddie Mercury Award.",
"Asha Bhosle has received the Sur Singar Award.",
"The Birmingham Film Festival paid her a special tribute in November 2002.",
"Asha Bhosle was among top 20 music icons of the past 50 years.",
"In 2011, The Guinness Book of World Records officially acknowledged Asha Bhosle, at The Asian Awards, as the most recorded artist in the history of music. She was awarded a certificate for 'the most studio recordings (singles) from Sebastian Coe for recording up to 11,000 solo, duet and chorus-back songs and in over 20 Indian languages since 1943'. At the event she was also awarded the Lifetime Achievement Award.",
"Asha Bhosle is also the first Indian Singer to be nominated for the Grammy Award."

]



  return (
    <>
      <Header />

    <HeroSection />

    <Achievements Honours={Honours} />
    <PertsonaleInfo />
    <FilmfareAwards />
    </>
  )
}

export default App