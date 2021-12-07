class Api::UserController < ApplicationController

  def fetch_user_lists
    return { msg: "Please pass in a user id!" } unless params[:id]

    @user = User.includes(:to_dos).find(params[:id])
    render json: @user.to_dos
  end
end