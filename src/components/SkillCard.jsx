const SkillCard = ({ title, items }) => (
  <div className="card skill-card">
    <h4>{title}</h4>
    <ul className="list inline">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

export default SkillCard;
