import React from 'react';

function Heart({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.942a6.35 6.35 0 014.305-1.692c1.726 0 3.374.71 4.58 1.96a6.7 6.7 0 011.865 4.652 6.7 6.7 0 01-1.865 4.652c-.796.825-1.591 1.67-2.39 2.518-1.624 1.724-3.265 3.467-4.97 5.108l-.003.004a2.213 2.213 0 01-3.113-.069l-7.295-7.561c-2.485-2.577-2.485-6.727 0-9.303A6.33 6.33 0 0112 3.942"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Heart;
