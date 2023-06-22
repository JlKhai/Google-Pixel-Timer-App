import { useEffect, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { CgPlayPause } from 'react-icons/cg'
import { BiReset } from 'react-icons/bi'
import { RxResume } from 'react-icons/rx'
import Contactme from './Contactme'

const Timer = () => {
  const [time, setTime] = useState(0)
  const [runTimer, setRunTimer] = useState(false)

  useEffect(() => {
    let interval = null

    if (runTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [runTimer])
  return (
    <>
      <div className="flex gap-10 bg-gray-900 justify-center flex-col items-center h-screen w-screen">
        <section className="flex justify-center items-center w-[280px] h-[280px] border-8 border-gray-600 rounded-full">
          <div className="flex justify-center items-center">
            <p className=" p-4 rounded-lg text-white mr-2 text-4xl  ">
              {('0' + Math.floor((time / 60000) % 60)).slice(-2)}
            </p>
            <span className="text-white text-3xl mb-1 mr-1"> : </span>
          </div>

          <div className=" flex justify-center items-center">
            <p className=" p-4 rounded-lg text-white mr-2 text-4xl  ">
              {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
            </p>
            <span className="text-white text-3xl mb-1 mr-1"> : </span>
          </div>

          <div>
            <p className=" p-4 rounded-lg text-white text-4xl  ">
              {('0' + ((time / 10) % 100)).slice(-2)}
            </p>
          </div>
        </section>
        <section>
          {/* playbutton */}
          {!runTimer && time === 0 && (
            <button onClick={() => setRunTimer(true)}>
              <BsFillPlayFill className="w-24 h-24 py-10 rounded-full bg-teal-500 text-gray-800 hover:text-gray-200 hover:bg-teal-600 transition ease-in duration-500 shadow-xl " />
            </button>
          )}

          {/* pausebutton */}
          {runTimer && (
            <button onClick={() => setRunTimer(false)}>
              <CgPlayPause className=" w-36 h-24 py-10 rounded-xl bg-teal-500 text-gray-800 hover:text-gray-200 hover:bg-teal-600 transition ease-in duration-500 shadow-xl" />
            </button>
          )}

          <div className="ml-14">
            {/* resumebutton */}
            {!runTimer && time > 1 && (
              <button onClick={() => setRunTimer(true)}>
                <RxResume className=" w-24 h-24 py-10 rounded-full bg-teal-500 text-gray-800 hover:text-gray-200 hover:bg-teal-600 transition ease-in duration-500 shadow-xl" />
              </button>
            )}
            <span>
              {/* resetbutton  */}
              {!runTimer && time !== 0 && (
                <button className="" onClick={() => setTime(0)}>
                  <BiReset className=" w-14 h-14 p-4 rounded-full bg-violet-950 hover:bg-violet-900 text-gray-400 hover:text-gray-200 transition ease-in duration-500 shadow-xl" />
                </button>
              )}
            </span>
          </div>
        </section>
      </div>
      <Contactme />
    </>
  )
}

export default Timer
