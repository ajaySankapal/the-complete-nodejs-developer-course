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
