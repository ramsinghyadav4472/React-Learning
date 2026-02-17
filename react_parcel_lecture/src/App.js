import React from "react";
import { Header, Footer } from "./components/Layout"; //{} means name import and export
import Card from "./components/Card"; //default export (file export only one main things import without)
//default export =single main export
//named export =multiple export utility/components

export default function App() {
  return (
    <div>
      <Header />
      <h1>React App using Parcel</h1>
      <Card title="React" />
      <Card title="Parcel Bundler" />
      <Footer />
    </div>
  );
}
