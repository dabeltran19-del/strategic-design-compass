interface ImpactListProps {
  items: { metric: string; description: string }[];
}

const ImpactList = ({ items }: ImpactListProps) => (
  <ul className="space-y-4">
    {items.map((item, i) => (
      <li key={i} className="border-l-2 border-accent pl-6 py-2">
        <p className="text-lg">
          <span className="text-accent font-medium">{item.metric}</span>{" "}
          <span className="text-muted-foreground">{item.description}</span>
        </p>
      </li>
    ))}
  </ul>
);

export default ImpactList;
