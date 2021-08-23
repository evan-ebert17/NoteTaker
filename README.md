# NoteTaker
## Function
This application is designed to run on your localhost and take notes that you save and can reference by clicking on them.
## Code
By using .post and .get requests JSON files are written and the appended to the side, by which you can click on them to pull back to view. Using exports, we have segmented this code into multiple parts that all execute their own unique function, namely our api routes and created encrypted unique id's.
## Routing
Our two routing files apiRoutes and htmlRoutes are just ways that we segment up our routing to make it more efficient, the file 'store' handles most of the gruntwork of the program, and allows us to generate unique id's, create and post notes and comes with error handling and deletion of notes.