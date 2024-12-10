"use client";

import Link from "next/link";
import styled from "styled-components";

const MenuData: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
];

export default function Header() {
  return (
    <StyledWrapper>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <ul className="flex space-x-6 text-gray-500 font-medium">
            {MenuData.map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref className="hover:text-gray-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77A1.75 1.75 0 0 0 0 1.74v20.5A1.75 1.75 0 0 0 1.77 24h20.46A1.75 1.75 0 0 0 24 22.24V1.74A1.75 1.75 0 0 0 22.23 0zM7.09 20.45H3.55V9h3.54zm-1.77-13a2.06 2.06 0 1 1 .07-4.12 2.06 2.06 0 1 1-.07 4.12zm15.44 13h-3.53v-5.65c0-1.35-.48-2.27-1.68-2.27a1.8 1.8 0 0 0-1.69 1.18 2.27 2.27 0 0 0-.1.81v5.93h-3.54s.05-9.63 0-10.63h3.54v1.51a3.53 3.53 0 0 1 3.2-1.78c2.34 0 4.1 1.52 4.1 4.8z" />
              </svg>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12a11.5 11.5 0 0 0 7.91 10.94c.58.11.79-.25.79-.55v-2.14c-3.22.7-3.9-1.41-3.9-1.41a3.07 3.07 0 0 0-1.28-1.68c-1.05-.72.08-.7.08-.7a2.44 2.44 0 0 1 1.78 1.2 2.5 2.5 0 0 0 3.46 1 2.51 2.51 0 0 1 .75-1.58c-2.56-.29-5.26-1.28-5.26-5.72a4.47 4.47 0 0 1 1.18-3.1 4.17 4.17 0 0 1 .11-3.06s.97-.31 3.2 1.18a11 11 0 0 1 5.84 0c2.23-1.49 3.2-1.18 3.2-1.18a4.17 4.17 0 0 1 .11 3.06 4.47 4.47 0 0 1 1.18 3.1c0 4.45-2.7 5.42-5.27 5.71a2.79 2.79 0 0 1 .8 2.17v3.21c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.26-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    transition: all 0.2s ease-in-out 0s;
  }
`;
