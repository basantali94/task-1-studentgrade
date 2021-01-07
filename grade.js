const fs = require("fs");

const addstudent=(id,stname,grade,comment)=>
{
    const students=loadstudent();
    // students.push({
    //     id:id,
    //     stname:stname
    // })
    // savestudent(students)
    //console.log('Addd function')
    
    const duplicatestudent=students.filter(function(students) {
        return students.id === id
       //return students.stname === stname
    })
    if(duplicatestudent.length === 0){
        students.push({id,stname,grade,comment})
        savestudent(students)
        console.log('saved success')
    }
    else{
        console.log('error dublicate student info')
    }
};


  

const removestudents= (id) =>{
    const students = loadstudent()

    const studentToKeep  = students.filter(function (students){
        return students.id !== id
    })
    if(students.length > studentToKeep.length){
        console.log('student removed')
        savestudent(studentToKeep)
    }
    else{
        console.log('student not removed')
    }
  }


const loadstudent =() =>
{
    try{
        const databuffer=fs.readFileSync("grade.json").toString();
        return JSON.parse(databuffer)

    }
    catch(e){
        return[];
    }
};
const savestudent=(students)=>{
    const savedata= JSON.stringify(students)
    fs.writeFileSync('grade.json',savedata)

}

const readstudent = (id) =>{
    const students = loadstudent()

    const student = students.find((student)=>{
        return student.id === id
    })

    if(student){
        console.log(student.id)
        console.log(student.stname)
    }

}

const liststudent = () =>{
    const students =loadstudent()
    students.forEach(student => {
        console.log(student.id)
    });
}

module.exports={
    addstudent,
    removestudents,
    readstudent,
    liststudent
}
