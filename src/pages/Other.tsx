import _ from "lodash";
export const Other = () => {
  console.log(`I'm using lodash `, _.VERSION);
  return (
    <div style={{ background: "grey" }}>
      This is the Other Page.
      <p>Loaded on demand.</p>
      <p>
        Entry point is <em>other.*.js</em>.
      </p>
    </div>
  );
};
export default Other;
