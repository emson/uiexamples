class CreateParticipants < ActiveRecord::Migration
  def change
    create_table :participants do |t|
      t.integer :conference_id
      t.integer :user_id
      t.string :contact_email
      t.string :nickname
      t.string :msisdn
      t.integer :status, :null => false, :default => 0, :limit => 1
      t.string :state
      t.timestamps
    end
  end
end
