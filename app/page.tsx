const dishes = [
  {
    name: "Truffle Paneer Tikka",
    description:
      "Charred cottage cheese, forest mushrooms, smoked cream and aromatic herbs.",
    price: "₹495",
  },
  {
    name: "Saffron Butter Chicken",
    description:
      "Slow-cooked chicken, Kashmiri saffron, tomato reduction and cultured butter.",
    price: "₹625",
  },
  {
    name: "Malai Prawns",
    description:
      "Tiger prawns, coconut cream, green chilli and toasted curry leaves.",
    price: "₹695",
  },
  {
    name: "Rose Pistachio Kulfi",
    description:
      "Hand-churned kulfi, rose petals, pistachio praline and saffron.",
    price: "₹325",
  },
];

const menuItems = [
  {
    category: "Starters",
    items: [
      ["Truffle Paneer Tikka", "₹495"],
      ["Crispy Lotus Stem", "₹425"],
      ["Tandoori Broccoli", "₹395"],
    ],
  },
  {
    category: "Mains",
    items: [
      ["Saffron Butter Chicken", "₹625"],
      ["Malai Prawns", "₹695"],
      ["Wild Mushroom Biryani", "₹545"],
    ],
  },
  {
    category: "Desserts",
    items: [
      ["Rose Pistachio Kulfi", "₹325"],
      ["Dark Chocolate Rasmalai", "₹375"],
      ["Saffron Tres Leches", "₹395"],
    ],
  },
];

