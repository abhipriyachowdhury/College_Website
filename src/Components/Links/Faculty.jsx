import React from 'react';
import './Faculty.css';
import membersData from './membersData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Faculty = () => {
  const { members } = membersData;

  return (
    <div className='faculty'>
      <div className="border"></div>
      <h3>Faculty @ <span>AOT</span></h3>
<div className="aboutFaculty">
<span className='quote'>Quality education starts with its <strong>educators</strong></span>
<p>
AOT believes in creating an environment that helps the students to enhance their intellectual, emotional and physical development.

<br />
Prof. (Dr.) Dilip Bhattacharya, renowned Professor of Electronics & Electrical Communication Engineering from IIT Kharagpur and the Director of Academy of Technology, leads a team of 111 qualified and experienced faculty members conforming to AICTE stipulated teacher-student ratio.
</p>
    <ul className='keypointFaculty'>
      <li>81 regular faculty members are having specialization in Industry 4.0 Technologies, e.g., Internet of Things (IOT), 3D Technology, Machine Learning, Data Science, Cloud Computing, Cyber Security, Renewable Energy & Energy Management.</li>
      <li>Average teaching experience of faculty members is 11 years 8 months</li>
      <li> Faculty members of AOT have published 84 papers in various International & National Journals.</li>
      <li>Existing faculty members of AOT have authored 11 books</li>
    </ul>


</div>
 
      <div className="members">
        <div className="seniorFacultyPositions">
          <h2><span>
            Principal
          </span></h2>
          <div className="memberCard">
            {getMembersByPosition('principal').map((member, index) => (
              <div className="principal-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Head of Department
          </span></h2>
          {/* {getMembersByPosition('head of department').map((member, index) => (
            <div className="hods" key={index}>
              {member.name}
            </div>
          ))} */}
          <div className="memberCard">
            {getMembersByPosition('head of department').map((member, index) => (
              <div className="hods-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Dean
          </span></h2>
          {/* {getMembersByPosition('dean').map((member, index) => (
            <div className="dean" key={index}>{member.name}</div>
          ))} */}
                    <div className="memberCard">
            {getMembersByPosition('dean').map((member, index) => (
              <div className="dean-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Professor
          </span></h2>
          {/* {getMembersByPosition('professor').map((member, index) => (
            <div className="professor" key={index}>{member.name}</div>
          ))} */}
                              <div className="memberCard">
            {getMembersByPosition('professor').map((member, index) => (
              <div className="professor-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Associate Professor
          </span></h2>
          {/* {getMembersByPosition('associate professor').map((member, index) => (
            <div className="associateProfessor" key={index}>{member.name}</div>
          ))} */}
                                        <div className="memberCard">
            {getMembersByPosition('associate professor').map((member, index) => (
              <div className="associateProfessor-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Assistant Professor
          </span></h2>
          {/* {getMembersByPosition('assistant professor').map((member, index) => (
            <div className="assistantProfessor" key={index}>{member.name}</div>
          ))} */}
                                                  <div className="memberCard">
                                                  {getMembersByPosition('assistant professor').map((member, index) => (
            <div className="assistantProfessor-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2><span>
            Chairs
          </span></h2>
          {/* {getMembersByPosition('chair').map((member, index) => (
            <div className="chairs" key={index}>{member.name}</div>
          ))} */}
                                                           <div className="memberCard">
                                                  {getMembersByPosition('chair').map((member, index) => (
            <div className="chairs-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="otherFacultyPositions">
          <h2><span>
            Research Faculty
          </span></h2>
          {/* {getMembersByPosition('research faculty').map((member, index) => (
            <div className="researchFaculty" key={index}>{member.name}</div>
          ))} */}
                                                                     <div className="memberCard">
                                                  {getMembersByPosition('research faculty').map((member, index) => (
            <div className="researchFaculty-member member" key={index}>
                <div className="commonDetails">
                  <img src={member.profilePic} alt={`${member.name}'s Profile Pic`} />
                  <span className='memberProfile'>{member.name}</span>
                  <p>{member.degree}</p>
                </div>
                <div className="member-details">
                  <div className="details">
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>

                    {/* Add profile pic and LinkedIn handle here */}

                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  function getMembersByPosition(position) {
    return members.filter(member => member.position.toLowerCase() === position.toLowerCase());
  }
}

export default Faculty;
