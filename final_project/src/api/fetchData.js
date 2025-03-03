import { useEffect } from "react";
import { getInitialData, setLoadingStatus } from "../context/actionCreators";
import { useAuthContext } from "../context/AuthContextProvider";
import { Button, Spinner } from "react-bootstrap";
function FetchData() {
  const { state, dispatch } = useAuthContext();
 

  useEffect(() => {
    dispatch(setLoadingStatus(true));

    fetch(`https://imdb236.p.rapidapi.com/imdb/top250-movies`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0db4a115a2msh0f12420387a9b83p165c62jsnd7ae44d7fb2b",
        "x-rapidapi-host": "imdb236.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getInitialData(data));
        dispatch(setLoadingStatus(false));
      })
      .catch((error) => {});
  }, [dispatch]);
  if (state.loading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  return null;
}
export default FetchData;
