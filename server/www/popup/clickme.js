<button onclick="notifyMe()">Click me!</button>

// browser will ask for permission
<script type="text/javascript">document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); //if browser is not compatible this will occur
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('The Tool-Kit (Notification Title)', {
      icon: 'icon.png',
      body: "New Notification! Click to Check",
    });

    notification.onclick = function () {
      window.open("index.html");
    };

  }

}</script>
