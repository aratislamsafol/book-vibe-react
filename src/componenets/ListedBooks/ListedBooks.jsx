import {useLoaderData} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getStoreReadList} from '../utils/addToDb';
import {getItemForWishList} from '../utils/wishList';
import Book from '../Book/Book'


export default function ListedBooks() {   
    const allBooks = useLoaderData(); 
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sorted, setSorted] = useState('');

    useEffect (()=>{
        const storedReadList = getStoreReadList();
        const storeWishList= getItemForWishList();

        const wishListData = allBooks.filter(book => storeWishList.includes(String(book.bookId)));
        const readBookList = allBooks.filter(book => storedReadList.includes(String(book.bookId)));
        setWishList(wishListData);
        setReadList(readBookList);

        console.log("Filtered Read Books:", readBookList);
    },[allBooks])

    const handleSort = sortType => {
        setSorted(sortType);

        if(sortType === 'pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if(sortType === 'ratings') {
            const sortedRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedRating);
        }
    }


    return (
        <div>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl p-8 bg-gray-200 font-bold text-center my-2 rounded-lg'>Books</h2>

            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn my-4  m-1">{sorted ? `Sort By - ${sorted}` : 'Sort By  ⬇️'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleSort('ratings')}><a>Rating</a></li>
                    <li onClick={()=>handleSort('pages')}><a>Number of Pages</a></li>
                </ul>
            </div>
            
           <div role="tablist" className="tabs tabs-lifted w-full">
            {/* Tab 1: Read Books */}
            <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="Read Books" defaultChecked />
            <div role="tabpanel" className="tab-content border-base-300 rounded-box p-4">
                {
                readList.length > 0
                    ? readList.map(book => <Book key={book.bookId} data={book} />)
                    : <p>No books found in read list</p>
                }
            </div>

            {/* Tab 2: Wishlist (dummy) */}
            <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="Wishlist Books" />
            <div role="tabpanel" className="tab-content border-base-300 rounded-box p-4">
                {
                wishList.length > 0
                    ? wishList.map(book => <Book key={book.bookId} data={book} />)
                    : <p>No books found in read list</p>
                }
            </div>
        </div>


        </div>
    )
}
