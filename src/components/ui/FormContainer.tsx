import React from 'react';
import { useForm } from 'react-hook-form';
import texasCounties from './texasCounties'; // Import the counties

interface FormProps {
  button?: string;
}

const FormContainer: React.FC<FormProps> = ({ button = 'Submit' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Sanitize the phone number by removing non-numeric characters
    const sanitizedPhoneNumber = data.mobilePhone.replace(/\D/g, ''); // \D matches any non-digit character

    const sanitizedData = {
      ...data,
      mobilePhone: sanitizedPhoneNumber,
      callVoters: data.callVoters ? 'callVoters' : '',
      walkNeighborhoods: data.walkNeighborhoods ? 'walkNeighborhoods' : '',
      greetVoters: data.greetVoters ? 'greetVoters' : '',
      helpMailPostcards: data.helpMailPostcards ? 'mailPostcards' : '',
      reachOutNewVoters: data.reachOutNewVoters ? 'newVoterOutreach' : '',
      registerVoters: data.registerVoters ? 'registerVoters' : '',
      helpWithTraining: data.helpWithTraining ? 'helpTraining' : '',
      volunteerCommunityService: data.volunteerCommunityService ? 'communityService' : '',
      otherService: data.otherService ? 'Other' : '',
    };

    console.log('Form submitted with sanitized data:', sanitizedData);

    try {
      const response = await fetch(
        'https://api.project-broadcast.appmixer.cloud/flows/6b529ab2-4d5e-4c07-a69e-85e7e26663ee/components/03214691-3ce7-46af-bba7-9cbdc3b9ed74',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData),
        }
      );

      if (!response.ok) {
        console.error('Form submission error:', response.statusText);
      } else {
        console.log('Form submitted successfully');
        // Handle success (e.g., redirect, show message)
      }
    } catch (error) {
      console.error('Form submission error:', error);
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

      {/* Checkbox: Call Voters */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="callVoters" className="mr-2" {...register('callVoters')} />I would like to call
          voters for candidates
        </label>
      </div>

      {/* Checkbox: Walk Neighborhoods */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="walkNeighborhoods" className="mr-2" {...register('walkNeighborhoods')} />I would
          like to walk neighborhoods with candidates
        </label>
      </div>

      {/* Checkbox: Greet Voters at Polls */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="greetVoters" className="mr-2" {...register('greetVoters')} />I would like to greet
          voters at the polls
        </label>
      </div>

      {/* Checkbox: Help Mail Postcards */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="helpMailPostcards" className="mr-2" {...register('helpMailPostcards')} />I would
          like to help mail postcards
        </label>
      </div>

      {/* Checkbox: Reach Out to New Voters */}
      <div className="mb-6">
        <label className="flex items-center">
          <input type="checkbox" id="reachOutNewVoters" className="mr-2" {...register('reachOutNewVoters')} />I would
          like to reach out to new voters
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

      {/* Checkbox: Volunteer for Community Service */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            id="volunteerCommunityService"
            className="mr-2"
            {...register('volunteerCommunityService')}
          />
          I would like to volunteer for community service
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
    </form>
  );
};

export default FormContainer;
