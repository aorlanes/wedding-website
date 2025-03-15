interface GuestEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  events: {
    event: 'engagement' | 'wedding';
    rsvp: string | null;
  }[];
  guests: {
    firstName: string;
    lastName: string;
    id: string;
    events: {
      event: 'engagement' | 'wedding';
      rsvp: string | null;
    }[];
  }[];
}
