class TaskController < ApplicationController 

  def new 
    @task = Task.new
  end

  def create 
    @task = Task.new(task_params)
    if @task.save 
      render json: @task 
    else
      render json: @task.errors.full_messages
    end
  end

  def edit 
    @task = Task.find(params[:id])
  end

  def update 
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task 
    else
      render json: @task.errors.full_messages
    end  
  end

  def destroy 
    @task = Task.find(params[:id])
    @task.destroy unless @task.nil?
  end

  private 

  def task_params 
    params.require(:task).permit(:description)
  end
end