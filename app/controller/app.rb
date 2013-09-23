  require 'sinatra'
  class App < Sinatra::Base


    enable :sessions

    get '/' do
      session[:text] = "It just comes back in flashes you know"
      @text = session[:text]
      @ready = session[:ready]
      erb :index
    end

    post '/ready' do
      session[:ready] = true
      session[:starttime] = Time.now
      redirect '/'
    end

    post '/results' do
      if params[:user_input] == session[:text]
        session[:endtime] = Time.now
        session[:wpm] = 8*60/(session[:endtime]-session[:starttime]) 
        redirect '/results'
  #else
  #   "didn't type correctly"
  #   erb :index
end
end

get '/results' do
  @wpm = session[:wpm]
  erb :results
end

end