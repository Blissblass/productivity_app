class ToDoController < ApplicationController 

  def new
    @to_do = ToDo.new
  end

  def create
    @to_do = ToDo.new(to_do_params)
    if @to_do.save 
      render json: @to_do 
    else
      render json: @to_do.errors.full_messages
    end
  end

  def edit 
    @to_do = ToDo.find(params[:id])
  end

  def update 
    @to_do = ToDo.find(params[:id])
    if @to_do.update(to_do_params)
      render json: @to_do, status: 200
    else
      render json: @to_do.errors.full_messages, status: 422 
    end
  end

  def destroy 
    @to_do = ToDo.find(params[:id])
    @to_do.destroy unless @to_do.nil?
  end

  private

  def to_do_params 
    params.require(:to_do).permit(:name, :user_id)
  end

end