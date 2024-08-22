import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  mobilePhone: string;
  tag: string;
}

interface PhoneFormProps {
  tag: string;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ tag }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    // Format the phone number as (###) ###-####
    const cleanedPhoneNumber = data.mobilePhone.replace(/\D/g, ''); // Remove all non-digit characters
    const formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 3)}) ${cleanedPhoneNumber.slice(3, 6)}-${cleanedPhoneNumber.slice(6, 10)}`;

    const formData = {
      ...data,
      mobilePhone: formattedPhoneNumber, // Use the formatted phone number
      tag,
    };

    // Log formData to verify its structure
    console.log('Form Data:', formData);

    try {
      const response = await fetch(
        'https://api.project-broadcast.appmixer.cloud/flows/b4aaaceb-0caf-4fc3-83c4-9a004510a877/components/0ca506ec-145c-4c8c-bf75-33b266fb2da8',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text(); // Fetch response text for better debugging
        console.error('Error submitting phone number:', response.status, errorText);
        setResponseMessage('Failed to submit phone number. Please try again.');
      } else {
        console.log('Phone number submitted successfully');
        setResponseMessage('🎉 Phone number successfully submitted');
      }
    } catch (error) {
      console.error('Error submitting phone number:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center mx-auto max-w-72 bg-slate-100 p-6 rounded-lg"
    >
      <label htmlFor="mobilePhone" className="block text-sm font-medium sr-only">
        Mobile Phone
      </label>
      <input
        type="tel"
        {...register('mobilePhone', {
          required: 'Phone number is required',
          pattern: {
            value: /^\(?([2-9][0-9]{2})\)?[\s.-]?([2-9][0-9]{2})[\s.-]?([0-9]{4})$/,
            message: 'Invalid phone number',
          },
        })}
        id="mobilePhone"
        placeholder="Enter your mobile number"
        className="py-2 px-4 block w-full text-md rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-slate-900"
      />
      {errors.mobilePhone && <p className="text-red-500 text-sm mt-2">{errors.mobilePhone.message}</p>}
      <button type="submit" className="btn-red py-4 px-4 rounded-lg w-full mt-4">
        Text Me
      </button>

      {responseMessage && <p className="text-xl text-emerald-600 font-bold mt-4">{responseMessage}</p>}
    </form>
  );
};

export default PhoneForm;
