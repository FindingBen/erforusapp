
import './App.css';

function App() {
  return (
    <div className="showcase-container">
      <header className="showcase-header">
        <h1>Erforus</h1>
        <h2>Map of Public Bike Pumps in Copenhagen</h2>
      </header>
      <main className="showcase-main">
        <div className='m-2 border-2 border-gray-300 rounded-lg p-2 mx-170 mb-5'>
          <img src="/bikeLogo.png" alt="App Logo" className="w-32 mx-auto" />
        </div>
        <p className="mx-auto max-w-2xl text-center text-lg text-gray-700 mb-10">
          Discover and locate public bike pumps all around Copenhagen. Our app helps cyclists quickly find the nearest pump station, making your ride smoother and stress-free. Available now for iOS, and coming soon to Android!
        </p>
        <div className="showcase-badges">
          <a href="https://apps.apple.com/dk/app/erforus/id6741717002" aria-label="Download on the App Store">
            {/* Replace with real App Store badge/image */}
            <img src="/app2.svg" alt="App Logo" className="w-32 mx-auto" />
          </a>
          <a href="#" className="badge android-badge" aria-label="Coming soon to Google Play">
            {/* Replace with real Google Play badge/image */}
            <span>Android (coming soon)</span>
          </a>
        </div>
        <div className="showcase-image">
          {/* Optionally add an app screenshot or illustration here */}
        </div>
      </main>
      <footer className="showcase-footer">
        <p>&copy; {new Date().getFullYear()} Bike Pump Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
