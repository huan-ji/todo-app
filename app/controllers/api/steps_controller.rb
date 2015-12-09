class Api::StepsController < ApplicationController
  def index
    steps = Step.where(task_id: params[:task_id])
    render json: steps
  end

  def create
    step = Step.create(step_params)
    step.task_id = params[:task_id]
    step.save
    render json: step
  end

  def update
    step = Step.find(params[:id])
    step.done = !step.done
    step.save
    render json: step
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy
    render json: step
  end

  private

  def step_params
    params.require(:step).permit(:title, :done)
  end
end
