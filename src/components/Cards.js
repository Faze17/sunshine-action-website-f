import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Here are some Examples of Our Volunteers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image1home.jpg'
              text='ESF Discovery College Students at Sunshine Action&apos;s Fortune Bag Event'
            />
            <CardItem
              src='images/image2home.jpg'
              text='Sunshine Action Event including Various International Schools Across Hong Kong'
            />
            <CardItem
              src='images/image8home.jpg'
              text='West Island School Students Vounteering at a Sunshine Action Event'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image6home.jpg'
              text='Sunshine Action Volunteers Before Attending Street Sleepers Event'
            />
            <CardItem
              src='images/image4home.jpg'
              text='Sunshine Action Volunteers Before Donating Fortune Bags to the Elderly'
            />
            <CardItem
              src='images/image7home.jpg'
              text='Founder of Sunshine Action, Sunny Mak, with Volunteers'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;