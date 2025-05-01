import Navbar from '../Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Root() {
  return (
    <div className='mx-auto max-w-6xl px-4 md:px-5 lg:px-0'>
        <Navbar></Navbar>
        <Outlet/>
        <Footer />
    </div>
  )
}
