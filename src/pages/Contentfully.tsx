import { createClient } from "contentful";
export const Contentfully = () => {
  console.log(`I'm using contentful `, createClient);
  return (
    <div style={{ background: "cyan", padding: "0.3rem 0.7rem" }}>
      I depend on Contentful.
      <p>I'm loaded on demand.</p>
      <p>
        My entry point is <em>contentfully.*.js</em>.
      </p>
    </div>
  );
};
export default Contentfully;
