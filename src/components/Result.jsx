import React from 'react'
import chart from '../assets/chart.svg';
import arrow from '../assets/arrow.svg';
import arrowdiv from '../assets/arrowdiv.svg';




function Result() {
  return (
    <div className='' >
        <div className='w-[680px]  h-[84px] bg-[#BAE2FD] font-medium text-[24px]  flex justify-center items-center'>Results</div>
            <div className='w-[680px] h-[997px] pl-[44px]  border-[#1C98EB] border-2 pr-[39px]'>
                
                <div >
                <h1 className='text-[32px] font-medium pt-[42px]'>Results</h1>
                <h1 className='text-[24px] font-medium pt-[17px]'>Score: 74%</h1>
                </div>

                <div className='flex pt-[27px] justify-evenly  '>
                            <div className=''>
                                <img className='w-[251px] h-[251px]' src={chart} alt='chart'/>
                            </div>
                    <div className='flex flex-col gap-y-[26px]'>
                        <div className='flex gap-x-[13px]'>
                            <div className='w-[61px] h-[25px] bg-[#235784]'></div>
                            <div>Correct Answer</div>
                        </div>
                        <div  className='flex gap-x-[13px]'>
                            <div className='w-[61px] h-[25px] bg-[#BCDBDF]'></div>
                            <div>Not Answered</div>
                        </div>
                        <div  className='flex gap-x-[13px]'>
                            <div className='w-[61px] h-[25px] bg-[#40A8C4]'></div>
                            <div>Wrong</div>
                        </div>
                    </div>
                </div>

                <div className='w-[53px] absolute h-[52px]  top-16 mt-[110px] ml-[-70px]'>
                    <img className='absolute' src={arrowdiv} alt='arrowdiv'/>
                    <img className='mt-[14px] mb-[14px] mr-[13.85px] ml-[15.85px] relative' src={arrow} alt='arrow'/>
                </div>

                <div className='mt-[66px] w-[601px] text-[20px] h-[397px] border-2 ml-[0px] rounded-[10px] mr-[39px]'>
                    <div className='border-b-2 w-full h-[57px] text-[20px] font-medium  flex items-center pl-[124px]'>Analysis</div>
                    <div className='border-b-2 w-full h-[57px]  flex justify-between items-center font-medium'>
                        <div className='ml-[124px]'>Correct Answers:</div>
                        <div className='mr-[180px]'>9</div>
                    </div>
                    <div className='border-b-2 w-full h-[57px] flex justify-between items-center font-medium'>
                        <div className='ml-[124px]'>Wrong Answers:</div>
                        <div className='mr-[180px]'>1</div>
                    </div>
                    <div className='border-b-2 w-full h-[57px]  flex justify-between  items-center font-medium'>
                        <div className='ml-[124px]'>UnAnswered:</div>
                        <div className='mr-[180px]'>1</div>
                    </div>
                    <div className='border-b-2 w-full h-[57px]  flex justify-between  items-center font-medium'>
                        <div className='ml-[124px] text-[#9C9C9C] font-normal'>Skipped:</div>
                        <div className='mr-[180px]'>0</div>
                    </div>
                    <div className='border-b-2 w-full h-[57px]  flex  justify-between items-center font-medium'>
                        <div className='ml-[124px] text-[#9C9C9C] font-normal'>Out of time:</div>
                        <div className='mr-[180px]'>0</div>
                    </div>
                    <div className=' w-full h-[57px]  flex justify-between items-center font-medium'>
                        <div className='ml-[124px]' >Time used:</div>
                        <div className='mr-[180px]'>2:30</div>
                    </div>
                </div>

            
            </div>
        </div>
    
  )
}

export default Result