import React from 'react'

const ScoreCard = ({player1name, player1score, player2name, player2score}) => {
  return (


  <div className="w-full p-4 text-center bg-blue-gradient border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
    
    <div className="w-full bg-green-800 text-white rounded-lg flex-grow inline-flex items-center justify-center p-2 mb-2">
      <h5 className="text-xl font-bold text-white">
        {player1score > player2score
          ? `Winner: ${player1name}`
          : player2score > player1score
          ? `Winner: ${player2name}`
          : "Tie"}
      </h5>
    </div>


    

    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        
        <div className="w-full sm:w-auto bg-red-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
          
        <div className="mr-3 w-7 h-7">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-full h-full text-white"
          >
            <path
              fill="currentColor"
              d="M41,10.9L37.1,7,24,20.1,10.9,7,7,10.9,20.1,24,7,37.1,10.9,41,24,27.9,37.1,41,41,37.1,27.9,24Z"
            />
          </svg>
        </div>




          <div className="text-left">
              <div className="mb-1 font-bold text-xs text-center">{player1name}</div>
              <div className="-mt-1 font-sans text-sm font-semibold text-center">{player1score}</div>
          </div>
        </div>
       
        <div className="w-full sm:w-auto bg-blue-800  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
          <div className="mr-3 w-7 h-7">
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-full h-full text-white"
            >
              <circle
                cx="24"
                cy="24"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
          </div>


          <div className="text-left">
              <div className="mb-1 font-bold text-xs text-center">{player2name}</div>
              <div className="-mt-1 font-sans text-sm font-semibold text-center">{player2score}</div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default ScoreCard