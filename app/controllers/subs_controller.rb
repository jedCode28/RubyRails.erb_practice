class SubsController < ApplicationController
  before_action :set_sub, only: [:show, :update, :edit, :destroy]
  def index
    @subs = Sub.all 
    # render component: "Subs", props:{subs:@subs}
  end

  def show
    # render component: "Sub", props: { sub: @sub }
  end

  def new
    # render component: "SubNew", props: { sub: @sub }
    @sub = Sub.new
  end

  def edit
    # render component: "SubEdit", props: { sub: @sub } 
  end

  def create 
    @sub = Sub.new(sub_params)
    if @sub.save 
      redirect_to_subs_path
    else 
      render :new
    end 
 end 

 def update
  if @sub.update(sub_params)
    redirect_to @sub
  else
    render :edit
  end 
 end 

 def destroy
  @sub.destroy 
  redirect_to_subs_path
 end 

 private

 def set_sub
  @sub = Sub.find(params[:id])
 end 

 def sub_params
  params.require(:sub).permit(:name)
 end 
end
