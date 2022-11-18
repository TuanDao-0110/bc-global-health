const data = require("./hospital_information.json")



const find = (id) => {
    let templist = []
    data.map((item, index) => {

        if (item.id === id) {
            let hospital = {}
            let { id, orderNum, hospitalName } = { ...item }
            hospital.id = id
            hospital.orderNum = orderNum
            hospital.hospitalName = hospitalName
            hospital.role = 'hospital'
            hospital.password = `hospital_${index}`
            templist.push(hospital)
        }
    })


    return templist
}


console.log(find("30005"))


module.exports = find