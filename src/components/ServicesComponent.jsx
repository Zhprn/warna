import '../styles/main.css';
import { Accordion } from 'react-bootstrap';

const ServicesComponent = () => {
  return (
    <div className="container services-container d-flex justify-content-between p-5">
      <h2 className="title">
        Our <br></br>Services<span className="highlight">.</span>
      </h2>
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
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Product Photo</Accordion.Header>
          <Accordion.Body>
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Logo Design</Accordion.Header>
          <Accordion.Body>
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Company Profile</Accordion.Header>
          <Accordion.Body>
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Social Media Management</Accordion.Header>
          <Accordion.Body>
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>KOL</Accordion.Header>
          <Accordion.Body>
            Creating visual content like logos and posters to effectively communicate messages and align with branding strategies.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ServicesComponent;
