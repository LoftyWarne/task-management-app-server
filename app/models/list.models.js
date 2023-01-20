module.exports = (sequelize, Sequelize) => {
  const list = sequelize.define("tbl_List", {
    tbl_PK_List: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tbl_ListName: {
      type: Sequelize.STRING
    }}, {
    tableName: 'tbl_List',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });

  return list;
};