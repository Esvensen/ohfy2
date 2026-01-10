import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where are you based?",
      answer: "Unit R4, 55 Wallis Road, Hackney Wick, London, UK, E95LH",
    },
    {
      question: "Custom Designs VS Flash?",
      answer:
        "We always have a wide array of flash from all our artists available at the shop which the artists are always more than happy to tattoo, but if you are seeking custom design its better to contact the artist individually and arrange a consultation. All artists are also more than happy to always do custom work.",
    },
    {
      question: "Do I have to book a design in advance?",
      answer:
        "It is wise to book in to guarantee being seen the same day by you favourite artist, but we are set up for walk in clients depending how busy the shop is on the day. Contact us discuss booking in.",
    },
    {
      question: "How much are your tattoos?",
      answer:
        "Tattoo cost varies depending on size and customisation. It's best to arrange a consultation with your artist to get an accurate price guide.",
    },
    {
      question: "Do I have to pay a deposit?",
      answer:
        "Yes, artist's deposits vary but it is usually 10 – 30% of the tattoo cost. Contact your artist to find out they're deposit rate.",
    },
    {
      question: "Do I get a discount if I get multiple designs?",
      answer: "Yes! This can be discussed with your artist.",
    },
    {
      question:
        "I live far away; can I get one of your designs tattooed by someone else?",
      answer:
        "No, all work made at OHFY is made specifically by the artist. If you like the design, please get the artist to tattoo the design. This is the only way to ensure you get the best tattoo that you deserve.",
    },
    {
      question: "How should I prepare for my tattoo appointment?",
      answer:
        "Be punctual, clean and ready for a fun day.\nWe recommend eating before and bringing a sugary drink / snack to top you up throughout.\nDon't turn up with a hangover! It'll make the day easier for you and your artist.",
    },
    {
      question:
        "I am allergic to something used while tattooing, should I let you know?",
      answer:
        "Yes, please let us know well in advance so we can prepare the space accordingly.",
    },
    {
      question: "Can I get tattooed if I'm pregnant or breastfeeding?",
      answer: "Sorry but no.",
    },
    {
      question: "Can I get tattooed if I'm under 18?",
      answer:
        "No, it is UK law for anyone under the age of 18 to get tattooed, even with parental consent.",
    },
    {
      question: "Do you do piercing?",
      answer: "No.",
    },
    {
      question: "Will I need to bring ID?",
      answer:
        "Yes please, we also need you to fill in a consent form on arrival for our records.",
    },
    {
      question: "What methods of payment do you accept?",
      answer: "Cash is king.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section className="faq">
        <h2>
          <b>F.A.Q.</b>
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`accordion ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question} <i className="fa-solid fa-cross"></i>
            </button>
            <div className={`panel ${openIndex === index ? "active" : ""}`}>
              <div className="panel-inner">
                <p style={{ whiteSpace: "pre-line" }}>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="store-policy">
        <h2>
          <b>Store Policy</b>
        </h2>
        <div className="policy-content">
          <p>
            Our address is - Unit R4, 55-57 Wallis Road, Hackney Wick, London,
            E95LH.
          </p>
          <p>
            Please arrive on time for your appointment, and if you are running
            late, please let us know.
          </p>
          <p>
            Please don't be drunk, stoned or hungover, it will make everyone's
            life much easier.
          </p>
          <p>
            No alcohol or drugs in the studio for licensing reasons (also the
            pub is round the corner)
          </p>
          <p>
            When you arrive, just give us a call on - 02036097960 and we will
            come and let you in.
          </p>
          <p>
            Please just come by yourself. Our studio isn't huge so any extra
            bodies in the space does make it quite uncomfortable for everyone.
            If you require someone for support or any reason please do let us
            know in advance so we can prepare and accommodate accordingly.
          </p>
          <p>As much as we love them, pets are not allowed.</p>
          <p>
            Please be respectful of everyone else and their space in the studio.
            Sexism, Racism and any other type of intolerance in any form is not
            accepted at OHFY. This is a safe space for people from all walks of
            life, regardless of age, gender or orientation.
          </p>
          <p>Just be respectful, it is not a lot to ask!</p>
          <p>
            Make sure that you bring snacks and anything else you need for your
            session (ie: towel for full bodysuits / large pieces, loose
            clothing, preferably NOT white as it might get stained and Tattoo
            Ink does not wash off) We recommend bringing a sugary drink and
            snack to keep your blood sugar up whilst being tattooed.
          </p>
          <p>
            If you require extra privacy please let us know in advance, your
            comfort matters to us.
          </p>
          <p>
            We are excited to have you here at OHFY, we pride ourselves on being
            a highly professional, accommodating and well recommended studio
            where people feel 100% comfortable to come get tattooed and leave
            100% satisfied.
          </p>
          <p>
            Any further questions or concerns please don't hesitate to contact
            us
          </p>
          <p>hello@onlyhereforyou.com</p>
          <p>+44 (0) 2036097960</p>
          <p>
            Unit R4,
            <br /> 55-57 Wallis Road,
            <br /> Hackney Wick,
            <br /> London,
            <br /> E95LH
          </p>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
