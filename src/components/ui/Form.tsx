import React, { useState } from 'react';

interface FormProps {
  inputs?: Array<{ type: string; name: string; label: string; autocomplete?: string; placeholder?: string }>;
  textarea?: { label: string; name?: string; rows?: number; placeholder?: string };
  disclaimer?: { label: string };
  button?: string;
  description?: string;
}

const texasCounties = [
  'Anderson',
  'Andrews',
  'Angelina',
  'Aransas',
  'Archer',
  'Armstrong',
  'Atascosa',
  'Austin',
  'Bailey',
  'Bandera',
  'Bastrop',
  'Baylor',
  'Bee',
  'Bell',
  'Bexar',
  'Blanco',
  'Borden',
  'Bosque',
  'Bowie',
  'Brazoria',
  'Brazos',
  'Brewster',
  'Briscoe',
  'Brooks',
  'Brown',
  'Burleson',
  'Burnet',
  'Caldwell',
  'Calhoun',
  'Callahan',
  'Cameron',
  'Camp',
  'Carson',
  'Cass',
  'Castro',
  'Chambers',
  'Cherokee',
  'Childress',
  'Clay',
  'Cochran',
  'Coke',
  'Coleman',
  'Collin',
  'Collingsworth',
  'Colorado',
  'Comal',
  'Comanche',
  'Concho',
  'Cooke',
  'Coryell',
  'Cottle',
  'Crane',
  'Crockett',
  'Crosby',
  'Culberson',
  'Dallam',
  'Dallas',
  'Dawson',
  'Deaf Smith',
  'Delta',
  'Denton',
  'DeWitt',
  'Dickens',
  'Dimmit',
  'Donley',
  'Duval',
  'Eastland',
  'Ector',
  'Edwards',
  'Ellis',
  'El Paso',
  'Erath',
  'Falls',
  'Fannin',
  'Fayette',
  'Fisher',
  'Floyd',
  'Foard',
  'Fort Bend',
  'Franklin',
  'Freestone',
  'Frio',
  'Gaines',
  'Galveston',
  'Garza',
  'Gillespie',
  'Glasscock',
  'Goliad',
  'Gonzales',
  'Gray',
  'Grayson',
  'Gregg',
  'Grimes',
  'Guadalupe',
  'Hale',
  'Hall',
  'Hamilton',
  'Hansford',
  'Hardeman',
  'Hardin',
  'Harris',
  'Harrison',
  'Hartley',
  'Haskell',
  'Hays',
  'Hemphill',
  'Henderson',
  'Hidalgo',
  'Hill',
  'Hockley',
  'Hood',
  'Hopkins',
  'Houston',
  'Howard',
  'Hudspeth',
  'Hunt',
  'Hutchinson',
  'Irion',
  'Jack',
  'Jackson',
  'Jasper',
  'Jeff Davis',
  'Jefferson',
  'Jim Hogg',
  'Jim Wells',
  'Johnson',
  'Jones',
  'Karnes',
  'Kaufman',
  'Kendall',
  'Kenedy',
  'Kent',
  'Kerr',
  'Kimble',
  'King',
  'Kinney',
  'Kleberg',
  'Knox',
  'Lamar',
  'Lamb',
  'Lampasas',
  'La Salle',
  'Lavaca',
  'Lee',
  'Leon',
  'Liberty',
  'Limestone',
  'Lipscomb',
  'Live Oak',
  'Llano',
  'Loving',
  'Lubbock',
  'Lynn',
  'Madison',
  'Marion',
  'Martin',
  'Mason',
  'Matagorda',
  'Maverick',
  'McCulloch',
  'McLennan',
  'McMullen',
  'Medina',
  'Menard',
  'Midland',
  'Milam',
  'Mills',
  'Mitchell',
  'Montague',
  'Montgomery',
  'Moore',
  'Morris',
  'Motley',
  'Nacogdoches',
  'Navarro',
  'Newton',
  'Nolan',
  'Nueces',
  'Ochiltree',
  'Oldham',
  'Orange',
  'Palo Pinto',
  'Panola',
  'Parker',
  'Parmer',
  'Pecos',
  'Polk',
  'Potter',
  'Presidio',
  'Rains',
  'Randall',
  'Reagan',
  'Real',
  'Red River',
  'Reeves',
  'Refugio',
  'Roberts',
  'Robertson',
  'Rockwall',
  'Runnels',
  'Rusk',
  'Sabine',
  'San Augustine',
  'San Jacinto',
  'San Patricio',
  'San Saba',
  'Schleicher',
  'Scurry',
  'Shackelford',
  'Shelby',
  'Sherman',
  'Smith',
  'Somervell',
  'Starr',
  'Stephens',
  'Sterling',
  'Stonewall',
  'Sutton',
  'Swisher',
  'Tarrant',
  'Taylor',
  'Terrell',
  'Terry',
  'Throckmorton',
  'Titus',
  'Tom Green',
  'Travis',
  'Trinity',
  'Tyler',
  'Upshur',
  'Upton',
  'Uvalde',
  'Val Verde',
  'Van Zandt',
  'Victoria',
  'Walker',
  'Waller',
  'Ward',
  'Washington',
  'Webb',
  'Wharton',
  'Wheeler',
  'Wichita',
  'Wilbarger',
  'Willacy',
  'Williamson',
  'Wilson',
  'Winkler',
  'Wise',
  'Wood',
  'Yoakum',
  'Young',
  'Zapata',
  'Zavala',
];

