# Randomart

<img align="right" width="128" height="128" src="./thumbnail.png">

RandomArt Idea Implementation from the Hash Visualization Paper.

in btw blazingly btw fast btw rust btw btw

## Live example

You can view deployed example at [https://randomart.idkncc.ru/]

## Requirements

### For basic one:

- electric energy
- computer
- rust

### For website (also):

- wasm-pack
- bun (or nodejs)

## Usage

- Rust version:
  ```bash
  cargo build                   # builds library
  cargo run --example <EXAMPLE> # runs example (see examples/ folder)
  ```

- Website:
  ```bash
  wasm-pack build

  cd website
  bun install # or `npm install` or whatever

  bun run dev # development
  # or
  bun run build # production (static)
  ```
