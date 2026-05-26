window.SPG = window.SPG || {};

SPG.toggleGroup = {
  render(containerId, items, stateKey) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = stateKey === 'guardrails' ? 'guardrail-grid' : 'toggle-grid';

    items.forEach(item => {
      const isGuardrail = stateKey === 'guardrails';
      const wrapper = document.createElement('label');
      wrapper.className = isGuardrail ? 'guardrail-chip' : 'toggle-item';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = `${containerId}-${item.id}`;
      input.dataset.toggleId = item.id;
      input.checked = SPG.state[stateKey][item.id] || false;

      input.addEventListener('change', () => {
        if (stateKey === 'guardrails') {
          SPG.state.setGuardrail(item.id, input.checked);
        } else {
          SPG.state.setToggle(item.id, input.checked);
        }
        this.syncAll(stateKey, items);
      });

      if (isGuardrail) {
        const text = document.createElement('span');
        text.className = 'guardrail-chip__text';
        text.textContent = item.label;
        wrapper.appendChild(input);
        wrapper.appendChild(text);
      } else {
        const track = document.createElement('span');
        track.className = 'toggle-item__track';
        const label = document.createElement('span');
        label.className = 'toggle-item__label';
        label.textContent = item.label;
        wrapper.appendChild(input);
        wrapper.appendChild(track);
        wrapper.appendChild(label);
      }

      grid.appendChild(wrapper);
    });

    container.appendChild(grid);
  },

  syncAll(stateKey, items) {
    document.querySelectorAll(`input[data-toggle-id]`).forEach(input => {
      const id = input.dataset.toggleId;
      if (items.some(i => i.id === id)) {
        input.checked = SPG.state[stateKey][id] || false;
      }
    });
  },

  reset(containerIds, items, stateKey) {
    containerIds.forEach(containerId => {
      items.forEach(item => {
        const input = document.getElementById(`${containerId}-${item.id}`);
        if (input) input.checked = false;
      });
    });
  }
};
