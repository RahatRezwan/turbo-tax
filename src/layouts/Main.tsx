import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
   return (
      <div className='bg-red min-h-[100vh]'>
         <Header />
         <div className='min-h-[calc(100vh-5.25rem)]'>
            <Outlet />
         </div>
      </div>
   );
};

export default Main;
