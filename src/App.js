import "./App.css";

function App() {
  return (
    <div className="website">
      {/* Header */}
      <header className="header">
        <div className="logo">MUFEEDA JH ♥ MUHAMMED AJMAL S</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#invitation">Invitation</a>
          <a href="#details">Details</a>
          <a href="#venue">Venue</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="overlay">
          <h2 className="arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</h2>
          <p>In the name of Allah, the Most Beneficent & the Most Merciful</p>

          <h2>
            MUFEEDA JH <span>♥</span> MUHAMMED AJMAL S
          </h2>

          <p className="date">
            Sunday, 24th May 2026 <br />
            (07th Dhuʻl-Hijjah 1447)
          </p>
        </div>
      </section>

      {/* Invitation Section */}
      <section id="invitation" className="section">
        <h2>Invitation</h2>

        <p>
          <strong>Mr. S. Hussain & Mrs. S. Jaseela</strong> <br />
          Muhammad Manzil, Mulammoodu, Karikkuzhi, Panavoor P.O, Nedumangad,
          Trivandrum – 695568 <br />
          Ph: 9495066802, 9496814975
        </p>

        <p className="invite-text">
          Cordially solicit your esteemed presence and blessings with family and
          friends on the auspicious occasion of the marriage of our beloved
          daughter and to bless the couple with your prayers and good wishes.
        </p>
      </section>

      {/* Couple Details */}
      <section id="details" className="section light">
        <h2>The Couple</h2>

        <div className="card">
          <h3>MUFEEDA JH</h3>
          <p>
            (Grand Daughter of Late Haji M. Sulthan Pillai Karikkuzhi & S.
            Ismail Pillai Manickal)
          </p>
        </div>

        <div className="card">
          <h3>MUHAMMED AJMAL S</h3>
          <p>
            S/O Mr. Sabu Salahudeen & Mrs. Sheeja A <br />
            Ajmal Manzil, Vallichira, PC Mukku P.O, Kallambalam, Trivandrum
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section id="venue" className="section">
        <h2>Nikkah Ceremony</h2>

        <p>
          <strong>إن شاء الله</strong>
        </p>

        <p>Nikkah: 11:30 AM – 12:30 PM</p>

        <p className="highlight">Venue: Raj Convention Centre, Chullimanoor</p>
        <div className="qr-section">
          <div className="qr-wrapper">
            <div className="scan-corners">
              {/* This link is now encoded specifically for the Raj Convention Centre location */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://maps.google.com/?q=Raj+Convention+Centre+Chullimanoor")}`}
                alt="Venue QR"
                className="qr-image"
              />
            </div>
          </div>
        </div>

        <p className="footer-note">
          With Best Compliments & Sharing the Happiness: Friends & Family
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>May Allah bless the couple with happiness and barakah 🤍</p>
      </footer>
    </div>
  );
}

export default App;
