const Sequelize = require('sequelize')

// class명은 파일명과 똑같이 작성하되 대문자로 시작
module.exports = class User extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            // name칼럼 정의
            name: {
               type: Sequelize.STRING(20), // varchar(20)
               allowNull: false, // null제약조건 -> not null
               unique: true, // uniqie제약조건 -> 중복허용 X
            },
            // age칼럼 정의
            age: {
               type: Sequelize.INTEGER.UNSIGNED, //양수만 가능한 정수 int
               allowNull: false,
            },
            // married칼럼 정의
            married: {
               type: Sequelize.BOOLEAN,
               allowNull: false, // ture, false 값이 저장되는 타입
            },
            // comment칼럼정의
            comment: {
               type: Sequelize.TEXT,
               allowNull: false, // text타입
            },
            // created_at칼럼 정의
            created_at: {
               type: Sequelize.DATE, // 날짜와 시간을 저장하는 datetime
               allowNull: false,
               defaultValue: Sequelize.NOW, // 디폴트값으로 현재 시간 설절
            },
         },
         {
            sequelize,
            // 자동생성되는 createAt과 updateAt 컴럼의 활성화여부 ->비활성화
            // createAt: 테이블에 insert할때 날자와 시간값이 자동으로 insert되는 칼럼
            //  updateAt: 테이블에 update할때 날자와 시간값이 자동으로 insert되는 칼럼
            timestamps: false,
            underscored: false, // 컬럼이름을 카멜케이스로 유지할건지 -> 유지 x
            modelName: 'User', // 시퀄라이즈에서 사용하는 모델이름(클래스명 작성)
            tableName: 'users', // 데이터 베이스에서 사용하는 실제 테이블 이름
            paranoid: false, // 소프트 삭제(soft delete) 활성화 여부 -> 비활성화
            charset: 'utf8mb4', // 데이터베이스 생성할때 charset과 똑같이 사용
            collate: 'utf8mb4_general_ci', //데이터 베이스 생성할때 collate와 똑같이 사용
         }
      )
   }

   static associate(db) {
      // User : Comment = 1 : n
      // User가 Comment를 가지고 있다 (User가 부모테이블, Comment는 자식테이블)
      db.User.hasMany(db.Comment, {
         foreignKey: 'commenter',
         sourceKey: 'id', // User에서 Comment에게 외래키로 제공할 칼럼이름
      })
   }
}
