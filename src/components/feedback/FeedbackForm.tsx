import React, { FormEvent, useState } from 'react';
const FeedbackForm = ({ onClose }: { onClose: () => void }) => {
    // const [service, setService] = useState('');
    // const [feedback, setFeedback] = useState('');
    // const [rating, setRating] = useState(0);
  
  
    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // console.log({ service, feedback, rating }); 
      // onClose();
      const formdata = new FormData(event.currentTarget);
      const formService = formdata.get('name')
      const formRating = formdata.get('rating')
      const formRemarks = formdata.get('remarks')

      const formBody = {
        name: formService,
        rating: formRating,
        remarks: formRemarks
      }

      const response = await fetch("api/feedback", {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formBody),
      })
      console.log(response)
    }; 







  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Leave Your Feedback</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      
        <div>
          <label className="block text-gray-700">Service Name</label>
          <input name='name'
            type="text"

            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="What service did you use?"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700">Rate Your Experience</label>
          <input name='rating'
            type="text"

            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="From 1-5"
            required
          />
        </div>
       

   
        {/* <div>
          <label className="block text-gray-700">Rate Your Experience</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? 'text-yellow-500' : 'text-gray-400'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div> */}
      
      
        <div>
          <label className="block text-gray-700">Your Feedback</label>
          <input name="remarks"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Tell us about your experience..."
            required
          />
        </div>

      
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
