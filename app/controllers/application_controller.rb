class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception




  def take_line(index = 0)
    text_words= Source.last.plain_text.split(/ /)
    result = {}
    line = ''
    text_words[index..-1].each_with_index do |w, i|
      line_limit = line.dup
      break if line.length == 63
      break if (line_limit << w + ' ').length > 63
      result[:index] = i + index + 1
      line << w + ' '
    end
    result[:line] = line
    result
  end

  def take_few_lines(index = 0)
    given_text = {}
    joined_text = ''

    3.times do |i|
      line = take_line(index.to_i)
      index = line[:index]
      given_text[:given_text] = joined_text << line[:line]
      given_text[:hidden_text] = given_text[:given_text]
      given_text[:line_length] = line[:line].length if i == 0
      given_text[:text_index] = line[:index] if i == 0
    end
    given_text
  end

  def text
    Source.last.plain_text
  end
end
