import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API from '../../api';
import Spinner from '../Spinner';

const { Meta } = Card;
function Cards() {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(API.categoryDashboard)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setCards(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loading ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {cards.map((card) => (
            <Card
              onClick={() => {
                history.push(
                  `/home-services/allServices?category=${card.id}&state=all&city=&name=`,
                );
              }}
              hoverable
              style={{ width: 300 }}
              cover={
                <div
                  className='CustomCARD'
                  style={{
                    background: `url("${API.categoryImage.replace(
                      ':id',
                      card.name,
                    )}")`,
                  }}
                  alt='example'
                />
              }
            >
              <Meta
                title={card.name}
                description={`Total Services: ${card.count} `}
              />
            </Card>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Cards;
