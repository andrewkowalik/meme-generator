MemeGenerator::Application.routes.draw do
  resources :templates, :only => ['index', 'show']

  root to: 'root#index'
end
