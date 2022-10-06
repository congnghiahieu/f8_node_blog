module.exports = {
    mongooseArraysToObjects(mongooseArrays) {
        return mongooseArrays.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject(mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    },
};
