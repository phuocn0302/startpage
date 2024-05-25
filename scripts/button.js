const generateButton = () => {
  for(button of CONFIG.buttonContainer) {
    let item = `
    <a href="${button.link}" class="card button button__${button.id}">
      <i class="buttonIcon" data-lucide="${button.icon}"></i>
    </a>
    `;

    buttons.insertAdjacentHTML("beforeend", item);
  };
};

generateButton();