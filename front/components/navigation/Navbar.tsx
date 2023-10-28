'use client'

import { Autocomplete, Group, Burger, rem, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './navbar.module.css';
import endpoints from '@/connections/endpoints';
import { useRouter } from "next/navigation";

const links = [
  { link: "/", label: 'Inicio' },
  { link: endpoints.about, label: 'Acerca de' },
  { link: endpoints.bestCattleya, label: 'Mejor Cattleya Trianae' },
  { link: endpoints.cattleyaHall, label: 'Salón Cattleya Trianae' },
  { link: endpoints.news, label: 'Noticias' },
  { link: "events", label: 'Eventos' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));
  
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Button onClick={() => router.push("/")} variant="transparent">Atorquideas</Button>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}
