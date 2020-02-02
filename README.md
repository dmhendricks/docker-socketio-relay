[![Author](https://img.shields.io/badge/author-Daniel%20M.%20Hendricks-lightgrey.svg?colorB=9900cc )](https://www.danhendricks.com/?utm_source=github.com&utm_medium=campaign&utm_content=button&utm_campaign=dmhendricks%2Fdocker-socketio-relay)
[![License](https://img.shields.io/github/license/dmhendricks/docker-socketio-relay.svg)](https://github.com/dmhendricks/docker-socketio-relay/blob/master/LICENSE)
[![DigitalOcean](https://img.shields.io/badge/hosting-Digital%20Ocean-green.svg?style=flat-square&label=hosting&colorB=0152FF)](https://m.do.co/t/8a88362f5683?utm_source=github.com&utm_medium=campaign&utm_content=referral&utm_campaign=dmhendricks%2Fdocker-socketio-relay)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dmhendricks/docker-socketio-relay.svg?style=social)](https://twitter.com/danielhendricks)
[![BrowserStack](https://img.shields.io/static/v1?style=social&label=BrowserStack&message=Passed&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQ5NjEyQzJDMzUxMTFFOTlBNkZDNEVGRUQ3QUI4RDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQ5NjEyQzNDMzUxMTFFOTlBNkZDNEVGRUQ3QUI4RDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDk2MTJDMEMzNTExMUU5OUE2RkM0RUZFRDdBQjhEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NDk2MTJDMUMzNTExMUU5OUE2RkM0RUZFRDdBQjhEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhdfVWUAAAGAUExURXjIMP/Rhf/Xn4mHhwpRXnrY8CIXFv41Sk68OACv2QC+6svIAP5oEAC+6H7ToKa3nP9fF//AT/+tfPjVzpTPHf+6Rf1GLcbVAJDd8P/9+v/qyf/EY/+mNXHLidKyF126Mv/26anm8/+8TP/68P1jAFHO8lPAYu+SDqrh7v+xR/0eOgC/rIGvM7SvI9qKjAC+6lG5wf+SM/+2mOGnGf8NMgCcvLLEw5OZOv0yMfvARRfD7v+VSf9lZ/9mOqTs9lvAQ/+EK/+VY7Hr/f+cN0+7Lb2FMuqFG7tuOv9jEOCLLP93JKzj+ZDYwwC9s2LLrQB8k/9wEv+4R/9oD5/g1b3iAACtygCJo//w6MnHyPM5M+h3NuVyfcLPZP9MWKOYXMevu/+Xn5HG06nWAwDG8pzn6//lsZ/l85rik/+def/38fNoILPS3/1tF/+3Zf+sROmuICWPq3edprrG0VTW26jn/EhteD7CN9ibbgC8t/96NPmLQIjPY/9CKSQfIP///////+tAimMAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAAAj9JREFUeNpU0vtb0lAYB/CzCTgeDrQpGwyUyzZwwwyBmTRNELwgkYpQZkUXumktyrJ13eFf9z0CZd8ftufZZ9/znPOcFw1HIWezp+u9Xm/9xaw8nASNXsczfNk0c2VJOjGni2fXkRQ1KWeWdxKBSCSS2DuZZslflDepPX76LrS/P/+7343slWfkMRJque+djGXlIcuo301IH+URFjU+Z97ayAAEIfl8NtxN3GUIxWMNS+aTDS/QysHBij8YXOTC3b21N4DkFIrTH95alt/j+nw+z0owmE32A78UdYhS2JZg0aiV9/hc1zc1C7q4hbolgx0ilgd8vuG1HoK5rkxcT/B+kusHDEFGm5ot5b6kvZbnCh9Nua7/R5ILR9piDP3EVxgdowtPPzRR5I7IIpvi7bSeGSPEvzhCBjUp3rjQo5/H6PO8mt8CbCtxuixvPnut695J1f+1wnHhgAG4pmG7vBu6p6ej367O+cALRa7/SQQsahjzJ8kWaPrl+fmy9yIEVgnUBdhQ7BBj+8+uE9KBa7WaTntcf2EgwFHkAlSxtOpkQ61OpxWqUAuXqoKiyIgwUMVHoFtcpcJRclAJG7AqQUN1DlPlt5OO44A4laUFvi4oYgqujLB1qrjxfnv1JmRp54gvgMGowGXL8blDnpYbDfpPg7dpLy6PZkgVjCrW8Cg8rhpggjqZPjUuGoWmDWQ3CwOB9tR/cyuzoqC0B4OBoVASWfn6UJMUo4gAVBQmRf6beGA1xsQVJc7EVDL5dinAAO2UucfjcPEkAAAAAElFTkSuQmCC)](https://browserstack.com/?utm_source=github.com&utm_medium=referral&utm_content=link&utm_campaign=dmhendricks%2Fdocker-socketio-relay)

# Simple Message Relay Server

A simple [Node.js](https://nodejs.org/) message relay for Docker for transmitting to [Socket.IO](https://socket.io/) clients.

1. Run the Docker service.
2. Create a listener on the client, such as a [web page](https://github.com/dmhendricks/docker-socketio-relay/blob/master/demo.html).
3. Send messages using cURL or your favorite REST client.

For more information, see my [nodejs-simple-message-relay](https://github.com/dmhendricks/nodejs-simple-message-relay/) example and [screenshot](https://github.com/dmhendricks/nodejs-simple-message-relay/blob/master/README.md#screenshot).

## Deployment

Issue the following command to run in Docker:

```bash
docker run -p 3000:3000 --name socketio-relay -e API_KEY=MY_SECRET_API_KEY hendridm/socketio-relay
```

See [Client Side Example Code](https://github.com/dmhendricks/nodejs-simple-message-relay/wiki/Client-Side-Example-Code) or [demo.html](https://github.com/dmhendricks/docker-socketio-relay/blob/master/demo.html) for an example of using the Socket.IO browser client to receive messages.

### Environmental Variables

- `API_KEY` - The API key required to send messages to clients.
- `DEBUG` - Add `-e DEBUG=1` to display incoming messages to the console. 

## Usage

Once you have to service running and one or more clients connected, you can send messages to them using your favorite REST client. You can send any data you like as long as it's in JSON. For example, to send a message to the included [demo.html](https://github.com/dmhendricks/docker-socketio-relay/blob/master/demo.html), you could issue the following command:

```bash
curl --location --request POST 'http://localhost:3000/socket/my-socket-name?api_key=MY_SECRET_API_KEY' \
    --header 'Content-Type: application/json' \
    --data-raw '{ "message": "Hello World!" }'
```

Note that "my-socket-name" in the endpoint above must match the name of the socket that you are listening to in the client (see [demo.html](https://github.com/dmhendricks/docker-socketio-relay/blob/master/demo.html)). In this way, you can set different listeners and send different messages to different sockets.

[![Analytics](https://ga-beacon.appspot.com/UA-126205765-1/dmhendricks/docker-socketio-relay?flat)](https://ga-beacon.appspot.com/?utm_source=github.com&utm_medium=campaign&utm_content=button&utm_campaign=dmhendricks%2Fdocker-socketio-relay)
