import React from 'react'

const ContactForm = () => {
  return (
    <div className='lg:w-[55%] w-[90%] h-auto  m-auto'>
    <form>
                   <div>
                      <label for="email" class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white">NAME</label>
                      <input type="email" name="email" id="email" class=" border border-black-300  rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100" placeholder="Name" required="option1" />
                  </div>

                   <div className='mt-2'>
                      <label for="email" class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white">EMAIL</label>
                      <input type="email" name="email" id="email" class=" border border-black-300  rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100" placeholder="email@gmail.com" required="option1" />
                  </div>
                  <h1 className='text-[#535A5C] my-1'>Type of User Profile (click what best describes you)</h1>
                  
                  <div>
                      <input type="radio" name="same" id="option1" className='w-[13px] h-[13px] mx-1' />
                      <label for="option1" className='text-sm font-semibold text-[#535A5C]'>Boating Enthausist</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option2" className='w-[13px] h-[13px] mx-1' />
                      <label for="option2" className='text-sm font-semibold text-[#535A5C]'>Powerboat Owner</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option3" className='w-[13px] h-[13px] mx-1' />
                      <label for="option3" className='text-sm font-semibold text-[#535A5C]'>Sailboat Owner</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option4" className='w-[13px] h-[13px] mx-1' />
                      <label for="option4" className='text-sm font-semibold text-[#535A5C]'>Professional Marine Services</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option5" className='w-[13px] h-[13px] mx-1' />
                      <label for="option5" className='text-sm font-semibold text-[#535A5C]'>Marina or Yacht Club</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option6" className='w-[13px] h-[13px] mx-1' />
                      <label for="option6" className='text-sm font-semibold text-[#535A5C]'>Marine Tradeshows</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option7" className='w-[13px] h-[13px] mx-1' />
                      <label for="option7" className='text-sm font-semibold text-[#535A5C]'>Commercial Charters</label>
                  </div>
                  <div>
                      <input type="radio" name="same" id="option8" className='w-[13px] h-[13px] mx-1' />
                      <label for="option8" className='text-sm font-semibold text-[#535A5C]'>Other</label>
                  </div>

                   <div >
                      <label for="email" class="block mb-2 text-md font-medium text-[#535A5C] dark:text-white">Message</label>
                      <textarea type="email" name="email" id="email" class=" border border-black-300 h-[130px] rounded-sm text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:border-blue-100" placeholder="email@gmail.com" required="option1" />
                  </div>
                  
                  <button type="submit" class="w-full text-white bg-[#0E5073]  font-medium rounded-md text-sm px-5 py-2.5 text-center my-2">Send Message</button> 
     </form> 
    </div>
  )
}

export default ContactForm
