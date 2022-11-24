const data = require("./hospital_information.json")
const { format } = require('date-fns')
const nextDay = require('date-fns/nextDay')
const setDay = require('date-fns/setDay')
const getDay = require('date-fns/getDay')
const subDays = require('date-fns/subDays')

const { v4: uuid } = require('uuid')
const setUpdate = (days) => {
    return format(subDays(new Date(), -days), 'dd/MM/yyyy')
}
const createListOfTime = () => {
    let list = {

    }
    let time = format(new Date(), 'ddMMyyyy')
    let item = {
        time: 730,
        userConfirm: false,
        hospitalConfirm: false,
        userVisitConfirm: false,
        customerId: null
    }
    for (let i = 0; i < 7; i++) {
        list[`${setUpdate(i)}`] = []
        let time = 650
        for (let j = 0; j < 20; j++) {

            if (j % 2 === 0) {
                time += 30

            } else {
                time -= 30
                time += 100
            }
            let item = {
                time,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            }
            list[`${setUpdate(i)}`]?.push(item)

        }
    }
    return list

}

createListOfTime()





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


    // return templist
}




// module.exports = find
module.exports = createListOfTime