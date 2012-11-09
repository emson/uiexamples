BackboneBrijtalk::Application.routes.draw do
  
  root :to => 'conferences#show'

  resources :conferences
end
