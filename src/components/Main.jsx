import React from 'react'
import Result from './Result';
import scoreblue from '../assets/scoreblue.svg';
import scoregreen from '../assets/scoregreen.svg';
import scorered from '../assets/scorered.svg';


function Main() {
  return (
    <div className='pl-[35px] w-[1920px] text-left flex justify-between'>
        <div className='w-[828px]  flex flex-col mt-[13px] ml-[271px]'>
            <div className='text-[20px] font-medium'>Your Answer:</div>
            <div className='text-[18px] h-[108px] w-[828px] pt-[13px] font-normal  pr-[98px]'>
                <p >The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite <span className='text-white bg-[#DCA11D]'>nuance and</span> all the constraints and, uh spill small, small things that needs to be learned up. Yeah. This question, it almost took <span className='text-white bg-[#E26161]'>three to four</span> months to <span className='text-white bg-[#1C98EB]'>complete</span> a entire software of the Adobe Illustrator.</p>
            </div>
            <div className='w-[828px] text-[18px] pt-[16px] font-normal pr-[98px]'>
                <p>The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite nuance and all the constraints and, uh spill small, small things that needs to be learned up. Yeah. This question, it almost took three to four months to complete a entire software of the Adobe Illustrator.</p>
            </div >
            <div className=' w-[828px] text-[18px] mt-[13px] font-normal pr-[107px] '>
                <p>The most challenging software for me is specifically to be specifically Telluride is Figma. Yeah. Figma and Adobe Illustrator, which is, uh, they are quite nuance and all the constraints and, uh spill small, small things that needs to be learned up. </p>
            </div>

            <div className='text-[18px] font-medium flex justify-evenly mt-[18px]'>
                <div className='flex items-center justify-center'>
                    <div className='w-[44px] h-[14px]  bg-[#E26161]'></div>
                    <p className='ml-[12px]'>Grammatical error</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-[44px] h-[14px]  bg-[#DCA11D]'></div>
                    <p className='ml-[12px]'>Vocabulary error</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-[44px] h-[14px]  bg-[#1C98EB]'></div>
                    <p className='ml-[12px]'>Spelling error</p>
                </div>
            </div>
            <div className='ml-[-33px]  w-[968px] mt-[17px]  h-[1px] bg-[#1C98EB]'></div>
            <div className='mt-[21px] '>
                <div className='text-[24px] font-medium'>Management Score:</div>

                <div className='flex w-[899px] border-b-2 pt-[24px] h-[176px]'>

                    <div className='flex flex-col '>
                        <div className='relative'>
                           <img className='w-[85px] h-[85px] absolute' src={scoreblue} alt='bluescore'/> 
                           <span className='text-[28.571px] mt-5 ml-6 font-normal relative inline-block '>59</span>
                        </div>
                        <div className='mt-[33px] text-[20px] text-[#0280D4]'>
                            Score:59%
                        </div>
                    </div>

                    <div className='ml-[53px]'>
                        <div className='font-medium text-[20px]'>
                            Focus Management
                        </div>
                        <div className='w-[759px] mt-[12px] h-[60px] text-xl mr-[27px] flex-shrink-0 font-normal'>
                            Focus Score: Focus score refers to the ability of an individual to concentrate and direct their attention towards a specific task or information. 
                        </div>
                    </div>

                </div>


                <div className='flex w-[899px] border-b-2 pt-[24px] h-[176px] '>
                    <div className='flex flex-col '>
                        <div className='relative'>
                           <img className='w-[85px] h-[85px] absolute' src={scoregreen} alt='greenscore'/> 
                           <span className='text-[28.571px] mt-5 ml-6 font-normal relative inline-block '>84</span>
                        </div>
                        <div className='mt-[33px] text-[20px] text-[#02BC63]'>
                            Score:74%
                        </div>
                    </div>

                    <div className='ml-[53px]'>
                        <div className='font-medium text-[20px]'>
                        Time Management
                        </div>
                        <div className='w-[759px] mt-[12px] h-[60px] text-xl  flex flex-wrap font-normal'>
                        Time Management: Time management is the practice of planning, organizing, and allocating time to tasks and activities in a way that maximizes productivity and efficiency. 
                        </div>
                    </div>

                </div>



                <div className='flex w-[899px] pt-[24px] h-[176px]'>

                    <div className='flex flex-col '>
                        <div className='relative'>
                           <img className='w-[85px] h-[85px] absolute' src={scorered} alt='redscore'/> 
                           <span className='text-[28.571px] mt-5 ml-6 font-normal relative inline-block '>39</span>
                        </div>
                        <div className='mt-[33px] text-[20px] text-[#EB5757]'>
                            Score:39%
                        </div>
                    </div>

                    <div className='ml-[53px]'>
                        <div className='font-medium text-[20px]'>
                        Critical Thinking
                        </div>
                        <div className='w-[759px] mt-[12px] h-[60px] text-xl font-normal'>
                        Critical thinking is the process of analyzing, evaluating, and interpreting information or situations in a logical and systematic manner. 
                        </div>
                    </div>

                </div>
                      


                
            </div>
            

        </div>
        <Result/>
       
    </div>
  )
}

export default Main;