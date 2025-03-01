document.getElementById('id_5thCard').addEventListener('click', function (event) {
    event.preventDefault();

    alert('Board Updated Successfully');

    // Adding Task Text
    const taskText = document.getElementById('task_text').innerText
    const IntTaskText = parseInt(taskText);

    const newTaskText = IntTaskText - 1;
    
    document.getElementById('task_text').innerText = newTaskText;

    // Adding Nav Text
    const navText = document.getElementById('nav_text').innerText
    const IntNavText = parseInt(navText);

    const newNavText = IntNavText + 1;

    document.getElementById('nav_text').innerText = newNavText;

    const firstCardBtn = document.getElementById('id_5thCard');
    firstCardBtn.disabled = true;
    firstCardBtn.style.backgroundColor='slategray'

})