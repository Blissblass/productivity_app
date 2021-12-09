Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/user_lists/:id', to: 'user#fetch_user_lists'
  end
  resources :to_do, only: [:new, :create, :destroy, :edit, :update]
end
