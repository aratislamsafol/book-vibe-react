import {Link} from 'react-router-dom'

export default function Book({ data }) {
    const {bookId} = data;

    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='h-[230px] flex justify-center items-center bg-stone-100'>
                    <img src={data.image} className='w-[134px] h-[166px]' alt={data.bookName} />
                </figure>
                <div className="card-body p-5">
                    <div className="flex gap-2">
                        {data.tags.map((tag, index)=><div key={index} className="badge badge-outline">{tag}</div>)}
                    </div>
                    <h2 className="card-title">
                        {data.bookName}
                    </h2>                
                    <p>By : {data.author}</p>
                </div>
                <div className="border-t border-dashed flex justify-between mx-5 py-2 pb-5">
                    <p className='font-bold'>{data.category}</p>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='font-bold'>{data.rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
