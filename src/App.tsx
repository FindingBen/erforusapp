import './App.css';

function App() {
  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <a className="brand" href="#" aria-label="Erforus home">
          <img src="/erforusapp/bikeLogo.png" alt="" />
          <span>erforus</span>
        </a>
        <span className="header-note">Made for enthusiastic cyclists</span>
      </header>

      <main className="showcase-main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">YOUR RIDE, A LITTLE EASIER</p>
            <h1 id="hero-title">A pump stop is never far away.</h1>
            <p className="hero-description">
              Find public bike pumps around Copenhagen and Aalborg and get back to enjoying
              the ride. Your handy city cycling companion, on iOS and Android.
            </p>
            <div className="platform-note">
              <span className="platform-dot" aria-hidden="true" />
              Available on iOS <span aria-hidden="true">·</span> Android coming soon
            </div>
          </div>
          <div className="app-mark">
            <img src="/erforusapp/bikeLogo.png" alt="Erforus bike pump finder app" />
          </div>
          <div className="hero-decoration" aria-hidden="true" />
        </section>

        <section className="download-section" aria-labelledby="download-title">
          <h2 id="download-title">Take Erforus along</h2>
          <p>Find your next pump stop, wherever the ride takes you.</p>
          <div className="showcase-badges">
            <a
              className="store-link"
              href="https://apps.apple.com/dk/app/erforus/id6741717002"
              aria-label="Download Erforus on the App Store"
            >
              <img src="/erforusapp/app2.svg" alt="Download on the App Store" />
            </a>
            <a
              className="store-link"
              href="https://play.google.com/store/apps/details?id=com.erforas.myapp"
              aria-label="Erforus on Google Play, coming soon"
            >
              <img src="/erforusapp/android.svg" alt="Get it on Google Play" />
            </a>
          </div>
        </section>
      </main>

      <footer className="showcase-footer">
        <span>© {new Date().getFullYear()} Erforus</span>
        <span>Made for two wheels and Danish streets.</span>
      </footer>
    </div>
  );
}

export default App;
