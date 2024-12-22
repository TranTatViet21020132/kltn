import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';
import { InputOTP } from "antd-input-otp";

import AuthThumbnail from '@/assets/images/AuthThumnail.png';
import OTPLogo from '@/assets/images/OTP.svg';
import { useState } from 'react';

const OTPPage: React.FC = () => {
  const { verify2FACode } = useAuth();
  const [otpValues, setOtpValues] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const isValid = await verify2FACode(otpValues.join(""));
      if (isValid) {
        toast.success('Verification successful!', {
          position: 'top-center',
          autoClose: 2000,
          theme: 'dark',
        });
      } else {
        toast.error('Invalid OTP. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
          theme: 'dark',
        });
      }
    } catch {
      toast.error('Something went wrong. Please try again.', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'dark',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-accent-light-600 dark:bg-accent-dark-600 grid grid-cols-1 lg:grid-cols-2 w-screen h-screen p-4 gap-4 overflow-scroll font-archivo">
        <div className="hidden lg:flex w-full overflow-hidden rounded-2xl">
          <img src={AuthThumbnail} alt="AuthThumbnail" className="w-full aspect-auto object-cover" />
        </div>
        <div className="w-full h-fit flex flex-col items-center self-center gap-2">
          <img src={OTPLogo} alt="OTP Logo" className='w-1/4 mb-4'/>
          <div className="w-3/4 grid gap-6">
            <div className="grid gap-2 text-center">
              <h2 className="text-h5 font-bold text-text-light-600 dark:text-text-dark-600">Enter OTP</h2>
              <p className="text-body4 text-text-dark-400">We've sent an OTP to your email. Please enter it below.</p>
            </div>

            
            <div className="flex flex-col items-center gap-2">
              
              <InputOTP
                inputType="custom"
                inputRegex="^[0-9]+$"
                onChange={setOtpValues}
                value={otpValues}
                inputClassName="w-12 h-12 text-center text-lg border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                wrapperClassName="flex gap-2 justify-center"
              />
            </div>

            <button
              className={`w-full py-3 rounded-lg text-white font-semibold ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>


            <span className="text-body5 text-text-light-600 dark:text-text-dark-500 text-center">
              Didn't receive the code?{' '}
              <button className="text-primary-light-500 underline underline-offset-2">
                Resend OTP
              </button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTPPage;
