const data = require("./hospital_information.json")



const find = (id) => {
    let templist = []
    data.map((item, index) => {

        // if (item.id === id) {
        //     let hospital = {}
        //     let { id, orderNum, hospitalName } = { ...item }
        //     hospital.id = id
        //     hospital.orderNum = orderNum
        //     hospital.hospitalName = hospitalName
        //     hospital.role = 'hospital'
        //     hospital.password = `hospital_${index}`
        //     templist.push(hospital)
        // }
        if (item.id === id) {
            item.role = 'hospital'
            item.password = `hospital_${index}`
            templist.push(item)
        }
    })


    return templist
}




module.exports = find