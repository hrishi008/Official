window.SPG = window.SPG || {};

SPG.app = {
  modal: null,
  preview: null,
  toast: null,

  init() {
    this.modal = document.getElementById('resultModal');
    this.preview = document.getElementById('promptPreview');
    this.toast = document.getElementById('toast');

    this.initTabs();
    this.initSimpleOptions();
    SPG.pillSelector.mount('pillSelector');
    SPG.toggleGroup.render('workflowToggles', SPG.data.toggles, 'toggles');
    SPG.toggleGroup.render('guardrailsGrid', SPG.data.guardrails, 'guardrails');
    SPG.accordion.mount('complexSections');
    this.initActions();
    this.initModal();
  },

  initTabs() {
    document.querySelectorAll('.tab-nav__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        SPG.state.activeTab = tab;
        document.querySelectorAll('.tab-nav__btn').forEach(b => {
          b.classList.toggle('active', b.dataset.tab === tab);
        });
        document.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.toggle('active', panel.id === `tab-${tab}`);
        });
      });
    });
  },

  initSimpleOptions() {
    const renderRadios = (containerId, name, options, defaultVal) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = '';
      options.forEach((opt, i) => {
        const id = `${name}-${i}`;
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.id = id;
        input.value = opt;
        if (opt === defaultVal) input.checked = true;
        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = opt;
        container.appendChild(input);
        container.appendChild(label);
      });
    };

    renderRadios('simpleScopeGroup', 'simpleScope', SPG.data.simpleOptions.scope, 'New component');
    renderRadios('simpleDeployGroup', 'simpleDeploy', SPG.data.simpleOptions.deploy, 'Yes');
    renderRadios('simpleDeliverableGroup', 'simpleDeliverable', SPG.data.simpleOptions.deliverable, 'Code only');
  },

  initActions() {
    document.getElementById('generateBtn')?.addEventListener('click', () => this.generate());
    document.getElementById('restartBtn')?.addEventListener('click', () => this.restart());
  },

  initModal() {
    const close = () => this.modal?.classList.remove('open');
    document.getElementById('modalClose')?.addEventListener('click', close);
    document.getElementById('modalCloseBtn')?.addEventListener('click', close);
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) close();
    });
    document.getElementById('copyBtn')?.addEventListener('click', () => {
      const text = this.preview?.value || '';
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Copied to clipboard');
      }).catch(() => {
        this.preview?.select();
        document.execCommand('copy');
        this.showToast('Copied to clipboard');
      });
    });

    this.preview?.addEventListener('input', () => {
      this.updateChatGptLink(this.preview.value);
    });
  },

  updateChatGptLink(promptText) {
    const link = document.getElementById('chatGptLink');
    if (!link) return;
    const base = link.dataset.base || link.href.split('?')[0];
    link.href = `${base}?q=${encodeURIComponent(promptText)}`;
  },

  generate() {
    const mode = SPG.state.activeTab;
    const contextId = mode === 'complex' ? 'complexContext' : 'simpleContext';
    const context = document.getElementById(contextId)?.value.trim();

    if (!context) {
      this.showToast('Please enter a task description', true);
      document.getElementById(contextId)?.focus();
      return;
    }

    const prompt = SPG.promptBuilder.build(mode);
    if (!prompt) return;

    if (this.preview) this.preview.value = prompt;
    this.updateChatGptLink(prompt);
    this.modal?.classList.add('open');
    this.preview?.focus();
  },

  restart() {
    SPG.state.reset();

    ['simpleContext', 'simpleExtra', 'complexContext', 'complexExtra'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    SPG.pillSelector.clearSearch();
    SPG.pillSelector.render();
    SPG.toggleGroup.reset(['workflowToggles'], SPG.data.toggles, 'toggles');
    SPG.toggleGroup.reset(['guardrailsGrid'], SPG.data.guardrails, 'guardrails');
    SPG.accordion.reset();
    this.initSimpleOptions();
    this.showToast('Form reset');
  },

  showToast(message, isError) {
    if (!this.toast) return;
    this.toast.textContent = message;
    this.toast.style.background = isError ? 'var(--sf-error)' : 'var(--sf-success)';
    this.toast.classList.add('show');
    setTimeout(() => this.toast.classList.remove('show'), 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => SPG.app.init());
