// CoachesSection.jsx
import React from "react";

const coaches = [
  {
    name: "Antonio Scott - President",
    image: "/images/coachscott.png", // Replace with actual image path
    bio: `Antonio Scott brings deep expertise in sports management and player development, 
          with experience across the collegiate, international, and NBA levels. As President, 
          he leads Red Devils AAU basketball operations and athlete representation efforts. Antonio has 
          worked alongside NBA coaches and represented top-tier talent, including NBA and NFL athletes, 
          through his roles in elite scouting and sports marketing.`,
  },
  {
    name: "Coach Scooter Williams - Coach and Skills Trainer",
    image: "/images/coachscooter.png", // Replace with actual image path
    bio: `Coach Scooter Williams is the founder of Scoot Work™ and a respected player development coach 
          known for his intense, purpose driven training style. With over a decade of experience coaching 
          youth and high school athletes, he builds confident, disciplined players through a mindset-first 
          approach that emphasizes work ethic, toughness, and accountability.`,
  },
  {
    name: "Aaron Harmon - Coach and Skills Trainer",
    image: "/images/coachaaron.png", // Replace with actual image path
    bio: `Aaron Harmon brings nearly 20 years of coaching and training experience, with a lifelong passion 
          for developing young athletes. A former standout at Prospect High School in San Jose, he led his 
          team to a league championship, earned Co-MVP honors, and was a First Team All-League selection. 
          He has coached at every high school level, including Freshman Head Coach at Sacred Heart Cathedral 
          (San Francisco), JV Head Coach & Varsity Assistant at Ann Sobrato High School (Morgan Hill), and 
          Varsity Head Coach at San Jose High School. Aaron’s coaching philosophy emphasizes fundamentals, 
          leadership, accountability, and a positive mindset—valuing relationships and life skills as much 
          as on-court success.`,
  },
  {
    name: "Mahlik Smith",
    image: "https://placehold.co/1000x743?text=Coach+Mahlik", // Replace with actual image path
    bio: `Mahlik Smith is a dedicated head coach with expertise in player development, 
          practice facilitation, tournament hosting, recruitment, and team leadership. 
          Since 2024, he has led the Berkeley Red Devils to multiple championships and designed 
          practices that strengthen skills, teamwork, and leadership. He also serves as Head Coach 
          at Longfellow Middle School, guiding his team to high-level wins and preparing players for 
          the next level. Mahlik mentors athletes on and off the court, fostering growth and resilience.`,
  },
];


const CoachesSection = () => {
  return (
    <section
      id="coaches"
      className="py-5"
      style={{ backgroundColor: "#b30000", color: "#fff" }}
    >
      <div className="container">
        <h2 className="section-title text-center mb-4">Meet Our Coaches</h2>
        {coaches.map((coach, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={coach.image}
                alt={coach.name}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Text */}
            <div className="col-md-6">
              <h3 className="mb-3">{coach.name}</h3>
              <p>{coach.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachesSection;
