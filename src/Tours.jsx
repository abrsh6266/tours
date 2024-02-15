import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((t) => {
          return <Tour tour={t} key={t.id}/>;
        })}
      </div>
    </section>
  );
};
export default Tours;
