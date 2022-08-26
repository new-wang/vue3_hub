module.exports = app => {
    const { INTEGER,STRING,BOOLEAN,DATE,UUID,ARRAY } = app.Sequelize;
    // const { STRING } = app.Sequelize;

    const User = app.model.define(
        "user",
        {
            id:{
                type:INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            email: STRING,
            password: STRING,
            nickname: {
                type:STRING(30),
                comment:"昵称",
            },
            // lastActivedAt: DATE,
            // createdAt: DATE,
            // updatedAt: DATE,
        },
        {
            tableName:"user",
            timestamps:false,
        }
    );

    // 数据库同步 正常情况下不应该放这
    // User.sync({force: true}) 
    // console.log('app',app);
    if (app.config.env === 'local' || app.config.env === 'unittest') {
        app.beforeStart(async () => {
            // console.log('before');
            User.sync({force: true}) 
        //   await app.model.sync({force: true});
        });
    }

    // 建立关系
    // User.prototype.associate = function() {
    //     app.model.User.hasMany(app.model.Post, { as: 'posts' });
    // };
    
    return User;
};