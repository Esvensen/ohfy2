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
          <div key={index}>
            <button
              className="accordion"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
            <div className={`panel ${openIndex === index ? "active" : ""}`}>
              <p style={{ whiteSpace: "pre-line" }}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQ;
