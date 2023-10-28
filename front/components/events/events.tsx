import React, { useState, useEffect } from 'react';
import keys from '../../connections/keys';
import endpoints from '../../connections/endpoints';
import { Group, Text } from '@mantine/core';

interface events {
    
}

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventsURL = `${endpoints.events}?token=${keys.EVENT_KEY}`;

    fetch(eventsURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando eventos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {events.title}
        </Text>
    </Group>
  );
}

export default Events;
