import Button from "react-bootstrap/Button";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <>
      <h1>The page you are looking for could not be found 😢</h1>
      <Button onClick={moveBack} size="lg">
        &larr; Go back
      </Button>
    </>
  );
}

export default PageNotFound;
