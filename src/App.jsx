import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const removeTour = (id) => {
    const t = tours.filter((t) => t.id != id);
    setTours(t);
  };

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

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            type="button"
            className="btn"
            style={{ margin: "2rem" }}
            onClick={fetchTours}
          >
            Refetch
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
