import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { appContext } from "../App";

const GetStartedBtn = () => {
  const { setShowNewListModal } = useContext(appContext);
  return (
    <Button
      variant="primary px-4 gap-3"
      size="lg"
      onClick={() => setShowNewListModal(true)}
    >
      Get Started
    </Button>
  );
};

export default GetStartedBtn;
