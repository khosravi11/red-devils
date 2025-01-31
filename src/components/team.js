import React from 'react';
// import Carousel from './carousel';

// const players1 = [
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '23',
//     bio: 'John Doe\nGuard, 6\'2"',
//     stats: 'PPG: 20, RPG: 5, APG: 7',
//   },
//   // Add more players as needed
// ];

// const players2 = [
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '45',
//     bio: 'Jane Smith\nForward, 6\'0"',
//     stats: 'PPG: 18, RPG: 8, APG: 4',
//   },
//   // Add more players as needed
// ];

// const players3 = [
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   {
//     image: 'https://placehold.co/150x150',
//     number: '10',
//     bio: 'Alice Johnson\nCenter, 6\'5"',
//     stats: 'PPG: 15, RPG: 10, APG: 3',
//   },
//   // Add more players as needed
// ];

const Team = () => {
  return (
    <div id='team' className='register-container py-4'>
      <div className="container">
        <h2 className='section-title text-white'>Affiliates</h2>
      <div className="row text-center">
      <div className="col-md-4">
        <img src="/images/red-devils-logo.png" className="img-fluid rounded affiliate-logo" alt="Evolve Logo"/>
      </div>
      <div className="col-md-4">
        <img src="/images/evolve.png" className="img-fluid rounded affiliate-logo" alt="Adidas Logo"/>
      </div>
      <div className="col-md-4">
        <img src="/images/adidas.png" className="img-fluid rounded affiliate-logo" alt="Red Devils"/>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Team;
