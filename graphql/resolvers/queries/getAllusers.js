const getAllUsers = async (root, args, context) => {
    try{
        // console.log('root: ', root)
        // console.log('args: ', args)
        console.log('context: ', context)
        let listUsers = {
            data: [{
                id: 1,
                name: "hari antara"
            }],
            error: null
        }

        return listUsers
    }catch(error){
        return {
            error: error.message
        }
    }
}

module.exports = getAllUsers