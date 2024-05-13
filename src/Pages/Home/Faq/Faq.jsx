import faq from '../../../assets/images/faqq.png'

const Faq = () => {
    return (
        <div>
           <div className='bg-orange-50 rounded-xl mb-12 mt-16'>
            <div className='text-center p-6'>
            <h1 className='text-4xl font-bold mt-3 mb-3 '>Frequently Asked Question</h1>
            <p>Read the answers to some of the most popular questions.</p>
            </div>
            <div className='grid md:grid-cols-2'>
            <div>
                    <img className=' w-full pt-20 pb-10' src={faq} alt="" />
                </div>
                <div>
                <div className="mb-10 mt-10 space-y-4 ml-10">
            <div className="collapse collapse-arrow bg-orange-100">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
              How many members are in a Study Group?
             </div>
              <div className="collapse-content"> 
                <p>Each group has a different ideal size. Most groups are between 8 and 20 members, with 12 to 15 being the sweet spot.</p>
                     </div>
              </div>
             <div className="collapse collapse-arrow bg-orange-100">
              <input type="radio" name="my-accordion-2" /> 
                 <div className="collapse-title text-xl font-medium">
                 How often do Study Groups meet?
                      </div>
                    <div className="collapse-content"> 
                     <p>Meetings are held two to three times per year and last approximately two days. Each group decides together how often to meet and the length of each meeting. Meeting locations are decided by the members.</p>
                 </div>
                  </div>
                 <div className="collapse collapse-arrow bg-orange-100">
                   <input type="radio" name="my-accordion-2" /> 
                  <div className="collapse-title text-xl font-medium">
                  What are the qualifications to be a Study Group member?
                   </div>
                  <div className="collapse-content"> 
                  <p>To be considered as a member for a specific Study Group, potential members must:

                  fit the profile for the group they are applying for (CEO, CFO, Operations, etc.).
                  be committed to attending and participating in group meetings
                  be invited by the group’s current members
                  not be a competitor with any of the other members</p>
                  </div>
            </div>
            <div className="collapse collapse-arrow bg-orange-100">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">
              If I join a group, what is the commitment?
             </div>
              <div className="collapse-content"> 
                <p>If you choose to join a group, your financial commitment is quarter to quarter.</p>
                     </div>
              </div>
             <div className="collapse collapse-arrow bg-orange-100">
              <input type="radio" name="my-accordion-2" /> 
                 <div className="collapse-title text-xl font-medium">
                 What is the cost to join a Study Group?
                      </div>
                    <div className="collapse-content"> 
                     <p>The cost of participation for a new Study Group member is $2000 per calendar quarter. Additional company memberships are at a significant discount.

                     In addition to quarterly membership dues, members are responsible for their share of the group meeting expenses for each meeting.

                     There is no long-term financial commitment. Membership may be cancelled at the end of any calendar quarter.</p>
                 </div>
                  </div>
        </div>

                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Faq;