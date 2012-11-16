class CreateConferences < ActiveRecord::Migration
  def change
    create_table :conferences do |t|
      t.string :name
      t.text :agenda
      t.datetime :start
      t.datetime :finish
      t.integer :status, :default => 0, :limit => 1
      t.integer :user_id
      t.string :conference_number
      t.string :conference_call_id
      
      t.timestamps
    end
  end
end
