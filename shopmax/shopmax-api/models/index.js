const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const Cart = require('./cart')
const CartItem = require('./cartitem')
const Domain = require('./domain')
const Img = require('./img')
const Item = require('./item')
const Order = require('./order')
const OrderItem = require('./orderitem')
const User = require('./user')

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.User = User
db.Cart = Cart
db.CartItem = CartItem
db.Domain = Domain
db.Img = Img
db.Item = Item
db.Order = Order
db.OrderItem = OrderItem

User.init(sequelize)
Order.init(sequelize)
Cart.init(sequelize)
Item.init(sequelize)
Img.init(sequelize)
OrderItem.init(sequelize)
CartItem.init(sequelize)
Domain.init(sequelize)

User.associate(db)
Order.associate(db)
Cart.associate(db)
Item.associate(db)
Img.associate(db)
OrderItem.associate(db)
CartItem.associate(db)
Domain.associate(db)

module.exports = db
