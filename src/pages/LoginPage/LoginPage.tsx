import Checkbox from '@mui/material/Checkbox';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormField from '@/components/FormField/FormField';
import { LoginData, UserLoginSchema } from '@/types/Data/Data';
import { zodResolver } from "@hookform/resolvers/zod";

import AuthThumbnail from '@/assets/images/AuthThumnail.png';
import GoogleIcon from '@/assets/images/Google.svg';
import FacebookIcon from '@/assets/images/Facebook.svg';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>({
    resolver: zodResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    console.log(data);
    try {
      await login(data);
    } catch {
      toast.error('Wrong username or password!', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: true,
        closeOnClick: false,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-accent-light-600 dark:bg-accent-dark-600 grid grid-cols-1 lg:grid-cols-2 w-screen h-screen p-4 gap-4 overflow-hidden font-archivo">
        <div className="hidden lg:flex w-full overflow-hidden rounded-2xl">
          <img src={AuthThumbnail} alt="AuthThumbnail" className="w-full aspect-auto object-cover" />
        </div>
        <div className="w-full h-fit flex flex-col items-center self-center gap-2">
          <div className="w-3/4 grid gap-6">
            <div className="grid gap-3 text-center">
              <h2 className="text-h4 font-bold text-text-light-600 dark:text-text-dark-600">Welcome back!</h2>
              <p className="text-body4 text-text-dark-400">Welcome back! Please enter your details</p>
            </div>

            <form className="grid gap-2 w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormField
                type="email"
                placeholder="Enter Your Email"
                name="email"
                register={register}
                error={errors.email}
                label="Email"
              />
              <FormField
                type="password"
                placeholder="Enter Your Password"
                name="password"
                register={register}
                error={errors.password}
                label="Password"
              />
              <div className="w-full grid grid-cols-2 items-center">
                <p className="flex items-center gap-1">
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 20 },
                      color: '#6b8afd',
                      '&.Mui-checked': { color: '#6b8afd' },
                      margin: 0,
                      padding: 0,
                    }}
                  />
                  <span className="text-body5 text-text-light-600 dark:text-text-dark-500">Keep me signed in</span>
                </p>
                <Link to="/forgot-password" className="text-body5 text-primary-light-500 underline underline-offset-2 text-right">
                  Forgot password?
                </Link>
              </div>
              <button
                className="font-semibold w-full mt-4 bg-primary-light-500 py-3 px-6 rounded-lg text-text-dark-600 hover:brightness-90 text-body4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Submit'}
              </button>
            </form>
            <span className="text-body4 text-text-light-600 dark:text-text-dark-500 text-center">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary-light-500 underline underline-offset-2">
                Signup
              </Link>
            </span>
          </div>

          <div className="inline-flex items-center justify-center w-full relative my-4">
            <hr className='w-3/4 border-1 border-text-light-500 dark:border-text-dark-500'/>
            <span className="absolute px-3 font-medium text-text-light-500 dark:text-text-dark-500 
            -translate-x-1/2 left-1/2 bg-accent-light-600 dark:bg-accent-dark-600">Or</span>
          </div>

          <div className="grid grid-cols-2">
            {[{ icon: GoogleIcon, label: 'Google' }, { icon: FacebookIcon, label: 'Facebook' }].map(({ icon, label }) => (
              <div key={label} className="flex gap-4 items-center w-fit py-2 
                shadow-xl bg-accent-light-600 dark:bg-accent-dark-500 px-4 rounded-xl cursor-pointer 
                hover:bg-primary-light-500 dark:hover:bg-primary-dark-500 duration-200 ease-in-out group">
                <img src={icon} alt={`${label}Icon`} />
                <span className="text-body4 font-archivo font-semibold text-text-light-600
                 dark:text-text-dark-600 group-hover:text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;

