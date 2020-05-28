## usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|string|null: false|
 |e-mail|string|null: false, unique: true|
 |password|string|null: false,|

 ### Association
- has_many :groups, through: :groups_users
- has_many :messages

## groups_usersテーブル
 |Column|Type|Options|
 |------|----|-------|
 |user_id|integer|null: false, foreign_key: true|
 |group_id|integer|null: false, foreign_key: true|

 ### Association
- belongs_to :groups
- belongs_to :users

## groupテーブル
 |Column|Type|Options|
 |------|----|-------|
 |name|integer|null: false|

 ### Association
- has_many :users, through: :groups_users
- has_many :messages

## messagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |body|text|null: false|
 |user_id|integer|null: false, foreign_key: true|
 |group_id|integer|null: false, foreign_key: true|

 ### Association
- has_many :users, through: :groups_users
- has_many :messages
