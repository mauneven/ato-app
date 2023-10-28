
'use client'
import React, { useState, useEffect } from 'react';
import keys from '../../connections/keys';
import endpoints from '../../connections/endpoints';
import { Group, Text } from '@mantine/core';
import environment from '@/connections/environments';

interface ImageFormat {
    name: string;
    url: string;
    width: number;
    height: number;
  }
  
  interface ImageData {
    id: number;
    attributes: {
      name: string;
      formats: {
        thumbnail: ImageFormat;
      };
      url: string;
    };
  }
  
  interface Event {
    id: number;
    attributes: {
      Titulo: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      Descripcion: string;
      Fecha_evento: string;
      Link_evento: string;
      imagen_evento: {
        data: ImageData;
      };
    };
  }  

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]); // Especifica el tipo como Event[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Especifica el tipo como string | null

  useEffect(() => {
    const eventsURL = `${endpoints.events}`;
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${keys.EVENT_KEY}`
      }
    };
  
    fetch(eventsURL, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data.data as Event[]);
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
      {events.map((event) => (
        <div key={event.id}>
          <Text fw={500} fz="lg">
            {event.attributes.Titulo}
            {event.attributes.Fecha_evento}
          </Text>
          <img 
            src={`${environment.base_connection}${event.attributes.imagen_evento.data.attributes.url}`} 
            alt={event.attributes.imagen_evento.data.attributes.name}
          />
        </div>
      ))}
    </Group>
  );  
}

export default Events;