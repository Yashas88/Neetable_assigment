import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const styles = {
  cardImage: {
    width: '100px',
    height: '100px',
    margin: 'auto',
  },
  cardName: {
    margin: 'auto',
  },
};

const Landingpage = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        setUser(data.results);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log('user', user);

  return (
    <Row xs={1} md={2} className='g-4'>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          {user.map((item, index) => (
            <Card>
              <Card.Img
                variant='top'
                src={item.picture.large}
                style={styles.cardImage}
              />
              <Card.Body style={styles.cardName}>
                <Card.Title>
                  {item.name.title} {item.name.first} {item.name.last}
                </Card.Title>
                <Card.Text>{item.location.timezone.description}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <small className='text-muted'>Updated 5 hours ago</small>
                <AvatarGroup max={4}>
                  <Avatar alt='{item.name.first}' src={item.picture.large} />
                  <Avatar alt='{item.name.first}' src={item.picture.large} />
                  <Avatar alt='{item.name.first}' src={item.picture.large} />
                  <Avatar alt='{item.name.first}' src={item.picture.large} />
                  <Avatar alt='{item.name.first}' src={item.picture.large} />
                </AvatarGroup>
              </Card.Footer>
            </Card>
          ))}
        </Col>
      ))}
    </Row>
  );
};

export default Landingpage;
