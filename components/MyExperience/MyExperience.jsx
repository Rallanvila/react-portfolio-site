import React from 'react';
import Image from 'next/image';
import experience from '../../data/jobs';
import styled from 'styled-components';

const MyExperienceTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const Job = styled.article`
  margin: 1rem auto 2rem;
`;
const Container = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 2rem;
`;
const JobDescription = styled.div`
  max-width: 72rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const JobDescriptionWhatWeDo = styled.section`
  margin-right: 2rem;
  flex: 1;
`;
const JobDescriptionWhatIDo = styled.section`
  margin-right: 2rem;
  flex: 2;
`;
const JobDescriptionColumnTitle = styled.h2`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export default function MyExperience() {
  return (
    <Container
      id='experience'
      // data-aos='fade-right' //Todo: figure out if I can use this here
    >
      <MyExperienceTitle>My Experience:</MyExperienceTitle>
      {experience.map((job) => {
        const { image, alt, whatWeDo, whatIDo, whatIDo2, jobName, time } = job;
        return (
          <Job
            // data-aos='fade-left' //Todo: figure out if I can use this here
            key={jobName}>
            <Image src={image} width={247} height={52} alt={alt} />
            <h2 className='mb-2'>{time}</h2>
            <JobDescription>
              <JobDescriptionWhatWeDo>
                <JobDescriptionColumnTitle>
                  What we do:
                </JobDescriptionColumnTitle>
                <p className='mb-8'>{whatWeDo}</p>
              </JobDescriptionWhatWeDo>
              <JobDescriptionWhatIDo>
                <JobDescriptionColumnTitle>
                  What I do:
                </JobDescriptionColumnTitle>
                <p className='mb-5'>{whatIDo}</p>
                <p>{whatIDo2}</p>
              </JobDescriptionWhatIDo>
            </JobDescription>
          </Job>
        );
      })}
    </Container>
  );
}
