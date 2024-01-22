const Confirmation = () => {
   // const data = axios.get('https://api-staging.turbotaxgames.com/submit_user_data');
   const name = ''; //data?.data?.player_first_name;
   return (
      <div className='bg-red min-h-[100vh] px-7 py-2 text-[#fff] '>
         <div className='max-w-[400px] mx-auto'>
            <div className='text-center'>
               <h1 className='text-2xl mb-14 '>#MakeYourMovesCount</h1>
            </div>

            <div className='flex flex-col gap-10 justify-center text-center'>
               <h5 className='text-4xl mb-3'>Hi {name},</h5>
               <h5 className='text-4xl mb-3'>
                  Thank you for joining us at our TurboTax #MakeYourMoves Count event.
               </h5>
               <h5 className='text-4xl mb-3'>Enjoy the games!</h5>
            </div>
         </div>
      </div>
   );
};

export default Confirmation;
