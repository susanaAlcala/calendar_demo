class Event < ApplicationRecord
    def editable?
    start > Date.today ? true : false
    end
end
