export async function showNotification(title: string, body: string) {
  let permission = Notification.permission;

  if (permission === "granted") {
    show();
  } else if (permission === "default") {
    requestAndShowPermission();
  } else {
    alert("Use normal alert");
  }

  function requestAndShowPermission(): void {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        show();
      }
    });
  }
  function show(): void {
    let notification = new Notification(title, { body });
    notification.onclick = () => {
      notification.close();
      window.parent.focus();
    }
  }
}