import ReactDOM from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <div style={{ background: "lightgrey", padding: "0.7rem 2rem" }}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ul style={{ listStyle: "none", padding: "0", marginBottom: "2rem" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link to="/other">Other</Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link to="/contentfully">Contentfully</Link>
          </li>
        </ul>
        <div style={{ padding: "0 0 0 0.7rem", maxWidth: "60%" }}>
          <Router />
        </div>
      </BrowserRouter>
    </div>
    <br />
    <div>
      <a
        href={`analysis/bundle-treemap.html`}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <small>Bundle analysis</small>
      </a>
    </div>
    <p style={{ fontSize: "0.8rem", position: "absolute", bottom: "0" }}>
      <strong>Disclaimer</strong>: github pages does not support very well
      BrowserRouter navigation, so browser reload on any path different than
      home will result in 404.
    </p>
  </>
);
