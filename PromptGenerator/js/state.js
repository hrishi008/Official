window.SPG = window.SPG || {};

SPG.state = {
  activeTab: 'simple',
  selectedComponents: [],
  customComponents: [],
  toggles: {},
  guardrails: {},
  sectionNotes: {},
  simple: {
    scope: 'New component',
    deploy: 'Yes',
    deliverable: 'Code only'
  },

  init() {
    SPG.data.toggles.forEach(t => { this.toggles[t.id] = false; });
    SPG.data.guardrails.forEach(g => { this.guardrails[g.id] = false; });
    SPG.data.sections.forEach(s => { this.sectionNotes[s.id] = ''; });
  },

  getAllComponents() {
    const defaults = SPG.data.components;
    const custom = this.customComponents.filter(c => !defaults.includes(c));
    return [...defaults, ...custom];
  },

  addComponent(name) {
    const trimmed = name.trim();
    if (!trimmed) return false;
    if (this.selectedComponents.includes(trimmed)) return false;
    this.selectedComponents.push(trimmed);
    if (!SPG.data.components.includes(trimmed) && !this.customComponents.includes(trimmed)) {
      this.customComponents.push(trimmed);
    }
    return true;
  },

  removeComponent(name) {
    this.selectedComponents = this.selectedComponents.filter(c => c !== name);
  },

  setToggle(id, value) {
    this.toggles[id] = value;
  },

  setGuardrail(id, value) {
    this.guardrails[id] = value;
  },

  setSectionNote(id, value) {
    this.sectionNotes[id] = value;
  },

  reset() {
    this.selectedComponents = [];
    this.customComponents = [];
    Object.keys(this.toggles).forEach(k => { this.toggles[k] = false; });
    Object.keys(this.guardrails).forEach(k => { this.guardrails[k] = false; });
    Object.keys(this.sectionNotes).forEach(k => { this.sectionNotes[k] = ''; });
    this.simple = { scope: 'New component', deploy: 'Yes', deliverable: 'Code only' };
  }
};

SPG.state.init();
