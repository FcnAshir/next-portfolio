'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Header from './component/header/header'


const contant = () => {
  return (
    <div>
      
      <Header/>
      <div className='w-[500px] h-[700px] justify-center text-center ml-96 '>
        {/* text */}
        <div className='pt-10' ><img src="image/img1.jpg" alt="Syed NoorAlam"  className='rounded-lg  justify-center'/> </div>
        {/* image */}
        <div className='pt-6 text-[50px] text-primary'>{<Typewriter
            options={{
              strings: ['Assalam o Alikum ! ','I,m Syed NoorAlam Learning Nextjs ', ' From Governer house slot Thusday 9 to 12 .', 'This is my thusday Assiment','I Feel This Assiment is not Good','But i am using first time','So thats why please acept my assiment'],
              autoStart: true,
              loop: true,
            }}
          />}</div>
      </div>
      
     {/* <div>
        <div className=' font-semibold text-red-700 text-4xl'>
         <div className='ml-16 pt-16 '>
         {<Typewriter
            options={{
              strings: ['Assalam o Alikum our vlauable GIAIC Valuable Teachers. ','I,m Syed NoorAlam Learning Nextjs ', ' From Governer house slot Thusday 9 to 12 .', 'This is my thusday Assiment','I Feel This Assiment is not Good','But i am using first time','So thats why please acept my assiment'],
              autoStart: true,
              loop: true,
            }}
          />}
         </div>
          <div className='h-10 w-52 float-end mr-28  '><img src="image/img1.jpg" alt="Syed NoorAlam"  className='rounded-lg  '/></div>
        </div>
      </div>  */}
      <div className='mt-96 text-center pt-10 '>
        <hr /><hr />
      <div className='pr-72 pl-72 pt-7  '><fieldset><legend className='font-black pb-10 text-5xl text-primary' >Education</legend>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse assumenda, adipisci, mollitia blanditiis sit similique vitae fugiat eligendi quasi nostrum nam eius earum in totam iusto vero sapiente voluptate sequi.</fieldset> <br /> <hr />
      <fieldset className='  '><legend className='font-black pb-10 text-5xl pt-5  text-primary'>Experience</legend>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi porro sed fuga natus distinctio necessitatibus ex qui voluptatum illo laudantium maxime voluptates magni, iste facere, consequatur tempora laborum. Quas.</fieldset>
       <br /> <hr /><fieldset className='  '><legend className='font-black pb-10 text-5xl pt-5  text-primary'>Projects</legend>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi porro sed fuga natus distinctio necessitatibus ex qui voluptatum illo laudantium maxime voluptates magni, iste facere, consequatur tempora laborum. Quas.</fieldset><br /><hr />
      <br /><fieldset className='  '><legend className='font-black pb-10 text-5xl pt-5  text-primary '>Services</legend>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi porro sed fuga natus distinctio necessitatibus ex qui voluptatum illo laudantium maxime voluptates magni, iste facere, consequatur tempora laborum. Quas.</fieldset></div>
        

      </div>
      <div className='text-center bg-secondary pt-10 mt-10'><h6 className=''>@Syed NoorAlam</h6></div>
      
      
      





    </div>
  )
}

export default contant
//typewriter effecimport Typewriter from 'typewriter-effect';

{/* <Typewriter
  // options={{
  //   strings: ['Hello', 'World'],
  //   autoStart: true,
  //   loop: true,
  // }}
// /> */}
//h1 to h7 and p (block level element ha )
//next js provide link gis se page refresh nhi hota ha
//seo  ka lia ( nav, main-aside ,header,footer,section  tags)

