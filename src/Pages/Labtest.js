import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import SideAccordion from '../Components/SideAccordion';
import AddInfo from '../Components/AddInfo';
import axios from 'axios';
import HomeCollection from '../Components/HomeCollection';

const Labtest = () => {
  const { srno } = useParams(); // Extract the 'id' parameter from the URL
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/labtest/${srno}`);
        setTestData(response.data); // Assuming response.data contains your test data
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTestData();
  }, [srno]); // Fetch data whenever 'srno' changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!testData) {
    return <p>No data available for this test.</p>;
  }

  const {
    Name,
    Subtitle,
    TestPreparation1,
    TestPreparation2,
    TestPreparation3,
    TestPreparation4,
    UnderStandHeader,
    Question1,
    Answer1,
    Question2,
    AccordionHeader1,
    Accordion1Answer,
    AccordionHeader2,
    Accordion2Answer,
    AccordionHeader3,
    Accordion3Answer,
    Title2,
  } = testData;

  return (
    <>
      <div className="contain-component">
        <div className="Component-item2">
          {/* <Sidebar/> */}
          <SideAccordion />
        </div>
        <div className="component-item">
          <Card className="card-main" style={{ width: '50rem', height: 'auto' }}>
            <Card.Body className="card-body">
              <div className="head-button">
                <Card.Title className="card-title">{Name}</Card.Title>
                <Button id="New">Add to cart</Button>
              </div>
              <Card.Subtitle>{Subtitle}</Card.Subtitle>
              <div className="test-info">
                <div className="item1">You need to provide <br />Blood</div>
                <div className="item2">This test is for <br />Male,Female</div>
              </div>
              <Card.Text className="card-box">
                <div className="card-box-item">
                  <span id="title">Test Preparation:</span>
                  <ol className="prepareList">
                    <li>{TestPreparation1}</li>
                    <li>{TestPreparation2}</li>
                    <li>{TestPreparation3}</li>
                    <li>{TestPreparation4}</li>
                  </ol>
                </div>
              </Card.Text>
              <Card.Text className="card-test-info">
                <div className="card-test-title">
                  {UnderStandHeader}<hr />
                </div>
                <Card.Subtitle className='card-sub'>{Question1}</Card.Subtitle>
                <div className="card-test-para">
                  <p id="test-info">{Answer1}</p>
                </div>
              </Card.Text>
              <Card.Text className="card-test-info">
                <Card.Text className='card-sub'>{Question2}</Card.Text>
              </Card.Text>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{AccordionHeader1}</Accordion.Header>
                  <Accordion.Body>{Accordion1Answer}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>{AccordionHeader2}</Accordion.Header>
                  <Accordion.Body>{Accordion2Answer}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>{AccordionHeader3}</Accordion.Header>
                  <Accordion.Body>{Accordion3Answer}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="home-container">
                <div className="home-container-title">
                  {Title2}<br />
                  <hr />
                </div>
               <HomeCollection/>
              </div>
            </Card.Body>
          </Card>
          <AddInfo />
        </div>
      </div>
    </>
  );
};

export default Labtest;
