import { AiFillStar } from 'react-icons/ai';

function MovieCard({ medium_cover_image, title_long, year, rating, }) {
  return (
    <div className="md:w-40 w-36   ml-4 mb-4 cursor-pointer bg-slate-700 p-2 rounded mb-4 hover:-translate-y-2 transition-all duration-100">
        <img className="rounded-md" src={medium_cover_image} alt="" loading="lazy"/>
        <div className="mt-2">
            <h1 className="text-gray-100 text-lg font-medium truncate">{title_long} </h1>
            <div className="flex item-center space-x-2">
            <div className='border border-orange-400 text-orange-400 flex items-center w-fit p-1 rounded-md text-xs space-x-1 mt-1'>
                <AiFillStar size={15 }/> <samp>{rating}</samp>
            </div>
                <span className='text-xs text-gray-500 mt-2'> 
                      {year}
                </span>
            </div>
        </div>
    </div>
  )
}

export default MovieCard