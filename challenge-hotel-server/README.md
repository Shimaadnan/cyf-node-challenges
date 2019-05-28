# Challenge: A Hotel Booking Server

### Overview: what is this challenge?

In this challenge you must make an Express app which provides an API to manage a list of hotel bookings, in JSON format.

In the advanced part of this exercise you will modify your React hotel app which you built during the React module, to read, create, and delete room bookings.

We also provide a basic React front-end to allow you to test some of the functionality.

### Pre-reqs

You should have completed at least Level 1-3 of the Chat Server challenge before attempting this challenge.

## Level 1 Challenge - make the booking server

At this first level, your API must allow a client to:

1. Create a new booking
1. Read all bookings
1. Read one booking specified by an ID
1. Delete a booking, by ID

All message content should be passed as JSON.

See the later spoiler section "Correct Routes" if you are not sure of the correct routes.

You will need to use the app "postman" to test deleting a booking.

## Data model

Each booking is an object with the following properties:

| Name         | Type   | Example           |
| ------------ | ------ | ----------------- |
| id           | number | 1                 |
| roomId       | number | 123               |
| title        | string | "Mr"              |
| firstName    | string | "John"            |
| surname      | string | "Doe"             |
| email        | string | "johndoe@doe.com" |
| checkInDate  | string | "2017-11-21"      |
| checkOutDate | string | "2017-11-23"      |

- Dates are in the format YYYY-MM-DD

- The `id` field must be assigned on the server, not by the client.

# Start by remixing our example server

Remix this server on glitch - XXXXXXXX

1. Name your new server yourname-hotel-server
1. Make sure you're logged in so that it saves
1. Check that it is working by making a request to /
1. Take time to read the comments

# Go ahead!

If you think you know how to do that, go ahead!

Try to use what you know to do this challenge on your own. It does not require any new knowledge.

You may find useful the [express cheatsheet](https://github.com/nbogie/express-notes/blob/master/express-cheatsheet.md)

# End of Level 1 challenge!

Well done!

What to do now:

Don't post on slack, unless there's a thread announced specifically for it.
Instead, attach the URLs as links when you "mark done" your assignment in Google Classroom.
You might want to download your project for safekeeping. (Tools: Git, Import, and Export: Download Project)

# Level 2 - simple validation

For this level, your server must reject requests to create bookings if:

- any property of the booking object is missing or empty.

In this case your server should return a status code of 400.

(Advanced note: people don't actually agree on the best status code for this situation.)

# Level 3 (Optional, advanced) - search by date

For this level your API must also allow a client to:

Search for bookings which span a date (given by the client).

It should accept requests of the following format:

`/bookings/search?date=20-05-2019`

Hint: use the `moment` library to make this easier.

# Level 4 (Optional) - advanced validation

In this level, bookings should also be rejected if:

- email address is not valid (hint: use a library to do this - [search here](https://www.npmjs.com/))
- checkoutDate is not after checkinDate (hint: use the `moment` library to check this)

# Spoiler: Correct Routes

| method | example path                     | behaviour                                   |
| ------ | -------------------------------- | ------------------------------------------- |
| GET    | /bookings                        | return all bookings                         |
| GET    | /bookings/17                     | get one booking by id                       |
| POST   | /bookings                        | create a new booking                        |
| DELETE | /bookings/17                     | delete a booking by id                      |
| GET    | /bookings/search?date=2019-05-20 | return all bookings spanning the given date |