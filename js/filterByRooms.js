function filterByRooms(rooms) {
  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('.card-title').textContent;

    const isRoomMatch = title.includes(`${rooms}-кімнатна`) ||
                        title.includes(`${rooms} кімнатна`) ||
                        title.includes(`${rooms} кімнати`);

    card.parentElement.style.display = isRoomMatch ? 'block' : 'none';
  });
}