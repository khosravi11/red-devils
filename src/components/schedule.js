import React from 'react';

const Schedule = () => {
  const tournaments = [
    { date: 'October 5th-6th', event: 'Tune Up Tournament', location: 'East Bay' },
    { date: 'October 26th-27th', event: 'BAS Tournament', location: 'East Bay' },
    { date: 'November 9th-10th', event: 'OGP Premier Tournament', location: 'Oakland, CA' },
    { date: 'November 16th-17th', event: 'The Stage Adidas Tournament', location: 'Auburn, WA' },
    { date: 'December 7th-8th', event: 'Grassroots Tournament', location: 'Alameda, CA' },
    { date: 'December 21st-22nd', event: 'Adidas at OGP', location: 'Oakland, CA' },
    { date: 'January 4th-5th', event: 'Adidas West Regionals', location: 'Phoenix, AZ' },
    { date: 'January 11th-12th', event: 'OGP New Years Bash', location: 'Oakland, CA' },
    { date: 'January 18th-20th', event: 'MLK Classic OGP', location: 'Anaheim, CA' },
    { date: 'February 3rd-4th', event: 'BAS Tournament', location: 'East Bay' },
    { date: 'March 1st-2nd', event: 'OGP Tournament', location: 'Oakland, CA' },
    { date: 'March 15th-16th', event: 'Adidas West Regionals', location: 'Anaheim, CA' },
    { date: 'March 29th', event: 'BAS 9th Grade Tournament', location: 'East Bay' },
    { date: 'April 4th-6th', event: 'Grassroots Championships', location: 'Anaheim, CA' },
    { date: 'April 12th', event: 'BAS 9th Grade Tournament', location: 'Community Hoops, East Bay' },
    { date: 'April 26th-27th', event: 'Grassroots National Showdown', location: 'Duncanville, TX' },
    { date: 'May 4th', event: '9th Grade Tournament', location: 'East Bay' },
    { date: 'May 18th', event: '9th Grade Tournament', location: 'East Bay' },
    { date: 'May 24th-26th', event: 'Jam On It Memorial Day Tournament', location: 'Reno, NV' },
    { date: 'June 7th-8th', event: '9th Grade Tournament', location: 'East Bay' },
    { date: 'June 21st-22nd', event: '9th Grade Tournament', location: 'East Bay' },
    { date: 'June 28th', event: '9th Grade Tournament', location: 'East Bay' },
    { date: 'July 12th-15th', event: 'Adidas Tournament', location: 'Rock Hill, SC' },
    { date: 'July 22nd-27th', event: 'BigFoot National Tournament', location: 'Las Vegas, NV' },
  ];

  // Assuming the next match is the first one in the array for simplicity
  const nextMatch = tournaments[0];

  // Calendar event data
  const eventDetails = {
    title: nextMatch.event,
    location: nextMatch.location,
    description: `${nextMatch.event} happening in ${nextMatch.location}. Come and support the Berkeley Red Devils!`,
    startDate: '2024-10-05', // Adjust to match real tournament start date
    endDate: '2024-10-06',
  };

  return (
    <div id="schedule" className="schedule-container py-5">
      <div className="container">
        <h2 className="section-title text-center">Berkeley Red Devils Basketball</h2>
        <h3 className="section-subtitle text-center">Elite & Gold Teams Tentative Tournament Schedule (2024/2025 Season)</h3>

        {/* Cool Next Match Section */}
        <div className="next-match my-4 p-4 text-light text-center rounded" style={{ backgroundImage: `url('/images/basketball-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div className="overlay" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h4 className="mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Next Match</h4>
            <p className="lead mb-1"><strong>{nextMatch.date}</strong></p>
            <p>{nextMatch.event}</p>
            <p>{nextMatch.location}</p>

            {/* Add to Calendar Button */}
            <div className="mt-3">
              <a
                href={`https://www.addevent.com/dir/?client=atc_widget&start=${eventDetails.startDate}&end=${eventDetails.endDate}&title=${encodeURIComponent(eventDetails.title)}&description=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Tournament Schedule */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-group">
              {tournaments.map((tournament, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{tournament.date} - {tournament.event}</span>
                  <span>{tournament.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
