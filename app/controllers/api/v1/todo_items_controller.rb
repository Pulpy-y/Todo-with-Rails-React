class Api::V1::TodoItemsController < ApplicationController
  before_action :set_todo_list

  def index
    completed = @todo_list.todo_items.where(completed:true)
    uncompleted = @todo_list.todo_items.where(completed:false)
    render json: {completed: completed, uncompleted: uncompleted}
  end

  def new
    @todo_item = @todo_list.todo_items.build
  end

  def create
    @todo_item = @todo_list.todo_items.create(todo_item_params)
    render json: todo_item
  end

  def show
    if todo_item
      render json: todo_item
    else
      render json: todo_item.error
    end
  end

  def destroy
    todo_item&.destroy
    render json: { message:'Todo Item deleted!'}
  end

  def edit
    #not sure
  end

  def update
    #written with no confidence
    if todo_item.update!(todo_item_params)
      render json: { message:'Todo Item updated successfully'}
    else
      render json: { message:'An error occurred'}
    end
  end

  private

  def todo_item_params
    params[:todo_item].permit(:title, :completed)
  end

  def set_todo_list
    @todo_list = TodoList.find(params[:todo_list_id])
  end

  def todo_item
    @todo_item ||= @todo_list.todo_items.find(params[:id])
  end
end
