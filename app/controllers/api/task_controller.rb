class Api::TaskController < ApplicationController 

  def toggle_status 
    @task = Task.find(params[:id])
    if @task 
      @task.update(status: !@task.status)
    else
      render json: @task.errors.full_messages
    end
  end

end