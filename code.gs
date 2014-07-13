// Label the conversations will be moved from
var labelName = "Read Tomorrow";

function moveConversations() {
  var label = GmailApp.getUserLabelByName(labelName);
  if (label != null) {
    var threads = label.getThreads();
    for (var i = 0, n = threads.length; i < n; i++) {
      threads[i].removeLabel(label);
      threads[i].markUnread();
      threads[i].moveToInbox();
    }
    Logger.log("Moved " + threads.length + " conversations.");
  }
}
