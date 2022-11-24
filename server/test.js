const data = require("./hospital_information.json")
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const createListOfTime = () => {
    let list = {
        '24/12/2022': [
            {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            }, {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            }, {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            },

        ],
        '25/12/2022': [
            {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            }, {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            }, {
                time: 7000,
                userConfirm: false,
                hospitalConfirm: false,
                userVisitConfirm: false,
            },

        ]
    }
    let time = format(new Date(), 'ddMMyyyy')
    console.log(time)
    let item = {
        time: 7000,
        userConfirm: false,
        hospitalConfirm: false,
        userVisitConfirm: false,
    }
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