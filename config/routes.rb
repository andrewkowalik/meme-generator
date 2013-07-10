MemeGenerator::Application.routes.draw do
  resources :templates, :only => ['index', 'show']
  resources :memes

  root to: 'root#index'
end
