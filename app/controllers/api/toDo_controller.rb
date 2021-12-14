class Api::ToDoController < ApplicationController 

  def fetch_list 
    @to_do = ToDo.includes(:tasks).find(params[:id])
    if @to_do 
      render json: { list: @to_do, tasks: @to_do.tasks.order(:index, :desc) } 
    else
      render json: @to_do.errors.full_messages 
    end
  end

    def reorder_list
    order_data = params[:to_do][:orderData]
    Task.update(order_data.keys, order_data.values)
  end
end