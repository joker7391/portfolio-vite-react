import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const nav = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
  ];

  return (
    <ul className="flex gap-4">
      {nav.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className="text-blue-500 hover:underline">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
