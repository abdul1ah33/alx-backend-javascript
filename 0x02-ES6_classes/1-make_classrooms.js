import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = [];

  for (let i = 0; i < sizes.length; i = i + 1) {
    rooms.push(new ClassRoom(sizes[i]));
  }

  return rooms;
}
