class API::UserController < ApplicationController

  def fetch_user
    return { msg: "Please pass in a user id!" } unless params[:id]

    @user = User.find(params[:id]).includes()
    respond json: @user
  end
end