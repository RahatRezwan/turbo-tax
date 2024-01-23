/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../assets/Arrow.png';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../config';
import axios from 'axios';
import { useState } from 'react';
import TermsModal from './TermsModal';
import selectionArrow from '../assets/selectionArrow.png';
import { objectToFormData } from '../utils/object-to-form-data';
import Confirmation from './Confirmation';
function App() {
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [firstName, setFirstName] = useState<any>(null);

   function openModal() {
      setIsOpen(true);
   }

   const { register, handleSubmit } = useForm();

   const onSubmit = (data: any) => {
      setLoading(true);
      const finalData = {
         ...data,
         tos_agree: data.tos_agree ? 'y' : 'n',
      };

      const fData = objectToFormData(finalData);

      try {
         const res: any = axios.post(
            'https://api-staging.turbotaxgames.com/submit_user_data',
            fData,
         );
         if (res.data.success) {
            setFirstName(finalData.player_first_name);
            setLoading(false);
         }
      } catch (error) {
         console.log('Something Went Wrong');
         setLoading(false);
         window.alert('Something Went Wrong, Please Try Again Later!');
      }
   };

   return (
      <div className='bg-red min-h-[100vh] px-7 py-2 text-[#fff]'>
         {!firstName ? (
            <>
               <div className='text-center'>
                  <h1 className='text-2xl mb-6'>#MakeYourMovesCount</h1>
                  <p className=' mb-3'>Please fill out the details below to get started.</p>
               </div>

               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col justify-center  gap-5 max-w-[400px] mx-auto'
               >
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>First name</label>
                     <input
                        type='text'
                        id='fName'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='First Name'
                        {...register('player_first_name', { required: 'First Name Is Required' })}
                     />
                  </div>
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Last name</label>
                     <input
                        type='text'
                        id='lName'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Last Name'
                        {...register('player_last_name', { required: 'Last Name Is Required' })}
                     />
                  </div>
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Email</label>
                     <input
                        type='email'
                        id='email'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Email'
                        {...register('player_email', {
                           required: 'Email Is Required',
                           validate: (value) => emailRegex.test(value),
                        })}
                     />
                  </div>

                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Have you used Intuit TurboTax before?</label>
                     <div className='relative w-full'>
                        <select
                           id='turboBefore'
                           className='py-[14px] px-5 rounded-[4px] text-black text-xl appearance-none w-full'
                           {...register('used_intuit_before', {
                              required: 'This Field Is Required',
                           })}
                        >
                           <option value='y'>Yes</option>
                           <option value='n'>No</option>
                        </select>
                        <img
                           src={selectionArrow}
                           alt=''
                           className='absolute right-[1.2rem] top-[1.3rem] w-6'
                        />
                     </div>
                  </div>

                  <div className='flex flex-col gap-1'>
                     <label htmlFor='mobile'>Phone number</label>
                     <input
                        type='text'
                        id='phone'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Phone Number'
                        {...register('mobile', { required: 'Phone Number Is Required' })}
                     />
                  </div>
                  <div className='flex w-full justify-center items-center gap-3 '>
                     <input
                        type='checkbox'
                        id='tos'
                        className='w-[70px] h-[70px] rounded-[4px] text-black'
                        {...register('tos_agree', { required: 'This Field Is Required' })}
                     />

                     <p>
                        I agree to the{' '}
                        <span onClick={openModal} className='underline cursor-pointer'>
                           Terms of Service
                        </span>{' '}
                        & I agree to receive marketing email communication.
                     </p>
                  </div>

                  {loading ? (
                     <>
                        <button
                           type='button'
                           disabled
                           className='text-2xl bg-black p-[24px] rounded-md text-center'
                        >
                           Loading....
                        </button>
                     </>
                  ) : (
                     <>
                        <button
                           type='submit'
                           className='text-2xl bg-black p-[24px] rounded-md flex justify-between items-center'
                        >
                           Get Started
                           <img src={Arrow} className='w-[60px]' />
                        </button>
                     </>
                  )}
               </form>
               <TermsModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
         ) : (
            <>
               <Confirmation name={firstName} />
            </>
         )}
      </div>
   );
}

export default App;
