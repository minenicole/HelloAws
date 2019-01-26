document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            const tasks = JSON.parse(xhr.responseText);
            console.log(tasks);
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/task');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ task: document.getElementById('taskInput').value }));
});