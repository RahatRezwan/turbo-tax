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
import checkboxEmpty from '../assets/checkboxEmpty.png';
import checkboxChecked from '../assets/checkboxChecked.png';

const errorText = 'text-[12px] text-[#000]';

function App() {
   const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [firstName, setFirstName] = useState<any>(null);

   function openModal() {
      setIsOpen(true);
   }

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm();
   const watchData = watch();

   const onSubmit = async (data: any) => {
      setLoading(true);
      const finalData = {
         ...data,
         tos_agree: data.tos_agree ? 'y' : 'n',
      };

      const fData = objectToFormData(finalData);

      try {
         const res: any = await axios.post('https://api.turbotaxgames.com/submit_user_data', fData);
         if (res.data.success) {
            setFirstName(finalData.player_first_name);
            setLoading(false);
         } else {
            setLoading(false);
            window.alert(res.data.message);
         }
      } catch (error) {
         if (error) {
            setLoading(false);
            window.alert('Something Went Wrong, Please Try Again Later!');
         }
      }
   };

   return (
      <div className='px-7 py-2 text-[#fff]'>
         {!firstName ? (
            <>
               <div className='text-center'>
                  <h1 className='text-2xl mb-6'>#MakeYourMovesCount</h1>
                  <p className=' mb-3'>Please fill out the details below to get started.</p>
               </div>

               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='flex flex-col justify-center  gap-[1.4rem] max-w-[400px] mx-auto'
               >
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>First name *</label>
                     <input
                        type='text'
                        id='player_first_name'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='First Name'
                        {...register('player_first_name', { required: 'First name is required' })}
                     />
                     {errors.player_first_name?.message && (
                        <p className={errorText}>{errors?.player_first_name?.message as string}</p>
                     )}
                  </div>
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Last name *</label>
                     <input
                        type='text'
                        id='lName'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Last Name'
                        {...register('player_last_name', { required: 'Last name is required' })}
                     />
                     {errors.player_last_name?.message && (
                        <p className={errorText}>{errors?.player_last_name?.message as string}</p>
                     )}
                  </div>
                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Email *</label>
                     <input
                        type='email'
                        id='email'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Email'
                        {...register('player_email', {
                           required: 'Email is required',
                           validate: (value) => emailRegex.test(value),
                        })}
                     />
                     {errors.player_email?.message && (
                        <p className={errorText}>{errors?.player_email?.message as string}</p>
                     )}
                  </div>

                  <div className='flex flex-col gap-1'>
                     <label htmlFor='name'>Have you used Intuit TurboTax before? *</label>
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
                     <label htmlFor='mobile'>Phone number *</label>
                     <input
                        type='text'
                        id='phone'
                        className='py-[14px] px-5 rounded-[4px] text-black text-xl'
                        placeholder='Phone Number'
                        {...register('mobile', { required: 'Phone number is required' })}
                     />
                     {errors.mobile?.message && (
                        <p className={errorText}>{errors?.mobile?.message as string}</p>
                     )}
                  </div>
                  <div className='flex w-full  items-center gap-1 '>
                     <div className='flex items-center justify-center'>
                        <input
                           type='checkbox'
                           id='tos'
                           defaultChecked={false}
                           className='text-black appearance-none '
                           {...register('tos_agree')}
                        />
                        <label
                           htmlFor='tos'
                           className='w-[45px] h-[45px] flex items-center text-center justify-center'
                        >
                           <img
                              src={watchData.tos_agree ? checkboxChecked : checkboxEmpty}
                              alt=''
                              className='w-full h-full'
                           />
                        </label>
                     </div>

                     <p className='w-full'>
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
