import './App.css';
import EventCard from './components/eventCard/EventCard';
import Header from './components/header/Header';
import styled from 'styled-components';
import Create from './pages/Create';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePageTabs from './components/homePageTabs/HomePageTabs';
import EditEventPage from './pages/EditEventPage';
import Navbar from './components/navbar/Navbar';

function App() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState([]);
  const addNewEvent = (event) => {
    event.id = Math.random().toString();
    setEventsList([event, ...eventsList]);
    navigate('/');
  };

  const updateEvent = (data) => {
    const eventToUpdate = eventsList.findIndex((event) => event._id === data._id);
    const newEventsList = [...eventsList];
    newEventsList[eventToUpdate] = data;
    setEventsList(newEventsList);
    navigate(-1);
  };

  function deleteEvent(id) {
    setEventsList(eventsList.filter((event) => event._id !== id));
  }

  const fetchEventDetail = () => {
    fetch('https://bockwurst-app.herokuapp.com/api')
      .then((res) => res.json())
      .then((data) => setEventsList(data));
  };
  useEffect(() => {
    fetchEventDetail();
  }, []);

  return (
    <Wrapper role="list">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePageTabs />
              <ul>
                {eventsList.map((eventDetail, index) => (
                  <EventCard key={index} showEditButton={false} eventDetail={eventDetail} />
                ))}
              </ul>
            </>
          }
        />
        <Route path="create" element={<Create addNewEvent={addNewEvent} />} />

        <Route
          path="erstellte-events"
          element={
            <>
              <HomePageTabs />
              <ul>
                {eventsList.map((eventDetail, index) => (
                  <EventCard
                    key={index}
                    eventDetail={eventDetail}
                    showEditButton={true}
                    deleteEvent={deleteEvent}
                  />
                ))}
              </ul>
            </>
          }
        />
        <Route
          path="edit/:id"
          element={<EditEventPage events={eventsList} updateEvent={updateEvent} />}
        />
      </Routes>
      <Navbar />
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding: 5%;
`;
export default App;
