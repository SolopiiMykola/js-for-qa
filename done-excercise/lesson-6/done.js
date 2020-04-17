async function loadJson(url) {
    let promise = await fetch(url);
    let content;
    if (promise.status == 200) {
        content = await promise.json();
        return content;
    } else {
        throw new Error(promise.status);
    }
}

async function loadJson(url) {
    const response = await fetch(url)
    console.log(response)
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error(response.status);
    }
}
loadJson('no-such-user.json')
    .then(alert)
    .catch(alert);