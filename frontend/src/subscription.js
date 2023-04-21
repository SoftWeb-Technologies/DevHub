const publicVapidKey =
  "BARuE7TAjgUvNzecIG9dv1w9L6_G_GO97474vA87neP16uSV7XmFK-Jec2NTQKhYONQatWaIgnIn1YLE_jS89-8";

const urlBase64ToUnit8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);

  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};

// Register sw, Register Push, send Push
function sendSubscription(subscription, currentUser, remainderDate) {
  return fetch(`/notifications/subscribe`, {
    method: "POST",
    body: JSON.stringify({
      subscription: subscription,
      dueDate: remainderDate,
      title: "DevHub Task Remainder",
      description: `Hey! ${currentUser}. You have set a remainder to complete a task by ${remainderDate}. Kindly complete the task before deadline.`,
      icon: "https://ichef.bbci.co.uk/news/976/cpsprodpb/9A50/production/_118740593_gettyimages-1231144196.jpg",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
//conditional render
let clicked = true;

export function subscribeUser(currentUser, remainderDate) {
  if (clicked) {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready
        .then(function (registration) {
          if (!registration.pushManager) {
            console.log("Push manager unavailable.");
            return;
          }

          registration.pushManager
            .getSubscription()
            .then(function (existedSubscription) {
              if (existedSubscription === null) {
                console.log("No subscription detected, make a request.");
                registration.pushManager
                  .subscribe({
                    applicationServerKey: urlBase64ToUnit8Array(publicVapidKey),
                    userVisibleOnly: true,
                  })
                  .then(function (newSubscription) {
                    console.log("New subscription added.", newSubscription);
                    sendSubscription(
                      newSubscription,
                      currentUser,
                      remainderDate
                    );
                  })
                  .catch(function (e) {
                    if (Notification.permission !== "granted") {
                      console.log("Permission was not granted.");
                    } else {
                      console.error(
                        "An error ocurred during the subscription process.",
                        e
                      );
                    }
                  });
              } else {
                console.log("Existed subscription detected.");
                sendSubscription(
                  existedSubscription,
                  currentUser,
                  remainderDate
                );
              }
            });
        })
        .catch(function (e) {
          console.error(
            "An error ocurred during Service Worker registration.",
            e
          );
        });
    }
  } else {
    console.log("Can not reachable to the service worker");
  }
}
