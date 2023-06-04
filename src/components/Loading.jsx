import { Dna } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Dna
        visible={true}
        height="600px"
        width="600px"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      ;
    </div>
  );
};

export default Loading;
