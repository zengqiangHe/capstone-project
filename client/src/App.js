import './App.css';
import EventCard from './components/eventCard/EventCard';
import Header from './components/header/Header';
import styled from 'styled-components';
import Create from './pages/Create';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePageTabs from './components/homePageTabs/HomePageTabs';
import EditEventPage from './pages/EditEventPage';
import Navbar from './components/navbar/Navbar';
import Voting from './pages/Voting';
import NamePrompt from './pages/NamePrompt';
import VoteSuccess from './pages/VoteSuccess';
import InvitationLink from './pages/InvitationLink';

const URL = process.env.REACT_APP_URL;

function App() {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState([]);
  const [currentEventId, setCurrentEventId] = useState(-1);
  const [name, setName] = useState(localStorage.getItem('name'));
  const [isEventListInitialized, setIsEventListInitialized] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  const addName = (name) => {
    localStorage.setItem('name', name);
    setName(name);
  };

  const addNewEvent = (event) => {
    event.id = Math.random().toString();
    const voteURL = `${URL}/api/vote/${event.id}`;
    setCurrentEventId(event.id);

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
        url: voteURL,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setEventsList([res, ...eventsList]);
        navigate('/invitation_link', { state: { id: res._id } });
      })
      .catch((error) => {
        setError('Konnte kein Event hinzufügen.');
      });
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
        navigate('/vote_success');
      })
      .catch((error) => {
        setError('Konnte nicht abstimmen.');
      });
  };

  const updateEvent = (data, id) => {
    const postURL = `${URL}/api/edit/${id}`;
    fetch(postURL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        text: data.text,
        time: data.time,
        date: data.date,
        location: data.location,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        fetch(`${URL}/api`)
          .then((res) => res.json())
          .then((data) => {
            setEventsList(data);
            navigate('/');
          });
      })
      .catch((error) => {
        setError('Konnte nicht updaten.');
      });
  };

  function deleteEvent(_id) {
    fetch(`${URL}/api/bockwursts/${_id}`, { method: 'DELETE' }).then(() => {
      fetch(`${URL}/api`)
        .then((res) => res.json())
        .then((data) => setEventsList(data));
    });
  }

  const fetchEventDetail = () => {
    fetch(`${URL}/api`)
      .then((res) => res.json())
      .then((data) => {
        setEventsList(data.reverse());
        setIsEventListInitialized(true);
      });
  };
  useEffect(() => {
    if (location.pathname === '/'){
      console.log('Hello!');
      fetchEventDetail();
    }
    
  }, [location]);

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
              <StyleDiv>
                {eventsList.map((eventDetail, index) => (
                  <EventCard key={index} showEditButton={false} eventDetail={eventDetail} />
                ))}
              </StyleDiv>
            </>
          }
        />
        <Route path="create" element={<Create addNewEvent={addNewEvent} />} />

        <Route
          path="erstellte-events"
          element={
            <>
              <HomePageTabs />
              <>
                {eventsList.map((eventDetail, index) => (
                  <EventCard
                    key={index}
                    eventDetail={eventDetail}
                    showEditButton={true}
                    deleteEvent={deleteEvent}
                  />
                ))}
              </>
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
        <Route path="vote_success" element={<VoteSuccess />} />
        <Route path="invitation_link" element={<InvitationLink eventDetail={currentEventId} />} />
      </Routes>
    );
  }

  return (
    <>
      {error && <Error>{error}</Error>}
      <Header title="BockWurst" />
      {content}
      <Navbar />
    </>
  );
}

export default App;

const StyleDiv = styled.div`
  margin-bottom: 100px;
`;
const Error = styled.p`
  background-color: rgb(255, 0, 0, 0.2);
  text-align: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
`;
