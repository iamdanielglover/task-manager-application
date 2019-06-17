require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d07a8930f54a1f984926913').then(task => {
//     console.log(task)
//     return Task.countDocuments({})
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false}) 
    return count
}

deleteTaskAndCount('5d07cc81e1b38e01be1810a7').then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})