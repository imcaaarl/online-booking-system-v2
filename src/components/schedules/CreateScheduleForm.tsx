"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../modal/Modal";

// Define form data structure
interface FormData {
  name: string;
}

type CreateScheduleFormProps = {
  isModalOpen: boolean;
  onClose: () => void;
}

const CreateScheduleForm: React.FC<CreateScheduleFormProps> = ({isModalOpen, onClose}) => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(isModalOpen);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Schedule Created:", data);

    try {
      const response = await fetch("/api/schedules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log('response: ', response);

      const result = await response.json();

      console.log('result: ', result);

      if (response.ok) {
        setMessage("Schedule created successfully!");
        reset();
      } else {
        setMessage(result.error || "Failed to create schedule.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }

    setIsOpen(false); // Close modal after submission
    reset(); // Reset form fields
  };

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => {
        onClose();
        setIsOpen(false);
        }}>
        <h2 className="text-xl font-bold mb-4">Create Schedule</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </Modal>
    </div>
  );
}

export default CreateScheduleForm;