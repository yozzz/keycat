class TextController < ApplicationController

  def index
    @text = take_few_lines(params[:index] || 0)
    @text = @text.with_indifferent_access.transform_keys{|k| k.camelize(:lower).to_sym }
    respond_to do |format|
      format.html
      format.js { render json: @text }
      format.json { render json: @text.to_json }
    end
  end

end