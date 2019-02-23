class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def prepare_text(text = '', index = 0, lines_limit = 3)
    text_words = Source.last.plain_text.split(/ /)
    result = {}
    lines_size = 0
    arr_lines = []

    text_words[index..-1].each_with_index do |w, i|
      line_copy = text.dup
      break if lines_size == lines_limit
      if w.match?(/\n/)
        w = w.gsub(/\n/, '')
        if (line_copy << w).length > 63
          arr_lines << [text]
          text = ''
          text << w
        else
          text << w
          arr_lines << { line: text, line_length: text.length }
          text = ''
        end
        result[:index] = i + index + 1
        lines_size += 1
      else
        if (line_copy << w).length > 63 || (line_copy << w + ' ').length > 63
          arr_lines << { line: text.strip!, line_length: text.length }
          lines_size += 1
        elsif text_words[i+1] == nil
          arr_lines << { line: text.strip!, line_length: text.length }
          break
        else
          result[:index] = i + index + 1
          text << w + ' '
        end
      end
    end
    result[:text] = arr_lines
    result
    # text[index..-1].each_with_index do |w, i|
    #   line_limit = line.dup
    #   break if line.length == 63
    #   if w.match?(/\n/)
    #     w = w.gsub(/\n/, '')
    #     break if (line_limit << w).length > 63
    #     result[:index] = i + index + 1
    #     line << w + ' '
    #     take_line(text, result[:index])
    #     break
    #   else
    #     if (line_limit << w).length > 63 || (line_limit << w + ' ').length > 63
    #       line.strip!
    #       break
    #     else
    #       binding.pry
    #       result[:index] = i + index + 1
    #       line << w + ' '
    #     end
    #   end
    # end
    # result[:line] = line
    # result
  end

  def take_few_lines(index = 0)
    given_text = {}
    text_lines = prepare_text('', index.to_i, 3)
    given_text[:given_text] = text_lines[:text]
    given_text[:hidden_text] = text_lines[:text]
    # given_text[:line_length] = line[:line].length if i == 0
    given_text[:text_index] = text_lines[:index]
    given_text
  end

  def text
    Source.last.plain_text
  end
end
