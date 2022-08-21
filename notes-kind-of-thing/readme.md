##### Dynamic pages with templating

###### handlebars - by handlebars we can render dynamic content across various pages. Like if we want to display header and footer at each page, if we dont use dynamic content we have to copy paste the same code at every page. and if we want to change anything we have to make the changes at every page. so we use dynamic content at one place and use it at every page

#### SQL NOSQL

##### table Collection

##### row Document {}

##### column Field

###### mongoose - mongoose is used for creating models.. a model allows us to model something in real world,,that we want to store in the database...it could be a "user", a "Task" or "student"

###### ODM - Object Document Mapper -- map objects in the code

#### router

##### In task manager code there is a lot of code in the same file which can be slightly confusing.. we can have the separate router for our user and task

###### create new router

###### const router = new express.Router()

###### router have access to the same methods we have for app

###### router.get("/test",(req,res)=>{

###### res.send("Hello from the other router!")

###### })

###### this router will not work unless we register it .. we can do this by -

###### app.use(router)

###### mongoose support which is known as middleware. Customize the behaviour of our mongoose model

###### with middleware we can register some function that we can perform before or after the event occurs

###### to hash the password our job is to register the middleware with function which will run just before we save the model(user)

###### when we are defining the model of user and pass the attributes of that model as object.. mongoose convert that object into the schema behind the scenes... in order to take the advantage of the middleware we define schema first and then pass that schema as second arguement when we are defining the model(user).. we can do this by

###### -> const userSchema = new mongoose.Schema({ //the object that we are passing as the second arguement prior })

###### : now we can take advantage of the middleware

###### userSchema.pre //doing something before an event .... userSchema.post // doing sth after an event

###### userSchema.pre("save",async function(){ //the first arguement is the name of the event on which we want to trigger our function,,, second arguement will have to be standard function because of the this binding

######

###### })

###### const User = mongoose.model("User",userSchema)
