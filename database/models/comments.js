module.exports = (sequelize, dataTypes ) => {
    const alias = "Comment";
    const cols = {
        name: dataTypes.STRING,
        userId: dataTypes.INTEGER,
        
    }
    const Comment = sequelize.define(alias, cols);
    Comment.associate = function(models){
        Comment.belongsTo(models.Users, {
                as: "User",
                foreingKey: "userId"
            });
    }
    return Comment;
}