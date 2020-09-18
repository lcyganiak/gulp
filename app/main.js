var lastCourse = Array

const axios = require('axios')


function getBitCoin() {
    feach()
        .then(res => res.json())
        .then(res => {
            if (lastCourse.length === 0) {
                // logiga tworzenie 
                lastCourse = [...res]
            } else {

            }
        })

}
getBitCoin()