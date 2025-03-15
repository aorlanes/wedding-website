export const validNames = [
  { firstName: 'Anjela', lastName: 'Orlanes', id: 'some-unique-id-1' },
  { firstName: 'Enrique', lastName: 'Vera', id: 'some-unique-id-2' },
  { firstName: 'Test1', lastName: 'Test1', id: 'some-unique-id-3' },
  { firstName: 'Test2', lastName: 'Test2', id: 'some-unique-id-4' },
];

export const guestEntities: GuestEntity[] = [
  {
    id: 'some-unique-id-1',
    firstName: 'Anjela',
    lastName: 'Orlanes',
    email: null,
    events: [
      {
        event: 'engagement',
        rsvp: null,
      },
      {
        event: 'wedding',
        rsvp: null,
      },
    ],
    guests: [],
  },
  {
    id: 'some-unique-id-2',
    firstName: 'Enrique',
    lastName: 'Vera',
    email: 'test@test.com',
    events: [
      {
        event: 'engagement',
        rsvp: 'accept',
      },
      {
        event: 'wedding',
        rsvp: 'accept',
      },
    ],
    guests: [
      {
        firstName: 'Anjela',
        lastName: 'Orlanes',
        id: 'some-unique-id-1',
        events: [
          {
            event: 'engagement',
            rsvp: 'accept',
          },
          {
            event: 'wedding',
            rsvp: 'accept',
          },
        ],
      },
      {
        firstName: 'Test1',
        lastName: 'Test1',
        id: 'some-unique-id-3',
        events: [
          {
            event: 'engagement',
            rsvp: null,
          },
          {
            event: 'wedding',
            rsvp: 'accept',
          },
        ],
      },
      {
        firstName: 'Test2',
        lastName: 'Test2',
        id: 'some-unique-id-4',
        events: [
          {
            event: 'engagement',
            rsvp: 'decline',
          },
          {
            event: 'wedding',
            rsvp: null,
          },
        ],
      },
    ],
  },
  {
    id: 'some-unique-id-3',
    firstName: 'Test1',
    lastName: 'Test1',
    email: 'test@test.com',
    events: [
      {
        event: 'engagement',
        rsvp: 'decline',
      },
      {
        event: 'wedding',
        rsvp: null,
      },
    ],
    guests: [],
  },
  {
    firstName: 'Test2',
    lastName: 'Test2',
    email: 'test@test.com',
    id: 'some-unique-id-4',
    events: [
      {
        event: 'engagement',
        rsvp: null,
      },
    ],
    guests: [
      {
        firstName: 'Anjela',
        lastName: 'Orlanes',
        id: 'some-unique-id-1',
        events: [
          {
            event: 'engagement',
            rsvp: null,
          },
        ],
      },
    ],
  },
];
