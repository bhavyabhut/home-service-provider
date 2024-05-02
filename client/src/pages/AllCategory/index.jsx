import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '../../api';
import Spinner from '../Spinner';

const { Meta } = Card;

function Cards() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API.categoryDashboard)
      .then((res) => {
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
      <h1 className='text-3xl font-semibold mb-6'>All Categories</h1>

      {!loading ? (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {cards.map((card) => (
            <Card
              className='mb-2'
              key={card.id}
              onClick={() => {
                navigate(`/home-services/allServices?category=${card.id}`);
              }}
              hoverable
              cover={
                <img
                  src={`${API.categoryImage.replace(':id', card.name)}`}
                  alt={card.name}
                  className='w-full h-48 object-cover'
                  onError={(e) => {
                    e.target.src = '../../images/default-placeholder.png';
                  }}
                />
              }
            >
              <Meta
                title={card.name}
                description={`Total Services: ${card.count}`}
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
