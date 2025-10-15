import IconTextFormInput from '@/components/form/IconTextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import httpClient from '@/helpers/httpClient';
import { useAuthContext } from '@/context/useAuthContext';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';
import * as yup from 'yup';
const SingUpForm = () => {
  const navigate = useNavigate();
  const { saveSession } = useAuthContext();
  const editEmailFormSchema = yup.object({
    name: yup.string().required('Please enter your Name'),
    email: yup.string().email('Please enter valid email').required('Please enter your Email'),
    password: yup.string().min(6, 'Password must be at least 6 chars').required('Please enter your Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Please enter your Confirm Password'),
    role: yup.string().oneOf(['student', 'instructor']).default('student')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(editEmailFormSchema),
    defaultValues: { role: 'student' }
  });
  const onSubmit = handleSubmit(async (values) => {
    const payload = { name: values.name, email: values.email, password: values.password, role: values.role };
    const res = await httpClient.post('/auth/signup', payload);
    if (res.data?.token) {
      saveSession({ ...(res.data ?? {}), token: res.data.token });
      navigate('/');
    }
  });
  return <form onSubmit={onSubmit}>
      <div className="mb-4 ">
        <IconTextFormInput control={control} placeholder="Your Name" label="Full name *" name="name" />
      </div>
      <div className="mb-4 ">
        <IconTextFormInput control={control} icon={BsEnvelopeFill} placeholder="E-mail" label="Email address *" name="email" />
      </div>
      <div className="mb-4">
        <IconTextFormInput type='password' control={control} icon={FaLock} placeholder="*********" label="Password *" name="password" />
      </div>
      <div className="mb-4">
        <IconTextFormInput type='password' control={control} icon={FaLock} placeholder="*********" label="Confirm Password *" name="confirmPassword" />
      </div>
      <div className="mb-4">
        <label className="form-label">Register as</label>
        <Controller name="role" control={control} render={({ field }) => (
          <div className="d-flex gap-3">
            <label className="form-check">
              <input className="form-check-input" type="radio" value="student" checked={field.value === 'student'} onChange={() => field.onChange('student')} /> Student
            </label>
            <label className="form-check">
              <input className="form-check-input" type="radio" value="instructor" checked={field.value === 'instructor'} onChange={() => field.onChange('instructor')} /> Instructor
            </label>
          </div>
        )} />
      </div>
      <div className="mb-4">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox-1" />
          <label className="form-check-label" htmlFor="checkbox-1">
            By signing up, you agree to the<a href="#"> terms of service</a>
          </label>
        </div>
      </div>
      <div className="align-items-center mt-0">
        <div className="d-grid">
          <button className="btn btn-primary mb-0" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>;
};
export default SingUpForm;
