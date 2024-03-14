import Button from "react-bootstrap/Button";
import { useNLBLibraries } from "../hooks/useNLBLibraries";
function BookDetails() {
  const { RSSThing } = useNLBLibraries();
  return <Button onClick={RSSThing}>Ftech libraries</Button>;
}

export default BookDetails;
