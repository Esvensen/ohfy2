import eventsData from "../../_data/events.json";

const Events = () => {
  return (
    <main>
      <section className="events-images">
        {eventsData.images.map((image, index) => (
          <div key={index} className="imgholder">
            <img src={image} alt="Event" />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Events;
