document.querySelectorAll('.slot').forEach(slot => {
  slot.addEventListener('click', () => {
    const slotType = slot.dataset.slot;

    // Ring pode ter múltiplos slots, normalizamos
    const slotChave = slotType.includes('ring') ? 'ring' :
                      slotType.includes('bag') ? 'back' : slotType;

    const banco = window.itemsDatabase?.[slotChave];
    if (!banco) {
      alert("Nenhum item disponível para esse slot.");
      return;
    }

    const menu = document.createElement('div');
    menu.className = 'item-menu';

    for (const key in banco) {
      const item = banco[key];
      const nome = item.name || key;
      const emoji = getEmojiForSlot(slotChave);
      const botao = document.createElement('button');
      botao.textContent = `${emoji} ${nome}`;
      botao.onclick = () => {
        slot.textContent = `${emoji} ${nome}`;
        slot.classList.add('filled');
        document.body.removeChild(menu);
      };
      menu.appendChild(botao);
    }

    const cancelar = document.createElement('button');
    cancelar.textContent = "Cancelar";
    cancelar.onclick = () => document.body.removeChild(menu);
    menu.appendChild(cancelar);

    document.body.appendChild(menu);
  });
});

function getEmojiForSlot(slot) {
  const emotes = {
    head: "🎭", chest: "🛡️", boots: "🥾", ring: "💍",
    back: "🎒", weapon: "⚔️", offhand: "🛡️", lamp: "🪔"
  };
  return emotes[slot] || "🎲";
}
