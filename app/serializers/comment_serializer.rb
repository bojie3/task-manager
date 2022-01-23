class CommentSerializer
    include FastJsonapi::ObjectSerializer
    attributes :description, :task_id
  end