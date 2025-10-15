import avatar7 from '@/assets/images/avatar/07.jpg';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsPlus, BsX } from 'react-icons/bs';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import httpClient from '@/helpers/httpClient';
import { useAuthContext } from '@/context/useAuthContext';
import { useNotificationContext } from '@/context/useNotificationContext';
const EditProfile = () => {
  const { user, saveSession } = useAuthContext();
  const { showNotification } = useNotificationContext();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const contactFormSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter valid email').required('Please enter your email'),
    phone: yup.string().required('Please enter your phone number'),
    location: yup.string().required('Please enter your location'),
    aboutMe: yup.string()
  });
  
  const {
    control,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      aboutMe: ''
    }
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await httpClient.get('/auth/profile');
        setProfileData(res.data);
        reset(res.data);
      } catch (e) {
        console.error('Failed to fetch profile:', e);
      }
    };
    fetchProfile();
  }, [reset]);

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await httpClient.put('/auth/profile', values);
      if (res.data?.token) {
        saveSession({ ...user, ...res.data.user, token: res.data.token });
      }
      showNotification({ message: 'Profile updated successfully', variant: 'success' });
    } catch (e) {
      showNotification({ message: e.response?.data?.error || 'Failed to update profile', variant: 'danger' });
    } finally {
      setLoading(false);
    }
  };
  return <Card className="bg-transparent border rounded-3">
      <CardHeader className="bg-transparent border-bottom">
        <h3 className="card-header-title mb-0">Edit Profile</h3>
      </CardHeader>
      <CardBody>
        <form className="row g-4" onSubmit={handleSubmit(onSubmit)}>
          <Col xs={12} className="justify-content-center align-items-center">
            <label className="form-label">Profile picture</label>
            <div className="d-flex align-items-center">
              <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                <span className="avatar avatar-xl">
                  <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src={profileData?.avatarUrl || avatar7} alt="" />
                </span>
                <button type="button" className="uploadremove">
                  <BsX className="bi bi-x text-white" />
                </button>
              </label>
              <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">
                Change
              </label>
              <input id="uploadfile-1" className="form-control d-none" type="file" />
            </div>
          </Col>
          <TextFormInput name="name" label="Full name" control={control} containerClassName="col-12" />
          <TextFormInput name="email" label="Email *" control={control} containerClassName="col-md-6" />
          <TextFormInput name="phone" label="Phone number *" control={control} containerClassName="col-md-6" />
          <TextFormInput name="location" label="Location" control={control} containerClassName="col-md-6" />
          <Col xs={12}>
            <label className="form-label">About me</label>
            <textarea className="form-control" rows={3} {...control.register('aboutMe')} />
            <div className="form-text">Brief description for your profile.</div>
          </Col>
          <Col xs={12}>
            <label className="form-label">Education</label>
            <input className="form-control mb-2" type="text" defaultValue="Bachelor in Computer Graphics" />
            <input className="form-control mb-2" type="text" defaultValue="Masters in Computer Graphics" />
            <button className="btn btn-sm btn-light mb-0">
              <BsPlus className="me-1" />
              Add more
            </button>
          </Col>
          <div className="d-sm-flex justify-content-end">
            <button type="submit" className="btn btn-primary mb-0" disabled={loading}>
              {loading ? 'Saving...' : 'Save changes'}
            </button>
          </div>
        </form>
      </CardBody>
    </Card>;
};
export default EditProfile;
