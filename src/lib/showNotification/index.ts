export async function showNotification(title, body) {
  let permission = Notification.permission;

  if (permission === "granted") {
    show();
  } else if (permission === "default") {
    requestAndShowPermission();
  } else {
    alert("Use normal alert");
  }

  function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        show();
      }
    });
  }
  function show() {
    let notification = new Notification(title, { body });

    notification.onclick = () => {
      notification.close();
      window.parent.focus();
    }

  }
}