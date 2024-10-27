import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='items-center justify-center text-center p-10'><h1 className='pb-10 font-bold underline'>My About page</h1>
    <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum minima dolor, illum dolore delectus iusto maiores assumenda! Unde, omnis exercitationem fugit delectus esse assumenda? Reiciendis nesciunt qui voluptatibus suscipit?
    Enim beatae expedita eveniet qui ipsa at minus dignissimos. Maiores nemo dicta ipsa, illum eveniet aspernatur harum assumenda, id dolorum, minus neque repudiandae quaerat recusandae eligendi officia nam corrupti vitae.
    Veritatis autem iure perspiciatis quam at reiciendis ea velit. Dolorem at hic numquam fuga, laboriosam modi atque minus sunt! Ratione aperiam enim reprehenderit numquam vero fugit sint itaque totam unde?
    Officia quia accusamus eum dolores tempora nesciunt repellendus deserunt qui neque! Molestias doloremque dolor fuga nobis iste esse alias sequi necessitatibus accusamus, itaque officia nesciunt possimus, non aliquid perspiciatis. Magnam?
    Deleniti amet maiores alias iusto facilis corrupti libero inventore error non, hic cumque, saepe provident magnam velit sequi, doloribus magni voluptatum exercitationem corporis perspiciatis. Animi ratione alias culpa voluptatum doloribus?</p>
    <button className='p-5 border text-blue-950 rounded bg-gray-300 hover:bg-slate-500' > <Link href={'/about/hobbies'} >Click Here For Nesteted Routing </Link></button></div>
  )
}

export default page