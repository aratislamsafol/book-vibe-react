import {useParams,useLoaderData} from 'react-router-dom';
import {addToStoreReadList} from '../utils/addToDb';
import {addToWishList} from '../utils/wishList';

export default function BookDetails() {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id )
    const {bookName, author, review, rating, totalPages, yearOfPublishing, tags, image, category, publisher} = book;

    const handleToRead = (id) => {
        addToStoreReadList(id);
    }

    const handleToAddWishlist = (id) => {
        addToWishList(id);
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-8">
            <div className='w-full md:w-1/2 bg-base-200 md:p-7 rounded-xl flex justify-center'>
                <img
                src={image} alt={bookName} className='w-[425px] max-h-[564px] rounded-xl'/>
            </div>
        
        <div className='w-full md:w-1/2'>
            <div className=''>
                <h1 className="text-5xl font-bold">{bookName}</h1>
                <p className="py-6">
                By : {author}
                </p>
            </div>
            <div className='border-y border-gray-200'>
                <p className='py-2'>{category}</p>
            </div>

            <div className='border-b border-gray-100'>
                <p className='font-bold mt-2'>Review : <span className='font-normal'>{review}</span></p> 
                <div className='font-bold py-3'>Tag 
                {tags.map((tag, index)=><div key={index} className="badge badge-outline ms-3">{tag}</div>)}
                </div>
            </div>

            <div className='py-3 md:py-5'>
                <div className='flex gap-3'>
                    <p>Number of Pages: </p>
                    <p className='font-bold'>{totalPages}</p>
                </div>

                <div className='flex gap-3'>
                    <p>Publisher: </p>
                    <p className='font-bold'>{publisher}</p>
                </div>

                <div className='flex gap-3'>
                    <p>Year of Publishing: </p>
                    <p className='font-bold'>{yearOfPublishing}</p>
                </div>

                <div className='flex gap-3'>
                    <p>Rating: </p>
                    <p className='font-bold'>{rating}</p>
                </div>
            </div>
            <button className="btn btn-outline" onClick={()=>handleToRead(bookId)}>Read</button>
            <button className="ms-2 btn btn-info text-white" onClick={()=>handleToAddWishlist(bookId)}>Wishlist</button>
        </div>
        </div>
    </div>
    )
}
