import React from 'react'

const PertsonaleInfo = () => {
   const perInfo = `Asha Bhosle has won seven Filmfare Awards for Best Female Playback Singer out of 18 nominations. 
    She won her first two awards in 1967 and 1968, when her elder sister Lata Mangeshkar still used to accept 
    the award (Lata Mangeshkar asked not to be considered for the award nominations after 1969 to promote new
     talent.) After receiving the award in 1979, Asha Bhosle emulated her sister and requested that her name not
      be considered for the nominations hereafter. Despite this, she is the most frequent winner of this award
       to date, tying with Alka Yagnik. She was later given a Special Award for Rangeela Lifetime Achievement 
       Award in 2001.`

  return (
    <>
    <h3 className='text-center bg-secondary text-warning py-3 my-2'>PertsonaleInfo</h3>
    <p className='w-75 mx-auto lead'>{perInfo}</p>
    </>
  )
}

export default PertsonaleInfo