import React from 'react';

const BackToTopButton = () => (
    <button style={{
        fontSize: `12px`,
        border: `none`,
        color: `#fefefe`,
        background: `#3c2d50`,         
        boxShadow: `0 4px 6px rgba(100, 100, 100, 0.2)`,
        position: `fixed`,
        bottom: `3em`,
        right: `3em`,
        padding: `1em 1em`,
        textTransform: `uppercase`,
        fontWeight: 600,
        cursor: `pointer`,

    }}
    onClick={() => window.scrollTo({
        top: `0`,
        behavior: 'smooth'
      })}>
        Back to Top <span style={{fontSize: `18px`}}>☝</span>️
    </button>
);

export default BackToTopButton;