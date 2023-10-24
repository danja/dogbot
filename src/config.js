{
    "logger": {
        "level": "debug",
        "file": {
            "active": false,
            "pattern": "%d %p %m",
            "path": "./",
            "filename": "dogbot.log"
        },
        "console": {
            "active": false,
            "coloured": true
        },
        "stdout": {
            "active": true,
            "pattern": "%p %m"
        }
    },
    "xmppServer": {
        "service": "xmpps://hyperdata.it",
        "domain": "hyperdata.it",
        "username": "dogbot@hyperdata.it",
        "password": "doggy",
        "resource": "botservice",
        "errorReply": "Oops, something went wrong :(",
        "rooms": [
            {
                "id": "shed@conference.hyperdata.it",
                "password": null
            }
        ]
    }
}