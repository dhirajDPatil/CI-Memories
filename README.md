Hosted Url : https://vlogcompilation.netlify.app/

# This application used CRUD api written in node using express, mongoose and uses mongoDB for data storage.

1. After app component loads get api call is done which fectches data from database. till the time loading is shown

2. Once data received shown in the form of card components.

3. In the five feilds are povided to add detalis about event once provided all details after form submission post api gets called which takes all form data within headers and saves this data within data base

4. Like button and delete button is provided on each card. once like clicked count of like is changed within the data base and value is shown in the card

5. On delete click entry for this card is deleted from the database

6. More button ( . . . ) is provided on top right the of card, on clicking gets all the data within form of that card on submit this card information gets updated

7. Clear button proved at the end of the card which is used to clear feilds of the form.

Addtional enhancements ==> 

  1. Addition of user Authentication and Authorisation for the application 
  2. Form validation and mandatory feilds restriction
  3. Because of the image data storage initial load of the data from the database is slow, needs optimization there, to store manage and retrieve that image data
  4. On click of the card image shown in the new component and navigation of to the other cards within this new compoents using arrows.
