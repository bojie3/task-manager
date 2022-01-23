class TaskSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :id
  
    has_many :comments
  end
  