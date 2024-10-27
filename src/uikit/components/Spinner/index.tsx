import { SpinnerFrame } from './styles';

const Spinner = () => {
  return (
    <SpinnerFrame>
      <div className='Spinner_bounce1'></div>
      <div className='Spinner_bounce2'></div>
      <div className='Spinner_bounce3'></div>
    </SpinnerFrame>
  );
};

export default Spinner;
