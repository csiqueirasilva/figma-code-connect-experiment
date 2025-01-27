import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const Link: React.FC<LinkProps> = ({ to, children, className = "", target, rel }) => {
  return (
    <RouterLink
      to={to}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={`text-blue-500! cursor-pointer! ${className}`}
    >
      {children}
    </RouterLink>
  );
};

export default Link;