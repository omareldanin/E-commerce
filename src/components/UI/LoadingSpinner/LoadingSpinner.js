import "./LoadingSpinner.scss";
import { DotSpinner } from "@uiball/loaders";
const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner center">
      <DotSpinner size={40} speed={0.9} color="#ff5936" />
    </div>
  );
};
export default LoadingSpinner;
