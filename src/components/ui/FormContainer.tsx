import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import texasCounties from './texasCounties'; // Import the counties

interface FormProps {
  button?: string;
  apiUrl: string;
}

const FormContainer: React.FC<FormProps> = ({ button = 'Submit', apiUrl }) => {
  // Ensure apiUrl is destructured
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to store the response message
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    // Sanitize the phone number by removing non-numeric characters
    const sanitizedPhoneNumber = data.mobilePhone.replace(/\D/g, ''); // \D matches any non-digit character

    const sanitizedData = {
      ...data,
      mobilePhone: sanitizedPhoneNumber,
      voteroutreach: data.voteroutreach ? 'voteroutreach' : '',
      registerVoters: data.registerVoters ? 'registerVoters' : '',
      helpWithTraining: data.helpWithTraining ? 'helpTraining' : '',
      workthepolls: data.workthepolls ? 'workthepolls' : '',
      pollwatcher: data.pollwatcher ? 'pollwatcher' : '',
      otherService: data.otherService ? 'Other' : '',
    };

    console.log('Form submitted with sanitized data:', sanitizedData);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        console.error('Form submission error:', response.statusText);
        setResponseMessage('Failed to submit the form. Please try again.');
      } else {
        console.log('Form submitted successfully');
        setResponseMessage('🎉 Form successfully submitted');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First Name */}
      <div className="mb-6">
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName.message}</p>}
      </div>

      {/* Last Name */}
      <div className="mb-6">
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName.message}</p>}
      </div>

      {/* Mobile Phone */}
      <div className="mb-6">
        <label htmlFor="mobilePhone" className="block text-sm font-medium">
          Mobile Phone
        </label>
        <input
          type="tel"
          id="mobilePhone"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('mobilePhone', {
            required: 'Mobile phone is required',
            pattern: {
              value: /^(?:\+1\s?)?\(?([2-9][0-9]{2})\)?[\s.-]?([2-9][0-9]{2})[\s.-]?([0-9]{4})$/,
              message: 'Invalid US mobile phone number',
            },
          })}
        />
        {errors.mobilePhone && <p className="text-red-500 text-sm mt-2">{errors.mobilePhone.message}</p>}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
      </div>

      {/* Texas Counties Select */}
      <div className="mb-6">
        <label htmlFor="county" className="block text-sm font-medium">
          County
        </label>
        <select
          id="county"
          defaultValue=""
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('county', {
            validate: (value) => value !== '' || 'Please select your county',
          })}
        >
          <option value="" disabled>
            Select Your County
          </option>
          {texasCounties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
        {errors.county && <p className="text-red-500 text-sm mt-2">{errors.county.message}</p>}
      </div>

      {/* Precinct Number */}
      <div className="mb-6">
        <label htmlFor="precinct" className="block text-sm font-medium">
          Precinct Number (optional)
        </label>
        <input
          type="number"
          id="precinct"
          maxLength={3}
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          {...register('precinct', {
            maxLength: {
              value: 3,
              message: 'Precinct number must be 3 digits or less',
            },
          })}
        />
        {errors.precinct && <p className="text-red-500 text-sm mt-2">{errors.precinct.message}</p>}
        <a
          href="https://voter-registration-maps-traviscountytx.hub.arcgis.com/apps/579c45ca70714d29ade0db0012a8e60e/explore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          Look up your Precinct
        </a>
      </div>

      {/* Checkbox Section Header */}
      <div className="mb-4">
        <p className="text-sm font-medium">Check all that apply:</p>
      </div>

      {/* Checkbox: Voter Outreach */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="voteroutreach" className="mr-2" {...register('voteroutreach')} />I will do voter
          outreach (block walking, calling, texting, and/or mailers)
        </label>
      </div>

      {/* Checkbox: Work The Polls */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="workthepolls" className="mr-2" {...register('workthepolls')} />I would like to work
          the polls
        </label>
      </div>

      {/* Checkbox: Poll Watcher */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="pollwatcher" className="mr-2" {...register('pollwatcher')} />I would like to be a
          trained poll watcher
        </label>
      </div>

      {/* Checkbox: Register Voters */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="registerVoters" className="mr-2" {...register('registerVoters')} />I would like to
          register voters
        </label>
      </div>

      {/* Checkbox: Help with Training */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="helpWithTraining" className="mr-2" {...register('helpWithTraining')} />I would like
          to help with training
        </label>
      </div>

      {/* Checkbox: Other Skills */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="otherService" className="mr-2" {...register('otherService')} />I have other skills
          that I would like to offer
        </label>
      </div>

      {/* Final Required Checkbox */}
      <div className="mt-8 mb-6">
        <label className="flex items-start">
          <input
            type="checkbox"
            id="personalInfoConsent"
            className="mr-2 mt-1"
            {...register('personalInfoConsent', { required: 'You must agree before submitting.' })}
          />
          <span>
            By submitting this contact form, you acknowledge and agree to the collection of your personal information.
          </span>
        </label>
        {errors.personalInfoConsent && (
          <p className="text-red-500 text-sm mt-2">{errors.personalInfoConsent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-10 grid">
        <button type="submit" className="btn-red">
          {button}
        </button>
      </div>

      {/* Conditionally render the response message */}
      {responseMessage && <p className="text-xl text-emerald-600 font-bold mt-4">{responseMessage}</p>}
    </form>
  );
};

export default FormContainer;
