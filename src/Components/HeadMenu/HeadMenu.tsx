import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const HeadMenu = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : undefined}
    >
      {isLoading ? "Loading…" : "Click to load"}
    </Button>
  );
};

export default HeadMenu;
