const { User } = require('../models')
const { Op } = require('sequelize');

console.log(User)

const searchUsers = async (req, res) => {
    const { firstName, lastName, email, city, country } = req.query;

    const whereClause = {};


    if (firstName) {
        whereClause.firstName = { [Op.like]: `%${firstName}%` }
    }
    if (lastName) {
        whereClause.lastName = { [Op.like]: `%${lastName}%` }
    }
    if (email) {
        whereClause.email = email;
    }

    if (city) {
        whereClause.city = { [Op.like]: `%${city}%` }
    }
    if (country) {
        whereClause.country = { [Op.like]: `%${country}%` }
    }

    console.log(whereClause);

    let users = [];

    if (Object.keys(whereClause).length > 0) {
        users = await User.findAll(
            {
                where: whereClause
            }
        )
    }
    else {
        users = await User.findAll();
        console.log("All users: " + users);
    }


    return res.render('index', { users: users });


}


const singleSearch = async (req, res) => {
    const { search } = req.query;

    let users = [];

    if (search) {
        users = await User.findAll({
            where: {
                [Op.or]: [
                    { firstName: { [Op.like]: `%${search}%` } },
                    { lastName: { [Op.like]: `%${search}%` } },
                    { email: { [Op.like]: `%${search}%` } },
                    { city: { [Op.like]: `%${search}%` } },
                    { country: { [Op.like]: `%${search}%` } }
                ]
            }
        })
    }
    else {
        users = await User.findAll();
    }

    return res.render('index', { users: users });
}

module.exports = { searchUsers, singleSearch }