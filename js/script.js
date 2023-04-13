{
    const tasks = [
        {
            content: "test",
        }
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__item">
            <button class="tasks__button tasks__button--toggleDone js-done">
                ${task.done ? "✔" : ""}
            </button>
            <span class="tasks__content ${task.done ? "tasks__content--done" : ""}">
                ${task.content}
            </span>
            <button class="tasks__button tasks__button--remove js-remove">
                🗑
            </button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

    };

    init();
}