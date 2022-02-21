```json
// Put in postman raw body.
// [POST] https://fcm.googleapis.com/fcm/send
{
    "to": "", // token device perangkat
    "notification": {
        "title": "Title Notification", // judul notifikasi
        "body": "body notification", // body notifikasi
        "android_channel_id": "custom-sound" // channel id (android) sesuai yg telah diinstance di source code
    }
}
```