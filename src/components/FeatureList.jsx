export default function FeatureList({ items }) {
  return (
    <div className="feature-list">
      {items.map((item) => (
        <div className="feature" key={item.no}>
          <div className="feature-no">{item.no}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
