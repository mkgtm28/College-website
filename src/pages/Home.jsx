import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import notices from './data/notices';
import './Home.css';

function Home() {
  const [activeNotice, setActiveNotice] = useState(0);

  useEffect(() => {
    if (notices.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveNotice((current) => (current + 1) % notices.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      {notices.length > 0 && (
        <section className="notice-ticker" aria-label="Latest college notices">
          <span className="notice-ticker-label">LATEST NOTICE</span>
          <Link
            key={notices[activeNotice].id}
            className="notice-ticker-link"
            to="/updates"
            aria-live="polite"
          >
            {notices[activeNotice].title}
          </Link>
          <Link className="notice-ticker-all" to="/updates">
            All notices <span aria-hidden="true">→</span>
          </Link>
        </section>
      )}

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO DIET MEERUT</p>
          <h1>Learn today.<br />Engineer tomorrow.</h1>
          <p>
            Explore engineering education, admissions, campus updates, and
            opportunities at Delhi Institute of Engineering and Technology,
            Meerut.
          </p>
          <a className="primary-button" href="#about">Discover our college</a>
        </div>

        <div className="hero-art" aria-hidden="true">⚙️ 🎓</div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">ABOUT THE COLLEGE</p>
        <h2>Build your future at DIET Meerut</h2>
        <p>
          Discover the college, explore academic programs, and find information
          about admissions, campus updates, and career opportunities.
        </p>
      </section>

      {/* <section className="home-notices">
        <h2>Latest notices</h2>
        <section className="updates-list" aria-label="Latest college notices">
          {notices.slice(0, 3).map((notice) => (
            <article className="update-card" key={notice.id}>
              <div className="update-card-heading">
                <span className="update-category">{notice.category}</span>
                <time>{notice.date}</time>
              </div>
              <h2>{notice.title}</h2>
              <p>{notice.description}</p>
            </article>
          ))}
        </section>
      </section> */}

      <section className="feature-grid" id="programs">
        <FeatureCard
          icon="🎓"
          title="Admissions"
          description="Find information about applying to the college."
          linkText="Explore admissions"
          href="/admissions"
        />
        <FeatureCard
          icon="📢"
          title="Notices & updates"
          description="Check announcements and important college updates."
          linkText="See latest notices"
          href="/updates"
        />
        <FeatureCard
          icon="💼"
          title="Jobs & opportunities"
          description="Find vacancy and career opportunity information."
          linkText="View opportunities"
          href="/jobs"
        />
      </section>



      <div id="careers" />
    </main>
  );
}

export default Home;
