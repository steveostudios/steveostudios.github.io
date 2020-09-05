---
title: TestFlight
date: 2012-04-24
---

Here is something I have learned about making apps for Apple: Distributing to a bunch of beta testers (including oneself) is actually pretty difficult! You have to be a legitimate business, get your Apple Developer account, create and write the application, create an application ID, register devices to your account, create a provisioning profile, add certain devices to the provisioning profile, then embed the provisioning file into your application.
After all of that, testers still have to get your app! This used to be tricky. You'd have to email the .ipa file to your testers and get them to drop it into iTunes, plug in their iPhone and sync everytime you update your application.

[TestFlight][1] aims to make this process a little LOT easier. While you still have to do a lot of the grunt work described above, TestFlight removes almost all of the distribution part for you! Here is how it works. After creating the app in your SDK of choice, distribute (making a .ipa file). Upload that build file to TestFlight, select the team members you want to get the app, and their devices, and click send. You're done!

TestFlight team members that have preregistered with your team will show up in your Team list, where you can managed their privileges and their devices.

Create a free, yes FREE TestFlight account.

[1]: https://testflightapp.com
