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
  const type = document.querySelector('input[name="type"]:checked')?.value || 'Other';
  const scope = document.querySelector('input[name="scope"]:checked')?.value || 'New component';
  const deploy = document.querySelector('input[name="deploy"]:checked')?.value || 'Yes';
  const deliverable = document.querySelector('input[name="deliverable"]:checked')?.value || 'Code only';
  const checked = [...document.querySelectorAll('input[name="rules"]:checked')].map(cb => cb.value);

  if (!context) return null;

  const rules = [];
  if (checked.includes('best-practices')) rules.push("Follow current Salesforce best practices.");
  if (checked.includes('no-break')) rules.push("Do not change or break existing functionality — only add or fix what was requested.");
  if (checked.includes('bulkified')) rules.push("Make the solution bulkified and governor-limit safe.");
  if (checked.includes('anti-patterns')) rules.push("Mention common anti-patterns or mistakes to avoid.");

  const rulesBlock = rules.length
    ? " " + rules.join(" ") + "."
    : "";

  const outputFormat = " Please respond in structured paragraphs only (no bullet or numbered lists), and be concise.";

  // This is the prompt only — user pastes it into Cursor; Cursor then gives the solution.
  let prompt = `I need help with: ${context} This is ${type}. Scope: ${scope}. I plan to deploy: ${deploy}. I need: ${deliverable}.${rulesBlock}${extra ? " " + extra : ""}${outputFormat}`;

  return prompt.trim();
}

generateBtn.addEventListener('click', () => {
  const promptText = buildPrompt();
  if (!promptText) {
    alert("Please enter what you need (task description).");
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
