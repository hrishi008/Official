window.SPG = window.SPG || {};

SPG.promptBuilder = {
  build(mode) {
    if (mode === 'complex') return this.buildComplex();
    return this.buildSimple();
  },

  buildSimple() {
    const context = document.getElementById('simpleContext')?.value.trim();
    if (!context) return null;

    const extra = document.getElementById('simpleExtra')?.value.trim() || '';
    const scope = document.querySelector('input[name="simpleScope"]:checked')?.value || SPG.state.simple.scope;
    const deploy = document.querySelector('input[name="simpleDeploy"]:checked')?.value || SPG.state.simple.deploy;
    const deliverable = document.querySelector('input[name="simpleDeliverable"]:checked')?.value || SPG.state.simple.deliverable;

    const sections = [];

    sections.push('## Task');
    sections.push(context);

    if (SPG.state.selectedComponents.length) {
      sections.push('');
      sections.push('## Salesforce Components Involved');
      sections.push(SPG.state.selectedComponents.join(', '));
    }

    sections.push('');
    sections.push('## Scope & Deliverables');
    sections.push(`Scope: ${scope}. Planning to deploy: ${deploy}. Deliverable: ${deliverable}.`);

    const toggleLines = this.getActivePrompts(SPG.data.toggles, SPG.state.toggles);
    if (toggleLines.length) {
      sections.push('');
      sections.push('## Requirements');
      toggleLines.forEach(line => sections.push(`- ${line}`));
    }

    if (extra) {
      sections.push('');
      sections.push('## Additional Instructions');
      sections.push(extra);
    }

    sections.push('');
    sections.push(this.cursorInstructions('simple'));

    return sections.join('\n').trim();
  },

  buildComplex() {
    const context = document.getElementById('complexContext')?.value.trim();
    if (!context) return null;

    const extra = document.getElementById('complexExtra')?.value.trim() || '';
    const sections = [];

    sections.push('## Task');
    sections.push(context);

    if (SPG.state.selectedComponents.length) {
      sections.push('');
      sections.push('## Salesforce Components Involved');
      sections.push(SPG.state.selectedComponents.join(', '));
    }

    const guardrailLines = this.getActivePrompts(SPG.data.guardrails, SPG.state.guardrails);
    if (guardrailLines.length) {
      sections.push('');
      sections.push('## Guardrails');
      guardrailLines.forEach(line => sections.push(`- ${line}`));
    }

    const toggleLines = this.getActivePrompts(SPG.data.toggles, SPG.state.toggles);
    if (toggleLines.length) {
      sections.push('');
      sections.push('## Workflow & Delivery Requirements');
      toggleLines.forEach(line => sections.push(`- ${line}`));
    }

    const filledSections = SPG.data.sections.filter(s => SPG.state.sectionNotes[s.id]?.trim());
    if (filledSections.length) {
      sections.push('');
      sections.push('## Architecture & Implementation Details');
      filledSections.forEach(s => {
        sections.push('');
        sections.push(`### ${s.label}`);
        sections.push(SPG.state.sectionNotes[s.id].trim());
      });
    }

    if (extra) {
      sections.push('');
      sections.push('## Additional Instructions');
      sections.push(extra);
    }

    sections.push('');
    sections.push(this.cursorInstructions('complex'));

    return sections.join('\n').trim();
  },

  getActivePrompts(items, stateMap) {
    return items
      .filter(item => stateMap[item.id])
      .map(item => item.prompt);
  },

  cursorInstructions(mode) {
    const lines = [
      '## Cursor Instructions',
      'You are assisting a Salesforce developer working in Cursor IDE. This prompt is for Salesforce ecosystem development only.',
      '',
      'Generate a detailed development prompt (not the solution itself) that I can paste into Cursor Agent to implement this requirement.',
      '',
      'The generated prompt must:',
      '- Be optimized for Cursor AI agent workflows in a Salesforce DX project',
      '- Reference specific Salesforce metadata types, patterns, and platform constraints',
      '- Include clear acceptance criteria and engineering expectations',
      '- Use structured paragraphs (avoid bullet lists in the final Cursor prompt unless essential)',
      '- Be concise but complete enough for enterprise Salesforce delivery'
    ];

    if (mode === 'complex') {
      lines.push('- Enforce all guardrails and architecture sections listed above');
      lines.push('- Address deployment, testing, security, and scalability as specified');
    } else {
      lines.push('- Focus on practical, fast delivery for standard Salesforce development work');
    }

    lines.push('');
    lines.push('Do not provide the solution code now — provide only the refined prompt for Cursor.');

    return lines.join('\n');
  }
};
