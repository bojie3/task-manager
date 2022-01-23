# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
tasks = Task.create([
    {
        title: "Finish Math homework"
    },
    {
        title: "Finish Chemistry homework"
    },
    {
        title: "Finish Physics homework"
    },
    {
        title: "Finish Biology homework"
    },
    {
        title: "Finish CVWO code"
    },
    {
        title: "Finish English homework"
    },
    {
        title: "Buy food"
    }

])

comments = Comment.create([
    {
        description: "Finish math homework with the workings clearly displayed",
        task: tasks.first
    },
    {
        description: "Finish math homework without using caculator",
        task: tasks.first
    }
])