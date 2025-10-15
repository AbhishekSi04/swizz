import { Navigate, Route, Routes } from 'react-router-dom';
import { adminRoutes, appRoutes, authRoutes, InstructorRoutes, shopRoutes, studentRoutes } from '@/routes/index';
import AdminLayout from '@/layouts/AdminLayout';
import ShopLayout from '@/layouts/ShopLayout';
import InstructorLayout from '@/layouts/InstructorLayout';
import StudentLayout from '@/layouts/StudentLayout';
import OtherLayout from '@/layouts/OtherLayout';
import { useAuthContext } from '@/context/useAuthContext';
const AppRouter = props => {
  const {
    isAuthenticated
  } = useAuthContext();
  return <Routes>
      {(authRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={<OtherLayout {...props}>{route.element}</OtherLayout>} />)}
      {(appRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={<OtherLayout {...props}>{route.element}</OtherLayout>} />)}
      {(shopRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? <ShopLayout {...props}>{route.element}</ShopLayout> : <Navigate to={{
      pathname: '/auth/sign-in',
      search: `?redirectTo=${encodeURIComponent((route.path || '').trim())}`
    }} />} />)}
      {(InstructorRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? <InstructorLayout {...props}>{route.element}</InstructorLayout> : <Navigate to={{
      pathname: '/auth/sign-in',
      search: `?redirectTo=${encodeURIComponent((route.path || '').trim())}`
    }} />} />)}
      {(studentRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? <StudentLayout {...props}>{route.element}</StudentLayout> : <Navigate to={{
      pathname: '/auth/sign-in',
      search: `?redirectTo=${encodeURIComponent((route.path || '').trim())}`
    }} />} />)}

      {(adminRoutes || []).map((route, idx) => <Route key={idx + route.name} path={route.path} element={isAuthenticated ? <AdminLayout {...props}>{route.element}</AdminLayout> : <Navigate to={{
      pathname: '/auth/sign-in',
      search: `?redirectTo=${encodeURIComponent((route.path || '').trim())}`
    }} />} />)}
    </Routes>;
};
export default AppRouter;
