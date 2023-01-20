module.exports = (sequelize, Sequelize) => {
  const task = sequelize.define("tbl_Task", {
    tbl_PK_Task: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tbl_FK_List: {
      type: Sequelize.INTEGER
    },
    tbl_TaskName: {
      type: Sequelize.STRING
    },
    tbl_TaskDescription: {
      type: Sequelize.STRING
    },
    tbl_TaskDeadline: {
      type: Sequelize.DATEONLY
    },
    tbl_TaskComplete: {
      type: Sequelize.BOOLEAN
    }}, {
    tableName: 'tbl_Task',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });

  return task;
};