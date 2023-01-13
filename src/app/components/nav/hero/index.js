import { AiOutlinePlayCircle } from 'react-icons/ai';

function Hero() {
  return (
    <div className="relative ">
        <img className="rounded-xl   " src="https://flxt.tmsimg.com/assets/p22231131_b_h8_aa.jpg" loading="lazy" alt="" />
        <div className="absolute top-10 left-5">
             <h1 className="text-3xl font-bold text-white" >Baymax 2.0 </h1>
             <button className='bg-red-500 flex items-center p-2 rounded-lg text-white px-2 mt-5 border-red-500 shadow-md'> <AiOutlinePlayCircle size={21}/> <span className='ml-2' >Watch Now </span>
             </button>
            
        </div>
    </div>
  )
}

export default Hero