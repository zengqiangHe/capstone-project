import './App.css';
import EventCard from './components/eventCard/EventCard';
import Header from './components/header/Header';
import styled from 'styled-components';
import Create from './pages/Create';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePageTabs from './components/homePageTabs/HomePageTabs';
import EditEventPage from './pages/EditEventPage';
import Navbar from './components/navbar/Navbar';

const defaultEventsList = [
  {
    id: '1',
    title: 'Dumplings Party',
    text: 'Wollen wir mal wieder zusammen Dumplings bei mir Zuhause machen?',
    date: '13-06-2022',
    time: '17:30',
    location: 'Harvestehude, Hamburg',
  },
  {
    id: '2',
    title: 'Restaurant Besuch bei Akari',
    text: 'Habt Ihr Bock auf leckeres japanisches Essen?',
    date: '13-06-2022',
    time: '18:30',
    location: 'Papenhuder Str. 67, Hamburg',
  },
  {
    id: '3',
    title: 'After Work Run an der Alster',
    text: 'Am Dienstag haben wir endlich gutes Wetter in Hamburg! Wollen wir nach der Arbeit zusammen Joggen gehen?',
    date: '13-06-2022',
    time: '19:00',
    location: 'An der Alster, Hamburg',
  },
];

function App() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState(defaultEventsList);
  const addNewEvent = event => {
    event.id = Math.random().toString();
    setEventsList([event, ...eventsList]);
    navigate('/');
  };

  const updateEvent = data => {
    const eventToUpdate = eventsList.findIndex(event => event.id === data.id);
    eventsList.splice(eventToUpdate, 1, data);
    setEventsList([...eventsList]);
    navigate(-1);
  };

  function deleteEvent(id) {
    setEventsList(eventsList.filter(event => event.id !== id));
  }
  return (
    <Wrapper role="list">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              <HomePageTabs />
              {eventsList.map(eventDetail => (
                <EventCard
                  key={eventDetail.id}
                  id={eventDetail.id}
                  title={eventDetail.title}
                  text={eventDetail.text}
                  date={eventDetail.date}
                  time={eventDetail.time}
                  location={eventDetail.location}
                  showEditButton={false}
                />
              ))}
            </ul>
          }
        />
        <Route path="create" element={<Create addNewEvent={addNewEvent} />} />

        <Route
          path="erstellte-events"
          element={
            <ul>
              <HomePageTabs />
              {eventsList.map(event => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  text={event.text}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  showEditButton={true}
                  deleteEvent={deleteEvent}
                />
              ))}
            </ul>
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