const Form: React.FC<FormProps> = ({ inputs, textarea, disclaimer, button = 'I want in!', description = '' }) => {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleOtherCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowOtherInput(event.target.checked);
  };

  return (
    <form>
      {/* Form Fields */}
      <div className="mb-6">
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="mobileNumber" className="block text-sm font-medium">
          Mobile Number
        </label>
        <input
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          autoComplete="tel"
          placeholder="Mobile Number"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="precinct" className="block text-sm font-medium">
          Precinct
        </label>
        <input
          type="number"
          name="precinct"
          id="precinct"
          placeholder="Precinct"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="county" className="block text-sm font-medium">
          What county do you live in?
        </label>
        <select
          name="county"
          id="county"
          className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
          required
        >
          <option value="" disabled selected>
            Please select
          </option>
          {texasCounties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium">Check all that apply:</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input type="checkbox" name="callVoters" className="mr-2" /> I would like to call voters for candidates
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="walkNeighborhoods" className="mr-2" /> I would like to walk neighborhoods with
            candidates
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="greetVoters" className="mr-2" /> I would like to greet voters at the polls
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="helpMailPostcards" className="mr-2" /> I would like to help mail postcards
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="reachOutNewVoters" className="mr-2" /> I would like to reach out to new voters
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="registerVoters" className="mr-2" /> I would like to register voters
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="helpWithTraining" className="mr-2" /> I would like to help with training
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="volunteerCommunityService" className="mr-2" /> I would like to volunteer for
            community service
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="offerSkills" className="mr-2" /> I have other skills that I would like to offer
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="other" className="mr-2" onChange={handleOtherCheckboxChange} />
            Other
          </label>
          {showOtherInput && (
            <input
              type="text"
              name="otherDetails"
              id="otherDetails"
              maxLength="145"
              placeholder="Please specify (max 145 characters)"
              className="mt-2 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
            />
          )}
        </div>
      </div>

      {disclaimer && (
        <div className="mt-3 flex items-start">
          <div className="flex mt-0.5">
            <input
              id="disclaimer"
              name="disclaimer"
              type="checkbox"
              className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">
              {disclaimer.label}
            </label>
          </div>
        </div>
      )}

      <div className="mt-10 grid">
        <button type="submit" className="btn-red">
          I want in!
        </button>
      </div>

      {description && (
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
