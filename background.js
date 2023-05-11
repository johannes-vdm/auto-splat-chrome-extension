chrome.notifications.create(
    // "drink_water",
    {
        type: "basic",
        iconUrl: "alarm.jpg",
        title: "Stay Hydrated",
        message: "Have a sip of water human!",
        silent: false
    },
    () => { }
)