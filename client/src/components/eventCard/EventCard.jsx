import styled from 'styled-components';
import { Link } from 'react-router-dom';
import edit_icon from "../../assets/edit_icon.png";
import delete_icon from "../../assets/delete_icon.png";


const EventCard = ({ title, text, date, time, location, showEditButton, id, deleteEvent }) => {
  return (
    <Wrapper>
      
      {showEditButton && <Link to={`/edit/${id}`}><button type="button"><img src={edit_icon} alt="edit icon" width="30" /></button></Link>}
      {showEditButton && <button type="button" onClick={()=>{deleteEvent(id)}}><img src={delete_icon} alt="delete icon" width="30" /></button>}
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{location}</p>

    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25rem;
  gap: 1rem;
  background-color: black;
  border-radius: 20px;
  padding: 17px;
  margin:1rem;
  &:hover {
    background-color: blue;
  }
`;

export default EventCard;
