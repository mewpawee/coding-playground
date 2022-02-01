defmodule Solution do
  def main do
    sum = fn(x, y) -> x + y end
    x = IO.read(:line) |> String.trim |> String.to_integer
    y = IO.read(:line) |> String.trim |> String.to_integer
    IO.write(sum.(x, y))
  end
end
