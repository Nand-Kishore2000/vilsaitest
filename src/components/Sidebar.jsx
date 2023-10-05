import React from 'react'

// import logoimg from '../assets/image.png';
import dashboard from '../assets/dashboard.svg';
import mentor from '../assets/mentor.svg';
import mockinterview from '../assets/mockinterview.svg';
import praticetest from '../assets/praticetest.svg';
import communication from '../assets/communication.svg';
import reports from '../assets/reports.svg';
import settings from '../assets/settings.svg';
import premium from '../assets/premium.svg';
import resume from '../assets/resume.svg';
import course from '../assets/course.svg';
import user from '../assets/user.svg';
import logout from '../assets/logout.svg';
import line from '../assets/line.svg'




// console.log(logoimg);


function Sidebar() {
  return (
    <div className='sidebar w-[271px] max-h-[1080px]  absolute top-0 left-0 shadow-lg rounded-lg flex justify-evenly  flex-col'>
       

       <div className='w-[271px] pt-[47px] pl-[42px] h-[144px]'>
        <img  className='w-[48.92px] h-[47.36px]' src='./logo.svg' alt='logo'></img>
       </div>
       
       <div className='w-[52px] h-[52px] top-[49px]  left-[245px] absolute rounded-[52px] bg-[#0280D4]'>
        <div className='pt-[18px]  flex flex-col gap-y-[8px] pl-[12px]'>
             <div>
             <img   src={line} alt='menuicon'/>
            </div>
            <div>

             <img  src={line} alt='menuicon'/>
            </div>
        </div>
      
       </div>
      
       <div className='flex flex-col mt-[49.64px] gap-y-[37px] ml-[40px] '>
            <div className='flex text-black items-center text-[20px]  font-[400] gap-x-4 cursor-pointer            '>
                <span><img src={dashboard} alt='dashboard'/></span>
                <div>Dashboard</div>
            </div>
            <div className='flex items-center text-[20px] font-[400] gap-x-4 cursor-pointer
           '>
                <span><img src={mentor} alt='dashboard'/></span>
                <div>1 on 1 mentor</div>
            </div>
            <div className='flex  items-center text-[20px] font-[400] gap-x-4 cursor-pointer'>
                <span><img src={mockinterview} alt='dashboard'/></span>
                <div>Mock Interviews</div>
            </div>
            <div className='flex items-center text-[20px] font-[400] gap-x-4 cursor-pointer'>
                <span><img src={praticetest} alt='dashboard'/></span>
                <div>Practice Test</div>
            </div >
            <div className='flex  items-center text-[20px] font-[400] gap-x-4 cursor-pointer'>
                <span><img src={communication} alt='dashboard'/></span>
                <div>Communication</div>
            </div>
            <div className='flex bg-[#0280D4] ml-[-23px] w-[160px] h-[51px] cursor-pointer text-white rounded-3xl justify-center items-center text-[20px] font-[400] gap-x-4'>
                <span><img src={reports} alt='dashboard'/></span>
                <div>Reports</div>
            </div>
            <div className='flex  items-center text-[20px] font-[400] gap-x-4 cursor-pointer'>
                <span><img src={settings} alt='dashboard'/></span>
                <div>Settings</div>
            </div>
            <div className='flex  items-center text-[20px] font-[400] gap-x-4 cursor-pointer'>
                <span><img src={premium} alt='dashboard'/></span>
                <div>Premium</div>
            </div>
            </div>

        <div className='w-[271px] mt-[45px] h-[1px] bg-gray-300 cursor-pointer'>
        </div>
     

            <div >
                <div className='flex text-[#A8A8A8] mt-[34px] ml-[37px] cursor-pointer items-center text-[20px] font-[400] gap-x-4'>
                    <span><img src={resume} alt='dashboard'/></span>
                    <div>Resume</div>
                </div>
                <div className='flex text-[#A8A8A8] mt-[36px] ml-[37px] cursor-pointer items-center text-[20px] font-[400] gap-x-4'>
                    <span><img src={course} alt='dashboard'/></span>
                    <div>Courses</div>
                </div>
            </div>
            <div className='flex justify-between mt-[157px] cursor-pointer ml-[37px] mb-[65px]'>
                <div className='flex justify-between ' >
                <div className='w-[48px] h-[48px] bg-[#0280D4] rounded-full '>
                     <img className='pt-3 pl-3 pr-3 pb-3' src={user} alt='userlogo'/>
                </div>
                <div className='w-[88px] h-[40px]'>
                    <h2 className='username'>Josephine Langford</h2>
                </div>
                </div>
               

                <div className='w-[48px] h-[48px] cursor-pointer '>
                     <img className='pt-3 pl-3 pr-3 pb-3' src={logout} alt='userlogo'/>
                </div>

            </div>
       
       
    </div>
  )
}

export default Sidebar