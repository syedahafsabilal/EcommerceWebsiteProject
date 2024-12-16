// components/Icon.tsx

import React from 'react';

const Icon: React.FC = () => {
  return (
 <svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer Circle */}
  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none" />
  
  {/* Inner Circle */}
  <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="2" fill="none" />

  {/* Left Line */}
  <line x1="50" y1="10" x2="50" y2="0" stroke="black" strokeWidth="2" />

  {/* Right Line */}
  <line x1="50" y1="90" x2="50" y2="100" stroke="black" strokeWidth="2" />

  {/* Horizontal Line */}
  <line x1="10" y1="50" x2="0" y2="50" stroke="black" strokeWidth="2" />

  {/* Bottom Line */}
  <line x1="90" y1="50" x2="100" y2="50" stroke="black" strokeWidth="2" />
</svg>

  );
};

export default Icon;
//import { VsProfile } from 'vuesax';