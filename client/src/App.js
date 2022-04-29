import './App.css';
import EventCard from './components/eventCard/EventCard';
import Header from './components/header/Header';
import styled from 'styled-components';

const eventsList = [
  {
    id: '1',
    title: 'Dumplings Party',
    text: 'Wollen wir mal wieder zusammen Dumplings bei mir Zuhause machen?',
    date_time: '13-06-2022 19 Uhr',
    location: 'Harvestehude, Hamburg',
  },
  {
    id: '2',
    title: 'Restaurant Besuch bei Akari',
    text: 'Habt Ihr Bock auf leckeres japanisches Essen?',
    date_time: '08-07-2022 19 Uhr',
    location: 'Papenhuder Str. 67, Hamburg',
  },
  {
    id: '3',
    title: 'After Work Run an der Alster',
    text: 'Am Dienstag haben wir endlich gutes Wetter in Hamburg! Wollen wir nach der Arbeit zusammen Joggen gehen?',
    date_time: '11-08-2022 18 Uhr',
    location: 'An der Alster, Hamburg',
  },
];

function App() {

  return (
    <div className="App">
      <Header header="BockWurst"/>
      <InitialEventsList role="list">
        {eventsList.map(event => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            text={event.text}
            date_time={event.date_time}
            location={event.location}
          />
        ))}
      </InitialEventsList>
    </div>
  );
}

const InitialEventsList = styled.ul`
    padding:5%;
  `;
export default App;
