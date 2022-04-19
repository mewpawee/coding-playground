defmodule Me do
    def say do
        IO.puts "whatup"
    end 
    def res do
        IO.puts "My name is!"
    end

    def get_name_tag(address) do
        addr_name_map = %{
            "123" => "hi"
        }
        addr_name_map[address]
    end
end
