import avatar1 from '@/assets/images/avatar/01.jpg';
import avatar3 from '@/assets/images/avatar/03.jpg';
import avatar4 from '@/assets/images/avatar/04.jpg';
import avatar6 from '@/assets/images/avatar/06.jpg';
import avatar7 from '@/assets/images/avatar/07.jpg';
import avatar9 from '@/assets/images/avatar/09.jpg';
import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import PageMetaData from '@/components/PageMetaData';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight, FaBan, FaMapMarkerAlt, FaRegEnvelope, FaSearch } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react';
import api from '@/helpers/httpClient';
import useQueryParams from '@/hooks/useQueryParams';
const StudentListPage = () => {
  const query = useQueryParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let ignore = false;
    async function run() {
      setLoading(true);
      setError('');
      try {
        const params = {};
        if (query.courseId) params.courseId = query.courseId;
        if (search) params.q = search;
        const { data } = await api.get('/students/instructor/enrollments', { params });
        if (!ignore) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!ignore) setError('Failed to load students');
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    run();
    return () => {
      ignore = true;
    };
  }, [query.courseId]);

  const sortedItems = useMemo(() => {
    const arr = [...items];
    if (sortBy === 'Newest') arr.sort((a, b) => new Date(b.enrolledAt) - new Date(a.enrolledAt));
    else if (sortBy === 'Oldest') arr.sort((a, b) => new Date(a.enrolledAt) - new Date(b.enrolledAt));
    return arr;
  }, [items, sortBy]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // re-fetch with search
    (async () => {
      setLoading(true);
      setError('');
      try {
        const params = {};
        if (query.courseId) params.courseId = query.courseId;
        if (search) params.q = search;
        const { data } = await api.get('/students/instructor/enrollments', { params });
        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        setError('Failed to load students');
      } finally {
        setLoading(false);
      }
    })();
  };

  return <>
      <PageMetaData title="Student List" />
      <Card className="border bg-transparent rounded-3">
        <CardHeader className="bg-transparent border-bottom">
          <h3 className="mb-0">My Students List</h3>
        </CardHeader>
        <CardBody>
          <Row className="g-3 align-items-center justify-content-between mb-4">
            <Col md={8}>
              <form className="rounded position-relative" onSubmit={onSearchSubmit}>
                <input className="form-control pe-5 bg-transparent" value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search by name or email" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <FaSearch className="fas fa-search fs-6 " />
                </button>
              </form>
            </Col>
            <Col md={3}>
              <form>
                <ChoicesFormInput value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                  <option value="">Sort by</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </ChoicesFormInput>
              </form>
            </Col>
          </Row>
          <div className="table-responsive border-0">
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">
                    Student name
                  </th>
                  <th scope="col" className="border-0">
                    Progress
                  </th>
                  <th scope="col" className="border-0">
                    Courses
                  </th>
                  <th scope="col" className="border-0">
                    Enrolled date
                  </th>
                  <th scope="col" className="border-0 rounded-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={5}>Loading...</td>
                  </tr>
                )}
                {error && !loading && (
                  <tr>
                    <td colSpan={5} className="text-danger">{error}</td>
                  </tr>
                )}
                {!loading && !error && sortedItems.length === 0 && (
                  <tr>
                    <td colSpan={5}>No students found</td>
                  </tr>
                )}
                {!loading && !error && sortedItems.map((row) => {
                  const avatarFallbacks = [avatar1, avatar3, avatar4, avatar6, avatar7, avatar9];
                  const avatarSrc = row.student?.avatarUrl || avatarFallbacks[Math.floor(Math.random() * avatarFallbacks.length)];
                  const city = row.student?.location || '—';
                  const progress = Number(row.progressPercent || 0);
                  const enrolledDate = row.enrolledAt ? new Date(row.enrolledAt).toLocaleDateString() : '—';
                  return (
                    <tr key={row.id}>
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-md mb-2 mb-md-0">
                            <img src={avatarSrc} className="rounded" alt="avatar" />
                          </div>
                          <div className="mb-0 ms-2">
                            <h6 className="mb-0">
                              <span className="stretched-link">
                                {row.student?.name || 'Unnamed'}
                              </span>
                            </h6>
                            <span className="text-body small">
                              <FaMapMarkerAlt className="me-1 " />
                              {city}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center text-sm-start">
                        <div className=" overflow-hidden">
                          <h6 className="mb-0">{progress}%</h6>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
                          </div>
                        </div>
                      </td>
                      <td>{row.course?.title || '—'}</td>
                      <td>{enrolledDate}</td>
                      <td>
                        <Button variant="success-soft" className="btn-round me-2 mb-0 flex-centered" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
                          <FaRegEnvelope size={15} className="far fa-envelope" />
                        </Button>
                        <button className="btn btn-danger-soft btn-round mb-0 flex-centered" data-bs-toggle="tooltip" data-bs-placement="top" title="Block">
                          <FaBan size={15} className="fas fa-ban" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
            <p className="mb-0 text-center text-sm-start">Showing {sortedItems.length} entries</p>
            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0">
                  <a className="page-link" href="#" tabIndex={-1}>
                    <FaAngleLeft className="fas fa-angle-left" />
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item mb-0 active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="#">
                    <FaAngleRight className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </CardBody>
      </Card>
    </>;
};
export default StudentListPage;

