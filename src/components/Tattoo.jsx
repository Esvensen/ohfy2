const Tattoo = () => {
  return (
    <main>
      <section className="row imageText page-container">
        <div className="imageBox">
          <img className="image" src="/assets/img/butterflyLady.png" alt="" />
        </div>
        <div className="padding"></div>
        <div className="copy">
          <h2>Only here for you</h2>
          <p>
            <b>Only Here For You</b> is a tattoo studio and clothing brand based
            in Hackney Wick, East London, founded in spring 2021.
            <b> Only Here For You</b> has been founded by tattoo artist and
            illustrator Elliott Lane and James Cox, vocalist of post-punk band{" "}
            <b>Crows</b>.
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

      <section className="row text page-container">
        <div className="copy">
          <p>
            Both moved to London from rural mid Wales with Elliott acting as the
            artistic director for Crows and crafting their visual aesthetic.
            Throughout their careers, they have built a strong partnership and
            felt it was time to create a physical space and a brand that people
            can come to, enjoy and support. They have opened OHFY, formerly The
            Lacemakers Sweatshop where Elliott learned his craft, and the space
            is ready to begin its next chapter.
          </p>
          <p>
            The shop hosts its incredible full-time resident artists and a
            brilliant range of world class visiting guest-artists, including
            Gordo Letters, Daniela Sagel and Konkas.
          </p>
          <p>
            All OHFY clothing is produced via small independent companies and
            artists and are all limited edition.
          </p>
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
