
import React from 'react'

export const Dashboard = () => {
  return (
      <div className='flex items-center flex-col m-10'>
          <div className='flex items-center flex-col'  >
              <div className="text-red-600 flex items-center flex-col"> <img src="./protarck-logopng-upscaled.png" alt="Protarck logo" style={{ width: "3rem", height: "3rem" }} />
                  Protarck</div>
              <div className="text-green-600">Next Gen Project Monitoring!</div>
          </div>
          <div className="text-blue-600 flex items-center">
              <p>A powerful and versatile project management tool that helps you get things done.</p>
          </div>
          <div>
              <div className='bg-yellow-600 flex items-center'> <a href="https://protrack.ceyinfo.com" className="btn btn-primary">Try Protarck for free</a></div>
          </div>
      </div>
  )
}

export default Dashboard