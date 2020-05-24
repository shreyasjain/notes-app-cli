const yargs = require('yargs')
const Notes = require("./notes")

yargs.command({
    command:"add",
    builder:{
        title:{
            type:"string",
            demandOption:true
        },
        body:{
            type:"string",
            demandOption:false
        }
    },
    handler:(argv)=>{
        Notes.add(argv.title,argv.body)
    }
})

yargs.command({
    command:"getAllNotes",
    handler:()=>{
        Notes.getAll()
    }
})

yargs.command({
    command:"get",
    builder:{
        title:{
            type:"string",
            demandOption:true
        }
    },
    handler:(argv)=>{
        Notes.get(argv.title)
    }
})

yargs.command({
    command:"remove",
    builder:{
        title:{
            type:"string",
            demandOption:true
        }
    },
    handler:(argv)=>{
        Notes.remove(argv.title)
    }
})

yargs.command({
    command:"removeAll",
    handler:()=>{
        Notes.removeAll()
    }
})

yargs.parse()