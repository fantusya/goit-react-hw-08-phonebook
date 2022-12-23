import { toast } from 'react-toastify';

const Error = ({ errorText }) => {
  return toast.error(`${errorText}`, { pauseOnHover: false });
};

export default Error;
