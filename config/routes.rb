MemeGenerator::Application.routes.draw do
  resources :templates, :only => ['index']

  root to: 'root#index'
end
