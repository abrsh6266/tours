import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map((t) => {
        return (
          <div key={t.id}>
            <Tour tour = {t}/>
          </div>
        );
      })}
    </div>
  );
};
export default Tours;
