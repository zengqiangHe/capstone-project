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
import Voting from './pages/Voting';
import NamePrompt from './pages/NamePrompt';

const URL = process.env.REACT_APP_URL;

function App() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState([]);

  const [name, setName] = useState(localStorage.getItem('name'));
  const [isEventListInitialized, setIsEventListInitialized] = useState(false);
  const addName = (name) => {
    localStorage.setItem('name', name);
    setName(name);
  };
  const addNewEvent = (event) => {
    event.id = Math.random().toString();

    const postURL = `${URL}/api`;
    fetch(postURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: event.title,
        text: event.text,
        time: event.time,
        date: event.date,
        location: event.location,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setEventsList([res, ...eventsList]);
        navigate('/');
      })
      .catch((error) => {});
  };

  const setVotingConfirmation = (_id, confirm) => {
    const postURL = `${URL}/api/vote/${_id}`;
    fetch(postURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isConfirmed: confirm,
        userName: name,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        navigate('/');
      })
      .catch((error) => {});
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
    fetch(`${URL}/api`)
      .then((res) => res.json())
      .then((data) => {
        setEventsList(data);
        setIsEventListInitialized(true);
      });
  };
  useEffect(() => {
    fetchEventDetail();
  }, []);

  if (!isEventListInitialized) {
    return <p>Loading</p>;
  }

  let content;

  if (name === null) {
    content = <NamePrompt addName={addName} />;
  } else {
    content = (
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
        <Route
          path="voting/:_id"
          element={<Voting events={eventsList} setVotingConfirmation={setVotingConfirmation} />}
        />
      </Routes>
    );
  }

  return (
    <Wrapper role="list">
      <Header />
      {content}
      <Navbar />
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding: 5%;
`;
export default App;
