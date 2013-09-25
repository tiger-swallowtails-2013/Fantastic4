require_relative "../../app/controller/app"
require "rspec"
require 'rack'
require 'rack/test'

def app
    Sinatra::Application
end

include Rack::Test::Methods

describe "welcome page" do
    it "should set @ready to nil by default"
    it "should show new player welcome message" do
      get '/'
      expect(last_response.body).to include("Hey turtle")
    end
    it "should not show existing player welcome message"
end

describe "starting a new game" do
    it "should set ready to true on clicking start" do
      post '/ready'
      get '/'
      expect(last_response.body).to include("Start Typing!")
    end
    it "should chose a random text"
 end

describe "evaluating user input" do
    it "should not accept a wrong string"
    it "should validate string is correct before submit"
    it "should stop the timer"
end

describe "results page" do
    it "should report that a user 'typed...'" do
      get '/results'
      expect(last_response.body).to include("You typed:")
    end
    it "should report user's wpm"
    it "play_again button should redirect to a new game"
end
