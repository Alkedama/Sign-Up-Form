import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container flex" id="ParentContainer">

        <div class="container">

          <div class="relative">
            <img src="/images/halie-west-25xggax4bSA-unsplash.jpg" alt="Background Image" />

            <div class="absolute flex inset-0">
              <img src="/images/odin-lined.png" alt="Logo" />
              ODIN
            </div>
          </div>

          <span>Photo by <span class="underline">Halie West</span> on <span class="underline">Unsplash</span></span>
        </div>


        <p>This is not a real online service! You know you need something like this in your life to help you
          realize your deepest dreams. Sign up <em>now</em> to get started.</p>

        <p>You know you want to.</p>

        <p>Let's do this!</p>

        <form action="" method="post">
          <label for="">First Name</label>
          <input type="text" name="firstName" required />
          <label for="">Last Name</label>
          <input type="text" name="lastName" />
          <label for="">Email</label>
          <input type="email" name="email" required />
          <label for="">Phone Number</label>
          <input type="tel" name="phoneNumber" />
          <label for="">Password</label>
          <input type="password" name="password" required />
          <label for="">Confirm Password</label>
          <input type="password" name="confirmPassword" required />

          <button type="submit">Create Account</button>
          <span>Already have an account? <a href="#">Log in</a></span>
        </form>
      </div>

    </>
  )
}

export default App
