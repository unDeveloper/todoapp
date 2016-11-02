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

  end

  def update

  end

  def destroy

  end
end
