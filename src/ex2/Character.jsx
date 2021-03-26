/* eslint-disable */

const Character = ({ name, age, job, picture, isInPrison }) => (
<div>
  <h1>{name}</h1>
  <h2>{job}</h2>
  <p>{age}</p>
  <p>{isInPrison ? 'Is in prison' : 'Is not in prison'}</p>
</div>
);

export default Character;
