// const taskText = document.getElementById('task_text');


document.getElementById('id_1stCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_1stCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading1 = document.getElementById('heading_1')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5">You have completed the task ${heading1.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)


    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})

// 2nd Button

document.getElementById('id_2ndCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_2ndCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading2 = document.getElementById('heading_2')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5">You have completed the task ${heading2.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)

    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})

// 3rd Button

document.getElementById('id_3rdCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_3rdCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading3 = document.getElementById('heading_3')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5">You have completed the task ${heading3.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)

    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})

// 4th button

document.getElementById('id_4thCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_4thCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading4 = document.getElementById('heading_4')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5">You have completed the task ${heading4.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)

    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})

// 5th Button

document.getElementById('id_5thCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_5thCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading5 = document.getElementById('heading_5')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5">You have completed the task ${heading5.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div)

    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})

// 6th Button

document.getElementById('id_6thCard').addEventListener('click', function (event) {
    event.preventDefault();

    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    if (IntTaskText !== 0) {
        alert('Board Updated Successfully');

        // Adding Task Text
        const newTaskText = IntTaskText - 1;
        document.getElementById('task_text').innerText = newTaskText;

        // Adding Nav Text
        const navText = document.getElementById('nav_text').innerText
        const IntNavText = parseInt(navText);

        const newNavText = IntNavText + 1;

        document.getElementById('nav_text').innerText = newNavText;

        const firstCardBtn = document.getElementById('id_6thCard');
        firstCardBtn.disabled = true;
        firstCardBtn.style.backgroundColor = 'slategray';

        // Push into Activity Div
        const heading6 = document.getElementById('heading_6')

        const activity = document.getElementById('id_activity');

        const div = document.createElement('div');
        div.innerHTML = `<p class = "mt-5 max-w-full">You have completed the task ${heading6.innerText} at ${
          new Date().toLocaleTimeString()
        }</p>`

        activity.appendChild(div);

    } else {
        alert('Congrats!!!You have completed all current tasks')
    }
})