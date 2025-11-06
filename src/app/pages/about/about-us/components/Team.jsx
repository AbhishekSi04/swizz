import TinySlider from '@/components/TinySlider';
import { getAllCourses } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { renderToString } from 'react-dom/server';
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { awards } from '../data';
const MemberCard = ({
  member
}) => {
  return <div className="text-center">
      <div className="avatar avatar-xxl mb-3">
        <img className="avatar-img rounded-circle" src={member.avatar} alt="avatar" />
      </div>
      <h6 className="mb-0">
        <Link to="">{member.name}</Link>
      </h6>
      <p className="mb-0 small">{member.role}</p>
      <ul className="list-inline mb-0">
        {Array(Math.floor(member.rating.star)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1 small">
              <FaStar size={14} className="text-warning" />
            </li>)}
        {!Number.isInteger(member.rating.star) && <li className="list-inline-item me-1 small">

            <FaStarHalfAlt size={14} className="text-warning" />
          </li>}
        {member.rating.star < 5 && Array(5 - Math.ceil(member.rating.star)).fill(0).map((_star, idx) => <li key={idx} className="list-inline-item me-1 small">
                <FaRegStar size={14} className="text-warning" />
              </li>)}
      </ul>
    </div>;
};
const Team = () => {
  const allTeamMembers = useFetchData(getAllCourses);
  const courseSliderSettings = {
    arrowKeys: true,
    gutter: 20,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nested: 'inner',
    mouseDrag: true,
    controlsText: [renderToString(<FaArrowLeft size={16} />), renderToString(<FaArrowRight size={16} />)],
    autoplay: true,
    controls: true,
    items: 4,
    nav: false,
    responsive: {
      1: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };
  return <section>

    </section>;
};
export default Team;
