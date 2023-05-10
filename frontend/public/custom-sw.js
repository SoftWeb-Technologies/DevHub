/* eslint-disable no-restricted-globals */
console.log("Service worker loaded");

self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("New notification", data);
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.description,
      icon: data.icon,
    })
  );
});
