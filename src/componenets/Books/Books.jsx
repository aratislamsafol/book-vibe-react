import {useLoaderData} from 'react-router-dom';
import Book from '../Book/Book';
export default function Books() {
    const datas  = useLoaderData();
    return (
        <div className='mt-4 sm-mt-5 md:mt-7 lg:mt-9'>
            <h2 className="text-5xl font-bold text-center">Books</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-7 justify-center mt-4 sm-mt-5 md:mt-7 lg:mt-9'>
                {
                    datas.map(data=><Book key={data.bookId} data={data}></Book>)
                }
            </div>
           
        </div>
    )
}
