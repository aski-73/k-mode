console.log(`Kmode Running`);
browser.windows.getAll().then((windowInfoArray) => {
    for (currentWindow of windowInfoArray) {
        browser.windows.update(currentWindow.id, {state: "fullscreen"});
    }
}, function (err) {
    console.log(err);
});