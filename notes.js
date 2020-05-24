const fs = require('fs')
const chalk = require("chalk")

const add = (title,body)=>{
    let currentData = loadData()
    const ifDuplicate = currentData.find(note=>note.title===title)
    if(ifDuplicate){
        console.log(chalk.bold.red.inverse("The entered title is already present."))
    }
    else{
        const temp = {
            title:title,
            body:body
        }
        currentData.push(temp)
        saveData(currentData)
        console.log(chalk.greenBright.inverse("Data added successful."))
    }
}

const getAllNotes = ()=>{
    const data = loadData()
    console.log(chalk.greenBright.inverse("Data:"))
    console.log(data)
}

const getElement = (title)=>{
    const data = loadData()
    const element = data.filter(note=>note.title===title)
    if(element.length<=0){
        console.log(chalk.bold.red.inverse("Required element not found. Try again with different title."))
    }
    else{
        console.log(chalk.greenBright.inverse("Required element:",JSON.stringify(element)))
    }
}

const remove = (title)=>{
    const data = loadData()
    const nonSimilarElements = data.filter(note=>note.title!=title)
    if(data.length>nonSimilarElements.length){
        saveData(nonSimilarElements)
        console.log(chalk.yellowBright.inverse("Item removed successfully."))
    }else{
        console.log(chalk.bold.red.inverse("Item not found. Please try again with another title."))
    }
}

const removeAll = () => {
    saveData([])
    console.log(chalk.bold.italic.underline.bgRed.dim("All data cleared."))
}

const saveData = (data)=>{
    const dataToJson = JSON.stringify(data)
    fs.writeFileSync('notes.json',dataToJson)
}

const loadData = ()=>{
    try{
        let data = fs.readFileSync("notes.json")
        data = JSON.parse(data)
        return data
    }
    catch(e){
        return []
    }
}

module.exports = {
    add:add,
    getAll:getAllNotes,
    remove:remove,
    get:getElement,
    removeAll:removeAll
}