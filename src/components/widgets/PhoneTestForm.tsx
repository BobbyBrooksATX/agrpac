import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  mobilePhone: string;
}

const PhoneForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch(
        'https://api.project-broadcast.appmixer.cloud/flows/b4aaaceb-0caf-4fc3-83c4-9a004510a877/components/0ca506ec-145c-4c8c-bf75-33b266fb2da8',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        console.error('Error submitting phone number:', response.statusText);
      } else {
        console.log('Phone number submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting phone number:', error);
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
            value: /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[\s.-]?([2-9][0-9]{2})[\s.-]?([0-9]{4})$/,
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
    </form>
  );
};

export default PhoneForm;
