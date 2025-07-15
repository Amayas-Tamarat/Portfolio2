// components/ToggleSwitch.jsx

import React from 'react';

const ToggleSwitch = ({ enabled, onToggle }) => (
    <button
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-8 w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            enabled ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
    >
        {/* On text on the left */}
        <span className="absolute left-2 text-xs font-semibold select-none pointer-events-none text-white">
      On
    </span>

        {/* Off text on the right */}
        <span className="absolute right-2 text-xs font-semibold select-none pointer-events-none text-gray-700">
      Off
    </span>

        {/* Circle knob */}
        <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${
                enabled ? 'translate-x-12' : 'translate-x-1'
            }`}
        />
    </button>
);

export default ToggleSwitch;
