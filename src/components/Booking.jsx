import { useState } from "react";
import { artists as allArtists } from "../data/artists";

const Booking = () => {
  const artistNames = allArtists.map((a) => a.name);

  const [form, setForm] = useState({
    name: "",
    pronouns: "",
    size: "",
    artist: "No preference",
    weekday: false,
    weekend: false,
    description: "",
    budget: "",
    accessibility: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body =
      `NAME: ${form.name}%0D%0A` +
      `PRONOUNS: ${form.pronouns}%0D%0A` +
      `SIZE & PLACEMENT: ${form.size}%0D%0A` +
      `ARTIST: ${form.artist}%0D%0A` +
      `AVAILABILITY: ${form.weekday ? "Weekday " : ""}${
        form.weekend ? "Weekend" : ""
      }%0D%0A` +
      `DESCRIPTION: ${form.description}%0D%0A` +
      `BUDGET: ${form.budget}%0D%0A` +
      `ACCESSIBILITY: ${form.accessibility}`;

    window.location.href = `mailto:hello@onlyhereforyou.com?subject=Tattoo%20Booking%20-%20${encodeURIComponent(
      form.name
    )}&body=${body}`;
  };

  return (
    <main>
      <section className="booking page-container">
        <form onSubmit={handleSubmit} className="booking-form fullWidth">
          {/* Row 1 */}
          <div className="two-col">
            <div className="field">
              <label>*NAME</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>*PRONOUNS</label>
              <input
                name="pronouns"
                type="text"
                value={form.pronouns}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="field">
            <label>*SIZE & PLACEMENT</label>
            <input
              name="size"
              type="text"
              value={form.size}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 3 */}
          <div className="field">
            <label>*ARTIST</label>
            <select
              name="artist"
              value={form.artist}
              onChange={handleChange}
              required
            >
              <option value="No preference">No preference</option>
              {artistNames.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4 */}
          <div className="field">
            <label>*AVAILABILITY</label>
            <div className="checkboxes">
              <label className="check">
                <input
                  type="checkbox"
                  name="weekday"
                  checked={form.weekday}
                  onChange={handleChange}
                />
                Weekday
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name="weekend"
                  checked={form.weekend}
                  onChange={handleChange}
                />
                Weekend
              </label>
            </div>
          </div>

          {/* Row 5 */}
          <div className="field">
            <label>*DESCRIPTION OF IDEA</label>
            <input
              name="description"
              type="text"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Row 6 */}
          <div className="two-col">
            <div className="field">
              <label>*BUDGET</label>
              <input
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label>*ACCESSIBILITY</label>
              <input
                name="accessibility"
                type="text"
                value={form.accessibility}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="buy-now-btn edda-font">
            SEND
          </button>
        </form>
      </section>
    </main>
  );
};

export default Booking;
