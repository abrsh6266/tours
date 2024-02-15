import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      if (res.ok) {
        setTours(tours);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  
  if(loading){
    return <Loading />
  }

  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
};
export default App;
