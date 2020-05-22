Welcome to hackTeck. This is a 'hack' environment where I can implement new or unfamiliar code. 
(Mostly full stack development)


There's a couple of things you'll see here. The front end side of this application
was developed with React JSX. (A JS Framework) The Backend side was developed using
Google Firebase. Firebase is a noSQL database that offers several features. I've
listed a couple of these features later on.

Lets get to it.

1.) Firebase Sign in and sign up components are demanded from the start. Users must 
sign in to gain access to the app. This usually would allow the app to choose which
features are accessable to which user based on their credentials. The same would be
true for the Create, Read, Update and Delete permissions to the database(s). The 
signup creates not only a user in the authentication portion of firebase but a collection
'user' doc with that users email. 

2.)That user collection allows us to set up an environment where we can allow other 
users to chat with eachother. All the user will need is the other user's email adress
The messenger component is strictly props and backend. I had fun with this one because 
it's more componentized then any other section. Eventually I look forward to styling 
the messaging component more and add a little more functionality to it.
(ex: setting up the 'X' button in chatlist section next to userEmail to enable
delete messages. I also hope to make it where if the backend creates a new doc, (we'll call
it a new message for simplicity) an 'accept/decline' component will allow the user to 
accept or decline the incoming message.)

3.)The Cycle component allows a user to receive their own data from the database without
them displaying or 'updating' anyone else's data. Why the quotation marks around updating?
With Firebase I'm actually using the SET method instead of update. This saves some room
on my front end code, as well as my backend and allows clearer organization in the firebase console rules. (Firebase keeps it as close to JSON format as possible. )

4.) Journal component is a React Hook with a 'needle in the haystack' twist, and although not the merge sort algorithm, a combination of '.some()' and '.indexOf()' methods are used to trigger a function in the event that a needle is found. Try typing in inadequate or another 'pain' word. For now that function is just an alert but eventually I plan to hack a little more to where a custom alert can redirect the user to a different component if the user chooses to do so.

5.) Bilateral will eventually be an audio clip with some pretty detailed JSX and CSS. This is actually still under development in another profession but as soon as I can do more research, I'll get it posted.

6.)Last but not least there's Workshop. Each element you post is writing/reading straight from a real time database. You might notice you can post an image or even a video. This is all possible using 'suneditor-react'(which includes base64, 64 bit converter) on the 'write' side. For the 'read' side I used lodash to allow me to map the items the way I wanted to. I also used React-render-html to translate the 64 bit code back into html. (the workshop input is currently being displayed for example purpose. Logic in a real world setting would be set up to where only admin would be able to see that component and if the user signed in was not admin, that user would not be able to see that component) 

7.) Security was a priority. Although I'm not going to go into to much detail. I did use a combination of database settings as well as hosting settings to include that much desired and comfortable SSL icon.

8.) With Google Analytics, admin can see Active user count, how many users have opened the app in the last 30 minutes, view monthly tables of top screens/pages and how long users are staying on those pages, how stable the app is with crash analytics, how/why users are coming to the page and roughly how much that cost, how well site is able to obtain users and demographics which include what devices and browser each member is using, and of course country/region. Revenue is also a huge thing. Google Analytics also helps set up AdMob which will not only bring revenue when others see company adds, but it also helps make sure your site/adds are seen through adds as well.

9.) This site was hosted using firebase hosting. It starts out with a temp website perfect for alpha and beta testing. You can also directly update your code to the specified hosted site url through terminal/console as well.


Over all I hope to continue working on hackteck and improve some styling and functionality. Commenting on key logic through each component is in the next update. Long term, I hope to organize and simplify the code as well and post a tutorial video on Youtube. Once Youtube video is completed, I'll leave a link here in the readMe.md section. 
