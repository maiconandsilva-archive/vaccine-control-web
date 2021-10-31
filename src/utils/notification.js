export default class Notification {
  static showInfo(msg) {
    alert(msg);
  }

  static showSuccess(msg) {
    Notification.showInfo(msg);
  }

  static showError(msg) {
    Notification.showInfo(msg);
  }
}