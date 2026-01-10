const Tattoo = () => {
  return (
    <main>
      <section className="row imageText page-container">
        <div className="imageBox">
          <img className="image" src="/assets/img/abtlogo.gif" alt="" />
        </div>
        <div className="padding"></div>
        <div className="copy">
          <h2>Only here for you</h2>
          <p>
            <b>Only Here For You</b> is a tattoo studio / record label / events
            promoter and clothing brand based in Hackney Wick, East London,
            founded in spring 2021 by tattoo artist and illustrator Elliott Lane
            and James Cox, vocalist of post-punk band <b>Crows</b>.
          </p>
        </div>
      </section>

      <section className="portraits page-container">
        <img
          className="portrait"
          src="/assets/img/shopdudes.png"
          alt="Shop dudes"
        />
      </section>

      <section className="text page-container">
        <div className="copy">
          <p>
            Both moved to London from mid-Wales, with Elliott serving as the
            artistic director for Crows and shaping their visual aesthetic.
            Throughout their careers, they have built a strong creative
            partnership and developed OHFY as both a physical space and a brand
            that people can visit, enjoy, and support.
          </p>
          <p>
            OHFY hosts multiple flash days, art shows, and live music events
            throughout the year. All clothing is produced in collaboration with
            small independent companies and artists, and each piece is released
            in limited editions.
          </p>
          <p>Only Here For You has always been, and will always be… for you.</p>
        </div>
      </section>

      <section className="row portraits page-container">
        <img className="portrait" src="/assets/img/studio (3).jpeg" alt="" />
        <div className="padding"></div>
        <img className="portrait" src="/assets/img/studio (4).jpeg" alt="" />
      </section>
    </main>
  );
};

export default Tattoo;
