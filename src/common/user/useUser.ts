import { AndroidContentContext } from "../../../types/android/content/Context";

function getMyUserId(context: AndroidContentContext) {
  var database = context.openOrCreateDatabase("arroyo.db", 0, null);
  var cursor = database.rawQuery(
    "SELECT value FROM required_values WHERE key = 'USERID'",
    null
  );
  var userId = null;

  try {
    if (cursor.moveToFirst()) {
      userId = cursor.getString(0);
    }
  } finally {
    cursor.close();
    database.close();
  }

  return userId;
}

export default getMyUserId;
