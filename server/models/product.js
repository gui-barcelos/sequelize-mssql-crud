'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        description: {
            type: DataTypes.STRING,
            required: false
        },
        price: {
            type: DataTypes.FLOAT,
            required: false
        }
    }, {
        timestamps: false
    });

    return Product;
};