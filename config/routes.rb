Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'todo_lists/index'
      post 'todo_lists/create'
      get '/show/:id', to:'todo_lists#show'
      delete '/destroy/:id', to:'todo_lists#destroy'
      get '/edit/:id/edit', to:'todo_lists#edit'
      put '/update/:id', to:'todo_lists#update'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
