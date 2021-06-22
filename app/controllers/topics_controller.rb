class TopicsController < ApplicationController
  
  before_action :set_sub
  before_action :set_topic, only: [:show, :edit, :update, :destroy]

  def index
    @topics = @sub.topics 
    # render component: "Topics", props: { sub: @sub, topics: @topics }
  end

  def show
    # render component: "Topic", props: { sub: @sub, topic: @topic }
  end

  def new
    @topic = @sub.topics.new
    # render component: "TopicNew", props: { sub: @sub, topic: @topic }
    render partial: "form"
  end

  def edit
    # render component: "TopicEdit", props: { sub: @sub, topic: @topic } 
    render partial: "form"
  end

  def create
    @topic = @sub.topics.new(topic_params)
    if @topic.save
      redirect_to [@sub, @topic]
    else
      render :new
    end 
  end 

  def update
    if @topic.update(topic_params)
      redirect_to [@sub, @topic]
    else
      render :edit
    end 
  end 

  def destroy 
    @topic.destroy
    redirect_to subs_topics_path(@sub)
  end 

  private

  def set_sub
    @sub = Sub.find(params[:sub_id])
  end 

  def set_topic
    @topic = Topic.find(params[:id])
  end 

  def topic_params
    params.require(:topic).permit(:name, :body)
  end 
end
