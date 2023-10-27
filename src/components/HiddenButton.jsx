import { useState } from "react";

const HiddenButton = () => {
  const [showButton, setShowButton] = useState(true);

  const handleButtonClick = () => {
    setShowButton(!showButton);
  };

  return (
    <>
      {showButton && <button onClick={handleButtonClick}>Перезапустити</button>}
    </>
  );
};

export default HiddenButton;
