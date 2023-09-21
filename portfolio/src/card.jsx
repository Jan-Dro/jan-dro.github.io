import React, { useState } from 'react';

function Card({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const handleCardInteraction = () => {
    setExpanded(!expanded);
  };

  const onTouchStart = () => {
    const touchStartTime = new Date().getTime();
    handleCardInteraction();
  };

  const onTouchEnd = () => {
    const touchEndTime = new Date().getTime();
    const touchDuration = touchEndTime - touchStartTime;
    if (touchDuration < 300) {
    }
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardInteraction} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <h3 className="title">{title}</h3>
      <ul className="content">{content.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default Card;