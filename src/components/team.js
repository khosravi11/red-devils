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
    <div id='team' className='bg-black py-4'>
    <div className="container">
    <h2 className="section-title text-center text-white">Rosters</h2>
      <h2 className='text-center my-5 text-white'>Coming Soon...</h2>
      {/* <div className="carousel-section text-white">
        <h2 className="section-title text-center">Team 1</h2>
        <Carousel players={players1} />
      </div>
      <div className="carousel-section text-white">
        <h2 className="section-title text-center">Team 2</h2>
        <Carousel players={players2} />
      </div>
      <div className="carousel-section text-white">
        <h2 className="section-title text-center">Team 3</h2>
        <Carousel players={players3} />
      </div> */}
    </div>
    </div>
  );
};

export default Team;
