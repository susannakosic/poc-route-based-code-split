import _ from "lodash";
export const Other = () => {
  console.log(`I'm using lodash `, _.VERSION);
  return <div>This is the Other Page</div>;
};
export default Other;
