import Logo from '../assets/Logo.png';
const Header = () => {
   return (
      <div className='bg-black flex justify-center p-6'>
         <img src={Logo} className='w-[110px] md:w-[130px]' />
      </div>
   );
};

export default Header;
