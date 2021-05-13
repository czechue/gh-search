export default function getDate(createdAt: Date) {
  const event = new Date(createdAt);
  return event.toISOString().substr(0,10).split('-').join('/')
}
