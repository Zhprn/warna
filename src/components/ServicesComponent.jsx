import '../styles/main.css';
import { Accordion } from 'react-bootstrap';

const ServicesComponent = () => {
  return (
    <div className="services">
      <h2>Our <br /> Services<span>.</span></h2>
      <div className="service-list">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Graphic Design</Accordion.Header>
            <Accordion.Body>
              Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Graphic Video</Accordion.Header>
            <Accordion.Body>
              Description for Graphic Video.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Product Photo</Accordion.Header>
            <Accordion.Body>
              Description for Product Photo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Logo Design</Accordion.Header>
            <Accordion.Body>
              Description for Logo Design.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Company Profile</Accordion.Header>
            <Accordion.Body>
              Description for Company Profile.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Social Media Management</Accordion.Header>
            <Accordion.Body>
              Description for Social Media Management.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>KOL</Accordion.Header>
            <Accordion.Body>
              Description for KOL.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesComponent;
