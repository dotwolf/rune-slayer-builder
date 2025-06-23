const items = document.querySelectorAll('.item');
const slots = document.querySelectorAll('.slot');

items.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.dataset.item);
    e.dataTransfer.setData('text/id', item.innerHTML);
  });
});

slots.forEach(slot => {
  slot.addEventListener('dragover', e => e.preventDefault());

  slot.addEventListener('drop', e => {
    e.preventDefault();
    const itemName = e.dataTransfer.getData('text/plain');
    const itemLabel = e.dataTransfer.getData('text/id');
    slot.textContent = itemLabel;
    slot.classList.add('filled');
  });
});