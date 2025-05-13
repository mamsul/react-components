import { useToast } from '../../components/molecules/Toast/ToastService';
import ReactGA from 'react-ga4';

export default function ToastSection() {
  const toast = useToast();

  const handleToastSuccess = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Click',
      label: 'Click Toast Success',
    });
    toast.open('success', 'Toast Success');
  };
  const handleToastWarning = () => {
    console.log('Button clicked, sending event...');
    ReactGA.event({
      category: 'User Interaction',
      action: 'Click',
      label: 'Click Toast Warning',
    });
    toast.open('warning', 'Toast Warning');
  };
  const handleToastError = () => toast.open('error', 'Toast Error');
  const handleToastInfo = () => toast.open('info', 'Toast Info');

  return (
    <div className="flex flex-row space-x-2 pl-2.5">
      <button className="btn btn-success" onClick={handleToastSuccess}>
        Toast Success
      </button>
      <button className="btn btn-warning" onClick={handleToastWarning}>
        Toast Warning
      </button>
      <button className="btn btn-danger" onClick={handleToastError}>
        Toast Error
      </button>
      <button className="btn btn-info" onClick={handleToastInfo}>
        Toast Info
      </button>
    </div>
  );
}
