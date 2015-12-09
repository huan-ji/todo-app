class Api::TasksController < ApplicationController

  def index
    render json: Task.all
  end

  def create
    render json: Task.create!(task_params)
  end

  def update
    task = Task.find(params[:id])
    task.done = !task.done
    task.save
    render json: task
  end

  def show

  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task
  end

  private
  def task_params
    params.require(:task).permit(:title, :body, :done)
  end

end
