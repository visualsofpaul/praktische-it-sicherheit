"use client";

import Button from "@components/Button";
const { useEffect, useState } = require("react");

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <nav className="bg-secondary-50 text-secondary-950 fixed top-0 left-0 w-full shadow-sm z-20">
      <ul className="flex items-center gap-8 py-4 px-32">
        <li className="ml-0 mr-auto">
          {/* Logo */}
          <a href="/" className="font-bold text-lg">
            Beamtenkleidung24
          </a>
        </li>
        <li>
          <a href="/">Shop</a>
        </li>
        {isAuthenticated && (
          <li>
            <Button
              onClick={() => {
                // Navigate to the dashboard page
                window.location.href = "/dashboard";
              }}
              variant="primary"
            >
              Dashboard
            </Button>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Button
              onClick={() => {
                // Navigate to the login page
                window.location.href = "/api/auth/login";
              }}
              variant="primary"
            >
              Login
            </Button>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Button
              onClick={() => {
                // Navigate to the logout page
                window.location.href = "/api/auth/logout";
              }}
              variant="outline"
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
