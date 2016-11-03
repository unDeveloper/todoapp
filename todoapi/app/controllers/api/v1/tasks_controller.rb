class Api::V1::TasksController < ApplicationController

  def index
    tasks = Task.where(user_id: current_user.id)

    if params[:date]
      tasks = tasks.where(scheduled_day: params[:date])
    end

    render :json => tasks
  end

  def show
    task = Task.where(user_id: current_user.id, id: params[:id])
  end

  def create
    task = Task.new(task_params)
    task.user_id = current_user.id
    if task.save
      render :json => task, :status => 200
    else
      render :json => task.errors, :status => 400
    end
  end

  def update
    task = Task.find(params[:id])

    if task.update_attributes(task_params)
      render :json => task, :status => 200
    else
      render :json => task.errors, :status => 400
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
  end

  protected
    def task_params
      params.require(:task).permit(:title,:description,:scheduled_day,:scheduled_hour,:location)
    end
end
