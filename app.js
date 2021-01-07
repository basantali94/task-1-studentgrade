
//const { number } = require('yargs')
const students = require('./grade')
const yargs=require('yargs')
yargs.command(
    {
    command:'add',
    builder:{
            id:{
                describe:'id of student',
                demandOption:true,
                type:'number',


            },
            stname:{
                describe:'name of student',
                demandOption:true,
                type:'string',

        },
        grade:{
             describe:'grade of student',
                demandOption:true,
                type:'number',
             },
             comment:{
                 describe:'status of student',
                 demandOption:true,
                 type:'string',
                },
    },
    handler: (argv) =>{
        students.addstudent(argv.id,argv.stname,argv.grade,argv.comment)
        //console.log('Adddd')
    }
    }
)


console.log(yargs.argv)
yargs.parse()
yargs.command(
        {
            command:'delete',
            describe:'delete student',
            builder:{
                id:{
                    describe:'id of student',
                    demandOption:true,
                    type:'number',
                }
            },
            handler:function(argv) {
                students.removestudents(argv.id)
            }
        }
)

yargs.command({
    command:'read',
    describe: 'Read student data',
    builder:{
        id:{
            describe: 'id of student to be read',
            demandOption:true,
            type: 'number'
        },
    },
    handler: function(argv){
        students.readstudent(argv.id)
    }
})

yargs.command({
    command:'list',
    describe: 'List student',
    handler: function(){
       students.liststudent()
    }

})

console.log(yargs.argv)
yargs.parse()


