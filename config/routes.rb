Rails.application.routes.draw do
  namespace :api do
    resources :tasks, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:update, :destroy]
  end

  root :to => "static_pages#root"

end
