function FeatureCard({ icon, title, description, linkText, href }) {
  return (
    <a className="feature-card" href={href}>
      <span className="feature-icon" aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="feature-link">{linkText} →</span>
    </a>
  );
}

export default FeatureCard;