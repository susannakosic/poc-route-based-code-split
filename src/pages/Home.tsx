import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      This is the Home Page. <Link to="/other">Other</Link>.
    </div>
  );
};
