import React from "react";

export function Header() { //multiple export in same file must import using {header}
  return <h2>My App Header</h2>;
}

export function Footer() { //default export in same file must import using [footer]
  return <h3>My App Footer</h3>;
}
