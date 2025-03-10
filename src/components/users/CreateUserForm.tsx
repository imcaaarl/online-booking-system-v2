"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "../modal/Modal";

// Define form data structure
interface FormData {
  name: string;
  email: string;
}

type CreateUserFormProps = {
  isModalOpen: boolean;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({isModalOpen}) => {

  const [isOpen, setIsOpen] = useState<boolean>(isModalOpen);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("User Created:", data);
    setIsOpen(false); // Close modal after submission
    reset(); // Reset form fields
  };

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Create User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default CreateUserForm;