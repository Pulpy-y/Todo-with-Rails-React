class Api::V1::TodoListsController < ApplicationController
  def index
    todo_list = TodoList.all.order(created_at: :desc)
    render json: todo_list, include:
      [:todo_items => {:only => [:id, :title, :completed, :todo_list_id]}]
  end

  def create
    todo_list = TodoList.create!(todo_list_params)
    if todo_list
      render json: todo_list
    else
      render json: todo_list.errors
    end
  end

  def show
    if todo_list
      render json: todo_list
    else
      render json: todo_list.error
    end
  end

  def destroy
    todo_list&.destroy
    render json: { message:'Todo List deleted!'}
  end

  def edit
    #not sure
  end

  def update
    #written with no confidence
    if todo_list.update_attributes!(todo_list_params)
      render json: { message:'Todo List updated successfully'}
    else
      render json: { message:'An error occurred'}
    end
  end

  private

  def todo_list_params
    params.permit(:title, :description)
  end

  def todo_list
    @todo_list ||= TodoList.find(params[:id])
  end
end
