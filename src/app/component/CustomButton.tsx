import React from 'react';

const CustomButton = () => {
  return (
  <div style={{
    width: '156px',
    height: '44px',
    padding: '0px 20px',
    gap: '8px',
    borderRadius: '4px 0px 0px 0px',
    backgroundColor: '#3563E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    opacity: '1' /* Ensure visibility */
  }}
  onMouseEnter={(e) => e.target.style.opacity = 0.8} // Hover effect to change opacity
  onMouseLeave={(e) => e.target.style.opacity = 1} // Reset opacity when hover ends
>
  <span style={{
      width: '100%',
      height: '24px',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
      textAlign: 'center',
      color: '#FFFFFF',
      textDecoration: 'none',
      letterSpacing: '-0.02em',
      transition: 'transform 0.3s ease'
    }}
    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} // Hover effect to scale text
    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Reset scale when hover ends
  >
    Show more cars
  </span>
</div>

  );
};

export default CustomButton;
