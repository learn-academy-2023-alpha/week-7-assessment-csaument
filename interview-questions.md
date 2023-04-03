# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

Rails seeks to simplify application development by removing options and decisions. This provides very specific rules for creating, defining, and interacting with our models. While working with relational models, each model must specify the types of relationships to other models and, if appropriate, provide a column for a foreign key to a related model's unique key. In this example, the developer is working with a has_many/belongs_to relationship. The Cohort has_many students. The Student belongs_to cohort. Student needs a column for the foreign key to express this relationship to Cohort. The foreign key should be named cohort_id and should be an integer. We can generate a migration to add this column to our Student model.

Researched answer:

Specific commands for performing the above operations:
1. Generate a migration
```console
rails g migration add_cohort_id_to_student
```

1. Navigate to the new .rb in the migration folder, and add the below line
```ruby
add_column :student, :cohort_id, :integer
```
1. Navigate to the Cohort class and add the below line
```ruby
has_many :students
```
1. Navigate to the Student class and add the below line
```ruby
belongs_to :cohort
```
1. Perform the migration in the console.
```console
rails db:migrate
```

2. Which RESTful routes must always be passed params? Why?

Your answer:
The restful routes are:
GET - Allows, but does not require params. Params can allow queries to pull specific records from the model, or pull the entire model.
POST - Requires params to add a new record to the model. Without params, what is being added? Perhaps a model without any validation would allow null values for all columns.
PUT - Requires params to update the record in the model. Without params, what is being input?
PATCH - Requires params to update the record in the model. Without params, what is being updated?
DELETE - Requires params to destroy a record in the model. Without params, would it destroy the entire model?

Researched answer: The best way to determine when params are required and, more importantly, which params are required is to review the API documentation of an application/database. Good documentation should list out the available/optional and the required params for each request. This is like reading the instruction manual for a classic video game - you'll learn all sorts of button commands that provide useful commands or "cheat codes" for the uninitiated.

3. Name three rails generator commands. What is created by each?

Your answer:

Rails, famous for its ability to do more with fewer key strokes, can create all sorts of file structures and dependencies with the generator commands. Three common commands are:
```terminal
rails g model ModelName column1:type1 column2:type2 ...
```
This command generates a new model for the relational database in a Rails application. The model comes with a standard id:integer value to provide unique keys for each entry alongside any developer/user defined states. The similar/upgraded 'resource' comes with common RESTful routes pre-programmed.

```terminal
rails g migration overly_descriptive_name_of_desired_changes
```
This command generates the tools necessary for the development of a migration. Perhaps a development team finds that the date datatype would be easier and more efficient to manage than a string dataype. Perhaps a new column is needed as the model begins to track more complicated entries or a new model comes along and decides to own an extant model. This and many more changes can be managed in the official record by properly generating and executing a migration for those data.

```terminal
rails g controller ControllerName
```
Following the controller-route-view (CRV) pathway, a controller allows the development team to define methods for interacting with a model. These methods can define general or specific quieries or allow cross-model interactions. As an object-based system, the Rails application instantiates one or more controller objects to process these requests from the server.

Researched answer: Researching on other generator commands, the following seems like the standard list:
* assets
* channel
* controller
* generator
* helper
* integration_test
* jbuilder
* job
* mailer
* migration
* model
* resource
* scaffold
* scaffold_controller
* system_test
* test

Additionally, developers can create custom generators. These can provide a wide variety of functions that generally automate repetitive actions.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

Ignoring that this is clearly a trick question (since none of the method names are actually defined below), let's make an assumption that the most common/likely methods are mapped to each of these pathways, such as a Rails resource would provide.

action: "GET" location: /students
* Calling GET to the /students location looks like a typical #index operation. This method, called directly on the model, should provide a complete listing of all entries and data from the model. A Rails resource provides these data as a .JSON-formatted object. A custom method could provide local a local variable via params. Both options allow the view (index.html.erb) to render the data for a user of the application.

action: "POST" location: /students
* Calling POST to the /students location looks like a typical #create operation. This method, called directly on the model, should provide the user with the ability to submit data in a .JSON-formatted object via params to the controller. If those data meet any validation criteria established by the model and any further access restrictions in place, then the model would be able to create a new entry with those data. Typical user-interactions would provide an error message notifying the user of an error or redirect to the previous view if the operation was successful (200).

action: "GET" location: /students/new
* Calling GET to the /students/new location looks like a #new operation. This method, called directly on the model, should return a form via an appropriate view (new.html.erb). The form should provide the user with a suitable interface to enter necessary data for the model. Views may also include initial validation at the interface level or defer data validation to the model's controllers. A subsequent POST operation (as above) would be necessary to submit those data from the form to the model for validation.

action: "GET" location: /students/2
* Calling GET to the students/2 location looks like a #show operation. This method, called directly on the model, should return a view of the content at id: 2 via an appropriate view (model.html.erb) or a .JSON-formatted object. Specific implementation should be specified within the API documentation.

action: "GET" location: /students/2/edit
* Calling GET to the /students/2/edit location looks like an #edit operation. This method, called directly on the model, should return a form via an appropriate view (edit.html.erb). The form should provie the user with the current data from the entry at id 2 as well as a suitable interface to change those data within the model. As with the GET from /students/new, this view may incorporate initial validation or leave all validation to the controller/model.

action: "PATCH" location: /students/2
* Calling PATCH to the /students/2 location looks like an #update operation. This method, called directly on the model, should process data submitted via params from a form or .JSON-formatted object and, if those data meet validation standards and the user has appropriate permissions, allow the user to update data within the entry at id: 2. A successful operation returns code 200.

action: "DELETE" location: /students/2
* Calling DELETE to the /students/2 location looks like a #destroy operation. This method, called directly on the model, allows the user to "delete" data contained at id: 2 if they have sufficient permissions. As a fun nuance from using a postgreSQL database for the model, those data are technically recoverable, since a "delete" simply appends a new node to the second branch of our tuple-tree model.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1. As a user, I can create a new task with a title, description, location, priority, and suspense date.
1. As a user, I can rank my to-do list by suspense date or priority.
1. As a user, I can view the Eisenhower breakdown of my tasks in a friendly graph.
1. As a user, I can click on any task in the graph to view details on that task.
1. As a user, I can share my to-do list with other people on my team.
1. As a user, I can update each task as progress is made.
1. As a user, I can update my task with a blocker.
1. As a team leader, I can create tasks and assign them to team members.
1. As a team leader, I can view all of the tasks assigned to my team members.
1. As a team leader, I can view when blockers are identified by members of my team.
1. As a team leader, I can easily see how workload is balanced across my team.
1. As a team leader, I can track the relative productivity of members of my team.
1. As a team leader, I can assess the relative difficulty and complexity of tasks assigned to members of my team.
1. As a team leader, I can assign tasks to be shared by multiple members of my team.
1. As a team leader, I can take large tasks and divide them into smaller subtasks.
1. As a user, I can schedule reminders for taking breaks or switching tasks.
