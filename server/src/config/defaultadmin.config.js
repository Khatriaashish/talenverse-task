const bcrypt = require('bcryptjs')
const UserModel = require('../modules/user/user.model')
require('dotenv').config()

const createDefaultAdmin = async ()=>{
    const noOfAdmin = await UserModel.countDocuments({role:"admin"})
    if(noOfAdmin === 0){
        const payload = {
            name: "Admin",
            email: process.env.DEF_ADMIN_EMAIL,
            password: bcrypt.hashSync(process.env.DEF_ADMIN_PASS),
            role: 'admin',
            status: 'active'
        }
        let admin = new UserModel(payload);
        admin.save()
            .then((success)=>{console.log("Default admin created. Use credentials set in your environment")})
            .catch((err)=>{
                console.log(err)
                console.error("No Admin found. Trouble creating default admin. Try restarting the server")
                process.exit(1)
        })
    }
}

createDefaultAdmin()

