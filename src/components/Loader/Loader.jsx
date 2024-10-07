import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width='200'
        color='rgb(0, 0, 172)'
        ariaLabel='infinity-spin-loading'
      />
    </div>
  );
};

export default Loader;
