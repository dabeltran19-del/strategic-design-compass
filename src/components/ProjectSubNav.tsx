import { NavLink } from "react-router-dom";

const links = [
  { label: "01 Context & Role", path: "/lab-enj/context" },
  { label: "02 Co-creation", path: "/lab-enj/workshops" },
  { label: "03 Impact", path: "/lab-enj/hackathon" },
];

const ProjectSubNav = () => (
  <div className="border-b border-border mb-12">
    <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `caps-label py-4 whitespace-nowrap border-b-2 transition-colors duration-200 ${
              isActive ? "border-foreground text-foreground" : "border-transparent text-muted-foreground"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  </div>
);

export default ProjectSubNav;
