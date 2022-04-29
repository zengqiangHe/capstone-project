import styled from 'styled-components';

const EventCard = ({ title, text, date_time, location }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{date_time}</p>
      <p>{location}</p>
    </Wrapper>
  );
};
const Wrapper = styled.li`
  display: flex;
  flex-direction:column;
  justify-content:center;
  height:15rem;
  gap:1rem;
  background-color: black;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154,160,185,0.05);
  padding: 1.5rem;
  margin: 0.2rem 0;
  &:hover {
    background-color: blue;
  }
`;
export default EventCard;
