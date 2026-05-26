window.SPG = window.SPG || {};

SPG.accordion = {
  mount(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    SPG.data.sections.forEach((section, index) => {
      const item = document.createElement('div');
      item.className = 'accordion__item' + (index === 0 ? ' open' : '');

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'accordion__trigger';
      trigger.innerHTML = `${this.escapeHtml(section.label)}<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>`;

      const panel = document.createElement('div');
      panel.className = 'accordion__panel';

      const textarea = document.createElement('textarea');
      textarea.id = `section-${section.id}`;
      textarea.placeholder = section.placeholder;
      textarea.value = SPG.state.sectionNotes[section.id] || '';
      textarea.addEventListener('input', () => {
        SPG.state.setSectionNote(section.id, textarea.value);
      });

      panel.appendChild(textarea);
      item.appendChild(trigger);
      item.appendChild(panel);

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        container.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });

      accordion.appendChild(item);
    });

    container.appendChild(accordion);
  },

  reset() {
    SPG.data.sections.forEach(section => {
      const textarea = document.getElementById(`section-${section.id}`);
      if (textarea) textarea.value = '';
    });
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
