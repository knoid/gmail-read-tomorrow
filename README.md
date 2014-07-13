Read Tomorrow's Gmail Script
============================

Helpful script to postpone reading annoying emails.

Propose
-------

Do you have too many emails arriving all day to your inbox? With this script
you can delay all this annoying emails and handle them just once a day. (Only
compatible with GMail).

Prerequisites
-------------

* Have GMail or similar Google Apps Email.
* Create a label called "Read Tomorrow" in your email (or the name you like
most for this feature, please remember it).
* Add an email filter that will automatically remove annoying emails from your
inbox and will put them in your newly created label. Optionally you can mark
them as read because they will be marked as unread automatically.

Instructions
------------

Go to [Google Scripts](https://script.google.com/), start a new *Blank Project*
and copy the following code:

```JavaScript
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
```

The last step is to schedule it. You do this by clicking in
![Schedule](schedule.png "Current project's triggers") and adding a trigger for
"Time-driven", "Day timer" and some time in the morning, I chose 4am to 5am.

Extra customizations
--------------------

**Hiding label:** It is a bit useless (and it bothers me) to see the label
there, you shouldn't even need to click it anyway so you can hide it by
clicking in the label's right arrow and marking "Hide".
