import React from 'react';
import FeatureItem from './FeatureItem';
import ChallengeItem from './ChallengeItem';

const FeatureColumn = ({ mainTitle, features = [], challenges = [], descriptions = [] }) => {
  return (
    <section className="feature-column">
      <h1 className="main-title">{mainTitle}</h1>
      <div className="feature-list">
        {features.map((feature, index) => (
          <FeatureItem key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
      <div className="challenge-list">
        {challenges.map((challenge, index) => (
          <ChallengeItem key={index} icon={challenge.icon} text={challenge.text} />
        ))}
      </div>
      <div className="description-list">
        {descriptions.map((description, index) => (
          <p key={index} className="description">{description}</p>
        ))}
      </div>
    </section>
  );
};

export default FeatureColumn;
