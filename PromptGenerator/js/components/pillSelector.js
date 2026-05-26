window.SPG = window.SPG || {};

SPG.pillSelector = {
  instances: [],

  mount(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const instance = {
      container,
      searchInput: container.querySelector('.pill-selector__search'),
      selectedEl: container.querySelector('.pill-selector__selected'),
      availableEl: container.querySelector('.pill-selector__available'),
      addInput: container.querySelector('.pill-selector__add-input')
    };

    instance.searchInput?.addEventListener('input', () => this.render());
    instance.addInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.addCustom(instance);
      }
    });

    container.querySelector('.pill-selector__add-btn')?.addEventListener('click', () => {
      this.addCustom(instance);
    });

    this.instances.push(instance);
    this.render();
  },

  addCustom(instance) {
    const name = instance.addInput?.value.trim();
    if (!name) return;
    if (SPG.state.addComponent(name)) {
      instance.addInput.value = '';
      this.instances.forEach(i => { if (i.searchInput) i.searchInput.value = ''; });
      this.render();
    }
  },

  render() {
    this.instances.forEach(inst => {
      this.renderSelected(inst);
      this.renderAvailable(inst);
    });
  },

  renderSelected(instance) {
    if (!instance.selectedEl) return;
    instance.selectedEl.innerHTML = '';

    SPG.state.selectedComponents.forEach(name => {
      const tag = document.createElement('span');
      tag.className = 'pill-selector__selected-tag';
      tag.innerHTML = `${this.escapeHtml(name)}<button type="button" aria-label="Remove ${this.escapeHtml(name)}">&times;</button>`;
      tag.querySelector('button').addEventListener('click', () => {
        SPG.state.removeComponent(name);
        this.render();
      });
      instance.selectedEl.appendChild(tag);
    });
  },

  renderAvailable(instance) {
    if (!instance.availableEl) return;
    const query = (instance.searchInput?.value || '').toLowerCase().trim();
    const all = SPG.state.getAllComponents();
    const filtered = query ? all.filter(c => c.toLowerCase().includes(query)) : all;

    instance.availableEl.innerHTML = '';

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'pill-selector__empty-search';
      empty.textContent = query
        ? `No matches for "${query}". Add it as a custom component above.`
        : 'All components selected.';
      instance.availableEl.appendChild(empty);
      return;
    }

    filtered.forEach(name => {
      const isSelected = SPG.state.selectedComponents.includes(name);
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'pill-selector__pill' + (isSelected ? ' selected' : '');
      pill.textContent = name;
      pill.addEventListener('click', () => {
        if (!isSelected) {
          SPG.state.addComponent(name);
          this.render();
        }
      });
      instance.availableEl.appendChild(pill);
    });
  },

  clearSearch() {
    this.instances.forEach(i => {
      if (i.searchInput) i.searchInput.value = '';
      if (i.addInput) i.addInput.value = '';
    });
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};
