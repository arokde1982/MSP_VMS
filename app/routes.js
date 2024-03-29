//routes
//
// load the todo model
var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
}

//expose the routes to our app with module.exports
module.exports = function (app) {

    //api
    //get all todos
    //
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    app.post('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            // get and return all the todos after you create another
            Todo.find(function (err, todos) {
                if (err) {
                    res.send(err);
                }
                res.json(todos);
            });
        });
    });

    // delete a todo
    app.delete('/api/todos/:todoId', function (req, res) {
        Todo.remove({
            _id: req.params.todoId
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res);
        });
    });
    //application
    app.get('*', function (req, res) {
        //res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
        res.render('index', {
            title: 'Todo App'
        });
    });

};
