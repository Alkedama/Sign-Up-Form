import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import odinLogo from './assets/images/odin-lined.png'
import backgroundImage from './assets/images/halie-west-25xggax4bSA-unsplash.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex min-h-screen w-screen bg-gradient-to-b hover:bg-gradient-to-t from-lime-800 to-slate-800'>

        <div className='relative shrink-0 w-96'>

          <div className='flex h-screen'>
            <img src={backgroundImage} alt='Background Image' />
          </div>

          <div className='LogoContainer flex absolute inset-0 items-center justify-center
             bg-slate-900 bg-opacity-50'>
            <img className='Logo' src={odinLogo} alt='Logo' />
            <span className='text-5xl'>ODIN</span>
          </div>

          <div className='flex absolute bottom-0 inset-x-0 justify-center'>
            <span>Photo by <span className='underline'>Halie West</span> on <span className='underline'>Unsplash</span></span>
          </div>
        </div>

        <div className='flex flex-col mt-40'>

          <div className='mx-10 w-1/2'>
            <p className='font-mono'>This is not a real online service! You know you need something like this in your life to help you
              realize your deepest dreams. Sign up <span className="italic">now</span> to get started.</p>
            <div className="my-5">
              <p>You <span className="italic">know</span> you want to.</p>
            </div>
          </div>

          <form action='' method='post'>

            <div className='flex w-screen container px-10 py-5 border-solid shadow-lg'>
              <div className="flex-col">
                <div className="my-2">
                  <p>Let's do this!</p>
                </div>
                <div className="flex space-x-16">
                  <div className="flex-col">
                    <div className="mb-3">
                      <label className='block' for='firstName'>First Name</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='text' name='firstName' required />
                    </div>
                    <div className="mb-3">
                      <label className='block' for='email'>Email</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='email' name='email' required />
                    </div>
                    <div className="mb-3">
                      <label className='block' for='password'>Password</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='password' name='password' required />
                    </div>
                  </div>

                  <div className="flex-col">
                    <div className="mb-3">
                      <label className='block' for='lastName'>Last Name</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='text' name='lastName' />
                    </div>
                    <div className="mb-3">
                      <label className='block' for='phoneNumber'>Phone Number</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='tel' name='phoneNumber' />
                    </div>
                    <div className="mb-3">
                      <label className='block' for='confirmPassword'>Confirm Password</label>
                      <input className='bg-slate-200 rounded-md text-slate-800' type='password' name='confirmPassword' required />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col pl-10 my-5">
              <button className='bg-lime-800' type='submit'>Create Account</button>
            </div>

            <div className="flex-col pl-10">
              <span>Already have an account? 
                <a href='#' className='text-lime-300 pl-1 underline decoration-slate-500
                decoration-2'>Log in</a></span>
            </div>
          </form>

        </div>

      </div>
    </>
  )
}

export default App