const reviews = [
  {
    text: "An extraordinary dining experience. Every dish felt thoughtful, balanced and beautifully presented.",
    name: "Ananya R.",
  },
  {
    text: "The atmosphere is stunning and the food is even better. One of the best dinners we've had this year.",
    name: "Rahul M.",
  },
  {
    text: "Aurelia manages to feel luxurious without losing the warmth of Indian hospitality.",
    name: "Meera S.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#24231f]">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#24231f]/10 bg-[#f8f5ef]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a
            href="#"
            className="font-serif text-2xl tracking-[0.08em]"
          >
            AURELIA
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#24231f]/65 md:flex">

            <a
              href="#story"
              className="transition hover:text-[#9b633d]"
            >
              Our Story
            </a>

            <a
              href="#menu"
              className="transition hover:text-[#9b633d]"
            >
              Menu
            </a>

            <a
              href="#experience"
              className="transition hover:text-[#9b633d]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#9b633d]"
            >
              Contact
            </a>

          </div>

          <a
            href="#reservation"
            className="rounded-full bg-[#24231f] px-5 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-[#9b633d]"
          >
            RESERVE A TABLE
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Decorative background */}

        <div className="absolute right-[-120px] top-32 h-[500px] w-[500px] rounded-full bg-[#d9b99a]/20 blur-3xl" />

        <div className="absolute left-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-[#c7b9a0]/20 blur-3xl" />


        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-14 px-6 pb-20 pt-36 lg:grid-cols-2 lg:items-center lg:px-10">

          {/* HERO CONTENT */}

          <div className="max-w-xl">

            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#9b633d]">
              Modern Indian Dining
            </p>

            <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">

              A taste

              <br />

              worth

              <br />

              <span className="italic text-[#9b633d]">
                remembering.
              </span>

            </h1>

            <p className="mt-9 max-w-lg text-base leading-8 text-[#24231f]/60">
              A contemporary interpretation of Indian cuisine, where
              heritage recipes meet modern techniques, seasonal ingredients
              and an unforgettable dining experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <a
                href="#reservation"
                className="rounded-full bg-[#24231f] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#9b633d]"
              >
                Reserve Your Table
              </a>

              <a
                href="#menu"
                className="rounded-full border border-[#24231f]/20 px-7 py-4 text-center text-sm font-semibold text-[#24231f] transition hover:border-[#9b633d] hover:text-[#9b633d]"
              >
                Explore Menu
              </a>

            </div>

            <div className="mt-12 flex items-center gap-8 text-xs text-[#24231f]/45">

              <div>
                <p className="font-semibold text-[#24231f]">
                  Bengaluru
                </p>

                <p className="mt-1">
                  India
                </p>
              </div>

              <div className="h-8 w-px bg-[#24231f]/15" />

              <div>
                <p className="font-semibold text-[#24231f]">
                  Tue — Sun
                </p>

                <p className="mt-1">
                  12 PM — 11 PM
                </p>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative">

            <div className="relative mx-auto max-w-[530px]">

              {/* Main image-style visual */}

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6f4833] via-[#9b633d] to-[#d8b99a] shadow-2xl">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_25%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.25),transparent_40%)]" />

                <div className="absolute inset-8 rounded-[1.5rem] border border-white/20" />

                {/* Plate */}

                <div className="absolute left-1/2 top-[48%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white/80 bg-[#ede5d8] shadow-2xl">

                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#6f3927] via-[#9e5132] to-[#c77a4c] shadow-inner" />

                  <div className="absolute left-[28%] top-[27%] h-4 w-4 rounded-full bg-green-800/70" />

                  <div className="absolute right-[28%] top-[38%] h-3 w-3 rounded-full bg-green-900/70" />

                  <div className="absolute bottom-[28%] left-[40%] h-5 w-5 rounded-full bg-[#d9a14e]" />

                </div>

                <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between text-white">

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                      Chef&apos;s Selection
                    </p>

                    <p className="mt-2 font-serif text-2xl">
                      Tandoor & Spice
                    </p>

                  </div>

                  <span className="text-4xl font-serif italic text-white/60">
                    A
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STORY ================= */}

      <section
        id="story"
        className="border-t border-[#24231f]/10 px-6 py-28 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b633d]">
              Our Story
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">

              Tradition,
              <br />

              <span className="italic text-[#9b633d]">
                reimagined.
              </span>

            </h2>

          </div>


          <div className="max-w-xl">

            <p className="text-lg leading-8 text-[#24231f]/65">

              Aurelia was born from a simple idea: Indian food has always
              evolved. We wanted to continue that journey.

            </p>

            <p className="mt-6 leading-8 text-[#24231f]/55">

              Our kitchen brings together ingredients from across India,
              time-honoured techniques and a contemporary approach to
              presentation. Every plate is designed to feel familiar,
              unexpected and deeply memorable.

            </p>

            <div className="mt-8">

              <a
                href="#contact"
                className="text-sm font-semibold text-[#9b633d]"
              >
                Discover our story →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SIGNATURE DISHES ================= */}

      <section
        id="experience"
        className="bg-[#24231f] px-6 py-28 text-[#f8f5ef] lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5a47d]">
                From our kitchen
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">
                Signature dishes.
              </h2>

            </div>

            <p className="max-w-sm leading-7 text-white/45">
              A selection of dishes that represent the spirit of Aurelia.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {dishes.map((dish, index) => (

              <article
                key={dish.name}
                className="group border-t border-white/15 pt-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs text-white/30">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#d5a47d]">
                    {dish.price}
                  </span>

                </div>

                <h3 className="mt-10 font-serif text-2xl">
                  {dish.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {dish.description}
                </p>

                <div className="mt-8 h-28 overflow-hidden rounded-2xl bg-gradient-to-br from-[#5e3b2d] via-[#8b5538] to-[#c28a62] transition duration-500 group-hover:scale-[1.02]">

                  <div className="flex h-full items-center justify-center">

                    <div className="h-16 w-16 rounded-full border-4 border-white/70 bg-[#d9c5ab]/80 shadow-xl" />

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= MENU ================= */}

      <section
        id="menu"
        className="px-6 py-28 lg:px-10"
      >

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b633d]">
              The Menu
            </p>

            <h2 className="mt-5 font-serif text-5xl sm:text-6xl">
              Made with intention.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#24231f]/55">
              Our menu changes with the seasons while keeping our favourite
              classics close to the heart.
            </p>

          </div>


          <div className="mt-16 grid gap-14 md:grid-cols-3">

            {menuItems.map((section) => (

              <div key={section.category}>

                <h3 className="border-b border-[#24231f]/15 pb-4 font-serif text-2xl">
                  {section.category}
                </h3>

                <div>

                  {section.items.map(([name, price]) => (

                    <div
                      key={name}
                      className="flex items-center justify-between gap-5 border-b border-[#24231f]/10 py-5"
                    >

                      <span className="text-sm text-[#24231f]/70">
                        {name}
                      </span>

                      <span className="text-sm font-semibold">
                        {price}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>


          <div className="mt-14 text-center">

            <a
              href="#reservation"
              className="inline-flex rounded-full border border-[#24231f]/20 px-7 py-4 text-sm font-semibold transition hover:border-[#9b633d] hover:text-[#9b633d]"
            >
              View Full Menu →
            </a>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="bg-[#e8dfd2] px-6 py-28 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div className="relative">

            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#b57d59] via-[#815039] to-[#443329]">

              <div className="flex h-full items-center justify-center">

                <div className="relative h-48 w-48 rounded-full border-8 border-[#f5eee4]/80 bg-[#9d6443] shadow-2xl">

                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6a675]" />

                </div>

              </div>

            </div>

          </div>


          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b633d]">
              The Aurelia Experience
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
              More than
              <br />
              a meal.
            </h2>

            <p className="mt-7 leading-8 text-[#24231f]/60">
              From the moment you walk through our doors, every detail is
              designed to make your evening memorable.
            </p>

            <div className="mt-10 space-y-5">

              {[
                ["01", "Thoughtful hospitality"],
                ["02", "Seasonal ingredients"],
                ["03", "Crafted cocktails"],
                ["04", "Intimate atmosphere"],
              ].map(([number, text]) => (

                <div
                  key={number}
                  className="flex items-center gap-5 border-b border-[#24231f]/10 pb-5"
                >

                  <span className="text-xs text-[#9b633d]">
                    {number}
                  </span>

                  <span className="text-sm font-medium">
                    {text}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= REVIEWS ================= */}

      <section className="px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b633d]">
              Guest Notes
            </p>

            <h2 className="mt-5 font-serif text-5xl sm:text-6xl">
              Words from our table.
            </h2>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {reviews.map((review) => (

              <article
                key={review.name}
                className="rounded-3xl border border-[#24231f]/10 bg-white p-8"
              >

                <div className="text-2xl text-[#9b633d]">
                  “
                </div>

                <p className="mt-5 text-base leading-8 text-[#24231f]/65">
                  {review.text}
                </p>

                <p className="mt-7 text-sm font-semibold">
                  {review.name}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= RESERVATION ================= */}

      <section
        id="reservation"
        className="px-6 pb-28 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-[#24231f] p-8 text-white sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5a47d]">
                  Reservations
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
                  Your table
                  <br />
                  awaits.
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-white/50">
                  Join us for an evening of thoughtful food, warm hospitality
                  and unforgettable conversations.
                </p>

              </div>


              <div className="rounded-3xl bg-white/[0.06] p-7">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label className="text-xs text-white/40">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d5a47d]"
                    />

                  </div>


                  <div>

                    <label className="text-xs text-white/40">
                      Guests
                    </label>

                    <select
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#d5a47d]"
                      defaultValue="2"
                    >

                      <option
                        value="2"
                        className="text-black"
                      >
                        2 Guests
                      </option>

                      <option
                        value="3"
                        className="text-black"
                      >
                        3 Guests
                      </option>

                      <option
                        value="4"
                        className="text-black"
                      >
                        4 Guests
                      </option>

                      <option
                        value="5"
                        className="text-black"
                      >
                        5 Guests
                      </option>

                      <option
                        value="6"
                        className="text-black"
                      >
                        6+ Guests
                      </option>

                    </select>

                  </div>

                </div>


                <div className="mt-4 grid gap-4 sm:grid-cols-2">

                  <div>

                    <label className="text-xs text-white/40">
                      Date
                    </label>

                    <input
                      type="date"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#d5a47d]"
                    />

                  </div>


                  <div>

                    <label className="text-xs text-white/40">
                      Time
                    </label>

                    <select
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#d5a47d]"
                      defaultValue="7:30 PM"
                    >

                      <option className="text-black">
                        6:30 PM
                      </option>

                      <option className="text-black">
                        7:30 PM
                      </option>

                      <option className="text-black">
                        8:30 PM
                      </option>

                      <option className="text-black">
                        9:30 PM
                      </option>

                    </select>

                  </div>

                </div>


                <button
                  type="button"
                  className="mt-5 w-full rounded-xl bg-[#d5a47d] px-6 py-4 text-sm font-semibold text-[#24231f] transition hover:bg-[#e3bd9c]"
                >
                  Request Reservation →
                </button>

                <p className="mt-4 text-center text-[11px] text-white/25">
                  Reservation requests are confirmed by our team.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section
        id="contact"
        className="border-t border-[#24231f]/10 px-6 py-24 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b633d]">
              Visit us
            </p>

            <h3 className="mt-5 font-serif text-3xl">
              Find Aurelia
            </h3>

          </div>


          <div>

            <p className="text-sm font-semibold">
              Address
            </p>

            <p className="mt-3 text-sm leading-6 text-[#24231f]/55">
              24 Residency Road
              <br />
              Bengaluru, Karnataka
              <br />
              India
            </p>

          </div>


          <div>

            <p className="text-sm font-semibold">
              Opening Hours
            </p>

            <p className="mt-3 text-sm leading-6 text-[#24231f]/55">
              Tuesday — Sunday
              <br />
              12:00 PM — 11:00 PM
              <br />
              Monday — Closed
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#24231f]/10 px-6 py-10 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>

            <p className="font-serif text-xl tracking-[0.08em]">
              AURELIA
            </p>

            <p className="mt-2 text-xs text-[#24231f]/40">
              Modern Indian Dining
            </p>

          </div>


          <div className="flex gap-6 text-xs text-[#24231f]/45">

            <a
              href="#story"
              className="hover:text-[#9b633d]"
            >
              Story
            </a>

            <a
              href="#menu"
              className="hover:text-[#9b633d]"
            >
              Menu
            </a>

            <a
              href="#reservation"
              className="hover:text-[#9b633d]"
            >
              Reservations
            </a>

            <a
              href="#contact"
              className="hover:text-[#9b633d]"
            >
              Contact
            </a>

          </div>


          <p className="text-xs text-[#24231f]/35">
            © 2026 Aurelia
          </p>

        </div>

      </footer>

    </main>
  );
}