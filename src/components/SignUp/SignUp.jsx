import React from 'react'
import SnapStore from '../../assets/SnapStore.png'

const SignUp = () => {
  return (
    <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-16 w-auto cursor-pointer" src={SnapStore} alt="Your Company"/>
          
        </div>
      
        <div className="mt-10 p-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg border border-black rounded-md">
            <div>
                <h2 className=" text-center text-2xl leading-9 tracking-tight">Sign in</h2>
            </div>
          <form action="" className="space-y-6" method="POST">
            <p className="p-2 text-sm font-bold text-red-800 rounded-lg  dark:text-red-400" role="alert"></p> 
            <div>
              <label for="email" className="block text-sm font-medium leading-6">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"/>
            <p className="p-2 text-sm font-bold text-red-800 rounded-lg  dark:text-red-400" role="alert"></p> 
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6">Password</label>
                <p className="p-2 text-sm font-bold text-red-800 rounded-lg  dark:text-red-400" role="alert"></p> 
                <div className="text-sm">
                  <a href="#" className="font-semibold text-orange-500 hover:text-orange-400">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required className="block p-2  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
      
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
            </div>

            <div className="flex items-center justify-center">
                <p className="text-[11px]">By continuing, you agree to Amazon's <a href="" className="text-blue-600 underline">  Conditions of Use </a> and <a href="" className="text-blue-600 underline"> Privacy Notice.</a></p>
            </div>
          </form>
          
        </div>

        <div className="flex text-center items-center justify-center mt-10">

            <a href="" className="text-sm text-gray-500">New to Snapstore?</a>
        </div>
        <div  className="flex text-center items-center justify-center mt-7">
            <a href="" className="text-[13px] hover:bg-gray-100 w-1/4 p-1 border-black border shadow-md rounded-md">Create Your Snapstore Account</a>
        </div>
      </div>

  )
}

export default SignUp
