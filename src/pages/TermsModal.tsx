import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import close from '../assets/close.png';

interface TermsModalProps {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}
export default function TermsModal({ isOpen, setIsOpen }: TermsModalProps) {
   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
               <div className='fixed inset-0 overflow-y-auto mt-[6rem] sm:mx-4 md: mx-8 shadow-lg'>
                  <div className='flex items-center justify-center p-1 text-center '>
                     <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                     >
                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-lg  text-[#fff] p-6 text-left align-middle shadow-xl transition-all bg-red min-h-[80vh] border-[8px] border-black'>
                           <Dialog.Title
                              as='h4'
                              className='text-lg leading-6 text-gray-900 flex items-center justify-between mb-2'
                           >
                              TurboTax terms of use
                              <img onClick={closeModal} src={close} alt='' className='w-7' />
                           </Dialog.Title>
                           <div className='text-black flex flex-col gap-2'>
                              <div className='mt-2'>
                                 <p className='xs:text-sm sm:text-lg text-gray-500'>
                                    Be sure to read the Website Terms of Use below, as they cover
                                    the terms and conditions that apply to your visits to, use of,
                                    and navigation of this website (the "Website," or "Site").
                                 </p>
                              </div>
                              <div className='mt-2'>
                                 <p className='xs:text-sm sm:text-lg text-gray-500'>
                                    NOTE: Your use of the TurboTax Online or TurboTax Desktop
                                    offerings are covered by the TurboTax Online Terms of Service,
                                    other related terms of service, or the TurboTax Desktop End User
                                    License Agreement, respectively, applicable to the type and
                                    version- year of the offering you use.
                                 </p>
                              </div>

                              <div className='mt-2'>
                                 <p className='xs:text-sm sm:text-lg text-gray-500'>
                                    Intuit Consumer Group LLC ("Intuit") may change these Website
                                    Terms of Use from time to time. By continuing to use the Site
                                    following such modifications, you agree to be bound by such
                                    modifications to the Website Terms of Use.
                                 </p>
                              </div>
                              <div className='mt-2'>
                                 <p className='xs:text-sm sm:text-lg text-gray-500'>
                                    General Terms and Conditions. In consideration of use of the
                                    Site,
                                 </p>
                              </div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
