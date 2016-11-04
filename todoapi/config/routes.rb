require 'api_contraints'
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api, :defaults => { :format => :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1) do
      resources :tasks
    end

    scope module: :v2, constraints: ApiConstraints.new(version: 2, default: true) do
      resources :tasks
    end
  end
end
