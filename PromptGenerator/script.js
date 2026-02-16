const form = document.getElementById('promptForm');
const generateBtn = document.getElementById('generateBtn');
const restartBtn = document.getElementById('restartBtn');
const modal = document.getElementById('resultModal');
const closeBtn = document.querySelector('.close');
const copyBtn = document.getElementById('copyBtn');
const closeModalBtn = document.getElementById('closeModal');
const outputEl = document.getElementById('promptOutput');
const spinner = document.getElementById('spinner');
const copyMsg = document.getElementById('copyMessage');

function buildPrompt() {
  const context = document.getElementById('context').value.trim();
  const extra = document.getElementById('extra').value.trim();
  const checked = [...document.querySelectorAll('input[name="rules"]:checked')]
    .map(cb => cb.value);

  if (!context) return null;

  let rules = [];

  if (checked.includes('best-practices')) {
    rules.push("Always follow current Salesforce best practices.");
  }
  if (checked.includes('no-break')) {
    rules.push("DO NOT change or break any existing functionality or business logic — only add/fix exactly what was requested.");
  }
  if (checked.includes('anti-patterns')) {
    rules.push("Clearly state common anti-patterns and mistakes to avoid in this scenario.");
  }
  if (checked.includes('bulkified')) {
    rules.push("Ensure the solution is properly bulkified and respects all governor limits.");
  }
  if (checked.includes('step-by-step')) {
    rules.push("Think step-by-step and explain your reasoning before showing the final code.");
  }

  let prompt = `You are a senior Salesforce architect with 12+ years of experience in Apex, Flows, LWC, triggers, integrations and best practices.

Task: ${context}

Strict rules to follow:
${rules.length ? '- ' + rules.join('\n- ') : '- Use your best professional judgment.'}
\( {extra ? `\nAdditional instructions:\n \){extra}` : ''}

Output only the clean prompt paragraph(s) ready to copy-paste into VS Code AI tools (Continue / Cursor / Cody / etc.). No extra commentary.`;

  return prompt.trim();
}

generateBtn.addEventListener('click', () => {
  const promptText = buildPrompt();
  if (!promptText) {
    alert("Please enter at least some context / task description.");
    return;
  }

  spinner.style.display = 'grid';

  setTimeout(() => {
    spinner.style.display = 'none';
    outputEl.textContent = promptText;
    modal.style.display = 'flex';
  }, 3000);
});

function closeModal() {
  modal.style.display = 'none';
}

closeBtn.onclick = closeModal;
closeModalBtn.onclick = closeModal;

window.onclick = function(e) {
  if (e.target === modal) closeModal();
};

copyBtn.onclick = () => {
  const text = outputEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyMsg.classList.add('show');
    setTimeout(() => copyMsg.classList.remove('show'), 2200);
  }).catch(() => {
    alert("Copy failed – please select and copy manually.");
  });
};

restartBtn.onclick = () => {
  form.reset();
};