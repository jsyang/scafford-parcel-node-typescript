const Twitter = require('twitter');

const client = new Twitter({
    consumer_key:        process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:     process.env.TWITTER_CONSUMER_SECRET,
    access_token_key:    process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const stream = client.stream('statuses/filter', {track: 'today'});//, follow:'rogerfederer'});

const messages: any[] = [];

stream.on('data', function (event) {
    if (event) {
        messages.push(event);
    }

    if (messages.length === 100) {
        willExit();
    }
});

function sortByTimestamp(a, b) {
    return a.timestamp_ms - b.timestamp_ms;
}

const users:any = {};

function willExit() {
    /*
    messages.forEach(m=>{
        users[m.user.name] = users[m.user.name] || [];
        users[m.user.name].push(m);
    });

    Object.keys(users)
        .forEach(u=>users[u]=users[u].sort(sortByTimestamp));
*/
    console.log(
        JSON.stringify(messages)
    );

    process.exit();
}

setTimeout(willExit, 30 * 1000); // Quit after 30 seconds

stream.on('error', function (error) {
    console.log(error);
});

